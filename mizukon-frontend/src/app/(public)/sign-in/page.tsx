import UserLogIn from "@/components/Auth/UserLogIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { TextAnimate } from "@/components/shadcnui/text-animate";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LogIn | Mizukon",
  description: "LogIn page of Mizukon",
};

const page = () => {
  return (
    <section className="flex min-h-[89dvh] items-center justify-center">
      <Card className="w-full max-w-md rounded-2xl border border-white/20 shadow-lg backdrop-blur-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-center text-2xl font-bold sm:text-3xl">
            LogIn
          </CardTitle>

          <CardDescription className="text-center text-sm leading-5 sm:text-base">
            Welcome back to{" "}
            <span>
              <TextAnimate
                animation="blurInUp"
                by="character"
                duration={2}
                className="text-primary font-medium">
                Mizukon
              </TextAnimate>
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4 sm:px-6">
          <UserLogIn />
        </CardContent>

        <CardFooter className="flex flex-wrap justify-center gap-1 px-4 pb-6 text-sm sm:text-base">
          New to Mizukon?
          <Link
            href="/sign-up"
            className="text-primary ml-1 font-medium">
            Register
          </Link>
        </CardFooter>
      </Card>
    </section>
  );
};

export default page;
