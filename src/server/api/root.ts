import { tasksRouter } from "@app/server/api/routers/tasks";
import { createTRPCRouter } from "@app/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tasks: tasksRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
