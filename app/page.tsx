import { SignUpButton } from "@clerk/nextjs";
import { BarChart3, Link2, Lock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Link2,
    title: "Short, memorable links",
    description:
      "Turn long, unwieldy URLs into clean short links that are easy to share anywhere.",
  },
  {
    icon: Zap,
    title: "Instant redirects",
    description:
      "Visitors are sent to their destination in a flash, with no friction in between.",
  },
  {
    icon: BarChart3,
    title: "Manage in one dashboard",
    description:
      "Create, review, and organize all of your links from a single, simple dashboard.",
  },
  {
    icon: Lock,
    title: "Secure by default",
    description:
      "Your links are private to your account and protected by Clerk authentication.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Shorten links. Share smarter.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A fast, simple link shortener that turns any URL into a short link
          you can manage from your own dashboard.
        </p>
        <SignUpButton mode="modal">
          <Button size="lg">Get started for free</Button>
        </SignUpButton>
      </section>

      <section className="mx-auto grid w-full max-w-5xl gap-6 px-6 pb-24 sm:grid-cols-2">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-3 rounded-xl border bg-card p-6 text-card-foreground"
          >
            <Icon className="size-6 text-primary" aria-hidden />
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
