import type { FastifyInstance, FastifyPluginAsync } from "fastify";
import { reelsService } from "./reels.service";

export const reelsRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  const service = reelsService(fastify);

  fastify.get("/reels/grid", async (request, reply) => {
    const reels = await service.getAll();
    reply.code(200).send(reels);
  });
};
