import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mizukon",
  description:
    "Mizukon is an ecommerce platform that provides a seamless shopping experience for users, offering a wide range of products and services.",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <div className="space-y-4 text-center">
        <h1 className="text-5xl font-semibold">Mizukon</h1>
        <h2 className="text-3xl">
          Mizukon is an ecommerce platform that provides a seamless shopping
        </h2>
      </div>
    </section>
  );
};

export default page;
