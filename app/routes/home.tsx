import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Welcome to Resume Analyzer!" },
  ];
}

export default function Home() {
  return <main>
    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Application & resume Ratings with ease</h1>
      </div>
    </section>
  </main>;
}
