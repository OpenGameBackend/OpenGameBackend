import { Database, Query, ScriptContext } from "../module.gen.ts";
import { FriendRequest, friendRequestFromRow } from "../utils/types.ts";

export interface Request {
	userToken: string;
}

export interface Response {
	friendRequests: FriendRequest[];
}

export async function run(
	ctx: ScriptContext,
	req: Request,
): Promise<Response> {
	await ctx.modules.rateLimit.throttlePublic({});

	const { userId } = await ctx.modules.users.authenticateTokenInternal({
		userToken: req.userToken,
	});

	const rows = await ctx.db.query.friendRequests.findMany({
		where: Query.and(
			Query.eq(Database.friendRequests.senderUserId, userId),
			Query.isNull(Database.friendRequests.acceptedAt),
			Query.isNull(Database.friendRequests.declinedAt),
		),
		orderBy: Query.desc(Database.friendRequests.createdAt),
		limit: 100,
	});

	const friendRequests = rows.map(friendRequestFromRow);

	return { friendRequests };
}
