import { PrismaLibSql } from "@prisma/adapter-libsql";
import { FastifyPluginAsync } from "fastify";
import fp from "fastify-plugin";
import { PrismaClient } from "../generated/prisma/client.js";
import { env } from "../utils/env.js";

declare module "fastify" {
	interface FastifyInstance {
		prisma: PrismaClient;
	}
}

export const prisma = new PrismaClient({
	log: ["error", "warn"],
	adapter: new PrismaLibSql({
		url: env().DATABASE_URL,
	}),
});

const prismaPlugin: FastifyPluginAsync = fp(async (fastify) => {
	await prisma.$connect();

	fastify.decorate("prisma", prisma);

	fastify.addHook("onClose", async () => {
		await prisma.$disconnect();
	});
});

export default prismaPlugin;
