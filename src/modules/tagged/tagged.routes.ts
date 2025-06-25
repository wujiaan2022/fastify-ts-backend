import type { FastifyInstance, FastifyPluginAsync } from "fastify";
import { taggedService } from "./tagged.service";

export const taggedRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  const service = taggedService(fastify);

  fastify.get("/tagged/grid", async (request, reply) => {
    const tagged = await service.getAll();
    reply.code(200).send(tagged);
  });
};
