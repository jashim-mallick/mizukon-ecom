import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../plugins/prisma.js";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "sqlite",
	}),

	emailAndPassword: {
		enabled: true,
		autoSignIn: true,
		requireEmailVerification: false,
	},

	trustedOrigins: ["http://localhost:4000"],
});
