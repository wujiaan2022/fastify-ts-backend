import type { FastifyInstance, FastifyPluginAsync } from "fastify";
import { postsService } from "./posts.service";

// Define a type for the request body
type CreatePostBody = {
  img_url: string;
  caption: string;
};

const postsRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
  const service = postsService(fastify);

  // ✅ GET /posts
  fastify.get("/posts", async (request, reply) => {
    const allPosts = await service.getAll();
    return reply.code(200).send(allPosts);
  });

  // ✅ POST /posts
  fastify.post<{ Body: CreatePostBody }>("/posts", async (request, reply) => {
    const newPost = await service.create(request.body);
    return reply.code(201).send(newPost);
  });
};

export { postsRoutes };
