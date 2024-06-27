import { ScheduleDriver } from "../../driver.ts";
import { ActorEntry, MemoryActorDriver } from "./driver.ts";

export class MemorySchedule implements ScheduleDriver {
	constructor(private readonly driver: MemoryActorDriver, private readonly actorEntry: ActorEntry) {}

	after(duration: number, fn: string, request: unknown): void {
		setTimeout(() => {
			this.driver.callActor({
				moduleName: this.actorEntry.moduleName,
				actorName: this.actorEntry.actorName,
				instanceName: this.actorEntry.instanceName,
				fn,
				request,
			});
		}, duration);
	}

	at(timestamp: number, fn: string, request: unknown): void {
		setTimeout(() => {
			this.driver.callActor({
				moduleName: this.actorEntry.moduleName,
				actorName: this.actorEntry.actorName,
				instanceName: this.actorEntry.instanceName,
				fn,
				request,
			});
		}, timestamp - Date.now());
	}
}