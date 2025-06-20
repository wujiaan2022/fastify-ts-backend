import type { FastifyInstance } from "fastify";

export const reelsService = (fastify: FastifyInstance) => {
  return {
    getAll: async () => {
      return fastify.transactions.reels.getAll();
    },
  };
};
