// (주)와이디인 원페이지 홈페이지 루트 — 다크 베이스
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export function App() {
  return (
    <div className="min-h-screen text-[var(--color-text)]">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
