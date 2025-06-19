import type { FastifyInstance } from "fastify";

// Define a type for the data needed to create a post
type CreatePostData = {
  img_url: string;
  caption: string;
};

export const postsService = (fastify: FastifyInstance) => {
  return {
    create: async (postData: CreatePostData) => {
      fastify.log.info(`Creating a new post`);
      const post = fastify.transactions.posts.create(postData);
      return post;
    },

    // ✅ Add this method
    getAll: async () => {
      fastify.log.info(`Fetching all posts`);
      const posts = fastify.transactions.posts.getAll();
      return posts;
    },
  };
};
