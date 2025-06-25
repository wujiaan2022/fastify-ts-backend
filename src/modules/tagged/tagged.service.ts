import type { FastifyInstance } from "fastify";

export const taggedService = (fastify: FastifyInstance) => {
  return {
    getAll: async () => {
      return fastify.transactions.tagged.getAll();
    },
  };
};
