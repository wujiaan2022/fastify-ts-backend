import Fastify from "fastify"
import { taggedRoutes } from "./tagged.routes"

describe("GET /tagged/grid", () => {
    it("should return a list of tagged posts with a 200 status code", async () => {
        const app = Fastify()
        const mockTagged = [
            {
                id: 1,
                img_url: "http://example.com/tagged1.jpg",
                caption: "Tagged Post 1",
                tagged_by: "user1",
            },
            {
                id: 2,
                img_url: "http://example.com/tagged2.jpg",
                caption: "Tagged Post 2",
                tagged_by: "user2",
            },
        ]

        app.decorate("transactions", {
            posts: {
                create: jest.fn(),
                getAll: jest.fn(),
                getById: jest.fn(),
            },
            reels: {
                getAll: jest.fn().mockReturnValue([]), // dummy for reels
            },
            tagged: {
                getAll: jest.fn().mockReturnValue(mockTagged),
            },
        })

        app.register(taggedRoutes)

        const response = await app.inject({
            method: "GET",
            url: "/tagged/grid",
        })

        expect(response.statusCode).toBe(200)
        expect(JSON.parse(response.payload)).toEqual(mockTagged)
    })
})
