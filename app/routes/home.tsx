import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Welcome to Resume Analyzer!" },
  ];
}

export default function Home() {
  return <main>
    <Navbar />
    <section className="main-section">
      <div className="page-heading">
        <h1>Track your Application & resume Ratings with ease</h1>
        <h2>Submit your resume and get instant feedback</h2>
      </div>
    </section>  
  </main>
}
