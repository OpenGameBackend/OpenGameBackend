import {
	RuntimeError,
	ScriptContext,
} from "../_gen/scripts/accept_request.ts";

export interface Request {
	userToken: string;
	friendRequestId: string;
}

export interface Response {
}

export async function run(
	ctx: ScriptContext,
	req: Request,
): Promise<Response> {
	await ctx.call("rate_limit", "throttle", { requests: 50 });
	const { userId } = await ctx.call("users", "validate_token", {
		userToken: req.userToken,
	}) as any;

	await ctx.db.$transaction(async (tx) => {
		// Lock & validate friend request
		interface FriendRequestRow {
			senderUserId: string;
			targetUserId: string;
			acceptedAt: Date | null;
			declinedAt: Date | null;
		}
		const friendRequests = await tx.$queryRaw<FriendRequestRow[]>`
			SELECT "senderUserId", "targetUserId", "acceptedAt", "declinedAt"
			FROM "FriendRequest"
			WHERE "id" = ${req.friendRequestId}
			FOR UPDATE
		`;
		const friendRequest = friendRequests[0];
		if (!friendRequest) {
			throw new RuntimeError("FRIEND_REQUEST_NOT_FOUND", {
				meta: { friendRequestId: req.friendRequestId },
			});
		}
		if (friendRequest.targetUserId !== userId) {
			throw new RuntimeError("NOT_FRIEND_REQUEST_RECIPIENT", {
				meta: { friendRequestId: req.friendRequestId },
			});
		}
		if (friendRequest.acceptedAt) {
			throw new RuntimeError("FRIEND_REQUEST_ALREADY_ACCEPTED", {
				meta: { friendRequestId: req.friendRequestId },
			});
		}
		if (friendRequest.declinedAt) {
			throw new RuntimeError("FRIEND_REQUEST_ALREADY_DECLINED", {
				meta: { friendRequestId: req.friendRequestId },
			});
		}

		// Sort the user IDs to ensure consistency
		const [userIdA, userIdB] = [
			friendRequest.senderUserId,
			friendRequest.targetUserId,
		].sort();

		// Accept the friend request & create friend
		await tx.friendRequest.update({
			where: {
				id: req.friendRequestId,
			},
			data: {
				acceptedAt: new Date(),
				friend: {
					create: { userIdA, userIdB },
				},
			},
		});
	});

	return {};
}
