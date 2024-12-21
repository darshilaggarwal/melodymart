import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col md:flex-row w-full max-h-screen h-screen overflow-hidden">
      <div className="hidden lg:flex lg:flex-[2] p-10 bg-primary/10 dark:border-r">
        <Link href={"/"} className="relative z-20">
          melodymart
        </Link>
      </div>
      <div className="flex-1 md:p-8 p-4 my-auto mx-auto max-w-lg">
        {children}
      </div>
    </section>
  );
}
