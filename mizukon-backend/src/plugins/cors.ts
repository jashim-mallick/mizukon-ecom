import cors from "@fastify/cors";
import fp from "fastify-plugin";

const corsPlugin = fp(async (fastify) => {
	await fastify.register(cors, {
		origin: "http://localhost:4000",
		credentials: true,
	});
});

export default corsPlugin;
