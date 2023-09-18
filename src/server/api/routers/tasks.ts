import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@app/server/api/trpc";

export const tasksRouter = createTRPCRouter({
  getAllTasks: publicProcedure.query(async ({ ctx }) => {
    const taskList = await ctx.db.tasks.findMany();
    return {
      data: taskList,
    };
  }),

  addNewTasks: publicProcedure.mutation(async ({ ctx }) => {
    const addedTask = await ctx.db.tasks.create({
      data: {
        task: "Merhaba",
      },
    });

    return {
      status: 200,
      data: addedTask,
    };
  }),
});
