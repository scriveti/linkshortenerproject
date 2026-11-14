import { SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  BarChart3,
  LayoutDashboard,
  Link2,
  MousePointerClick,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
      "Visitors land on your destination in a blink, with no friction and no detours.",
  },
  {
    icon: BarChart3,
    title: "Click tracking",
    description:
      "See how often each link is used so you know which content resonates.",
  },
  {
    icon: LayoutDashboard,
    title: "Personal dashboard",
    description:
      "Create, review, and manage all of your links in one organised place.",
  },
  {
    icon: ShieldCheck,
    title: "Private by default",
    description:
      "Your links are tied to your account. Only you can see and manage them.",
  },
  {
    icon: MousePointerClick,
    title: "Free to get started",
    description:
      "Sign up in seconds and create your first short link right away.",
  },
];

const steps = [
  { title: "Sign up", description: "Create your free account in seconds." },
  { title: "Paste your URL", description: "Add any long link you want to share." },
  { title: "Share it", description: "Copy your short link and track every click." },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-6 py-24 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
          Shorten links. Share smarter.
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          A simple, fast link shortener that turns long URLs into short links
          and shows you how they perform.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <SignUpButton mode="modal">
            <Button size="lg">Get started for free</Button>
          </SignUpButton>
          <SignInButton mode="modal">
            <Button size="lg" variant="outline">
              Sign in
            </Button>
          </SignInButton>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight">
          Everything you need to manage links
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="mb-2 size-6 text-primary" />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6 py-16">
        <h2 className="mb-10 text-center text-3xl font-semibold tracking-tight">
          How it works
        </h2>
        <ol className="grid gap-6 sm:grid-cols-3">
          {steps.map(({ title, description }, i) => (
            <li key={title}>
              <Card className="h-full">
                <CardHeader>
                  <CardDescription>Step {i + 1}</CardDescription>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{description}</CardDescription>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4 px-6 py-24 text-center">
        <h2 className="text-3xl font-semibold tracking-tight">
          Ready to create your first short link?
        </h2>
        <SignUpButton mode="modal">
          <Button size="lg">Sign up now</Button>
        </SignUpButton>
      </section>
    </main>
  );
}
