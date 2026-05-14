// (주)와이디인 원페이지 — Claude Design YDIN Redesign v2 구현
import { TopStrip } from "./sections/TopStrip";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { MarqueeStrip } from "./sections/MarqueeStrip";
import { Services } from "./sections/Services";
import { Stats } from "./sections/Stats";
import { Process } from "./sections/Process";
import { CalloutQuote } from "./sections/CalloutQuote";
import { Why } from "./sections/Why";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

export function App() {
  return (
    <>
      <TopStrip />
      <Header />
      <Hero />
      <MarqueeStrip />
      <Services />
      <Stats />
      <Process />
      <CalloutQuote />
      <Why />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
