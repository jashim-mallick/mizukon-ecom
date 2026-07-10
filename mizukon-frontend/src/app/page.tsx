import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mizukon - Home",
  description: "an ecommerce app",
};

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <div className="space-y-2 text-center">
        <h1 className="text-5xl font-semibold">Mizukon</h1>
        <h2 className="text-3xl">an ecommerce app</h2>
      </div>
    </section>
  );
};

export default page;
