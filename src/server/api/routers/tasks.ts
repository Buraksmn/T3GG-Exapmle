import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@app/server/api/trpc";
import { string, z } from "zod";

export const tasksRouter = createTRPCRouter({
  getAllTasks: publicProcedure.query(async ({ ctx }) => {
    const taskList = await ctx.db.tasks.findMany();
    return {
      data: taskList,
    };
  }),

  addNewTasks: publicProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const addedTask = await ctx.db.tasks.create({
        data: {
          task: input.title,
          description: input.description,
        },
      });
      return {
        status: 200,
        data: addedTask,
      };
    }),

  removeTask: publicProcedure.mutation(async ({ ctx }) => {
    const removedItem = await ctx.db.tasks.deleteMany();
    return {
      success: true,
    };
  }),
});
