import fp from "fastify-plugin";
import { auth } from "../lib/auth.js";

const authPlugin = fp(async (fastify) => {
	fastify.route({
		method: ["GET", "POST"],
		url: "/api/auth/*",

		handler: async (request, reply) => {
			const url = new URL(request.url, `http://${request.headers.host}`);

			const headers = new Headers();

			for (const [key, value] of Object.entries(request.headers)) {
				if (value) {
					headers.set(
						key,
						Array.isArray(value) ? value.join(", ") : value,
					);
				}
			}

			const req = new Request(url, {
				method: request.method,
				headers,
				body:
					request.method === "GET" || request.method === "HEAD" ?
						undefined
					:	JSON.stringify(request.body),
			});

			const response = await auth.handler(req);

			reply.status(response.status);

			response.headers.forEach((value, key) => {
				reply.header(key, value);
			});

			const body = await response.text();

			return reply.send(body || undefined);
		},
	});
});

export default authPlugin;
