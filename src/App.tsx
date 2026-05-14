// (주)와이디인 원페이지 — 2025 지명원 데이터 기반 풀 콘텐츠 (Claude Design YDIN v2)
import { TopStrip } from "./sections/TopStrip";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { MarqueeStrip } from "./sections/MarqueeStrip";
import { Services } from "./sections/Services";
import { Stats } from "./sections/Stats";
import { Process } from "./sections/Process";
import { CalloutQuote } from "./sections/CalloutQuote";
import { Why } from "./sections/Why";
import { History } from "./sections/History";
import { Team } from "./sections/Team";
import { Certifications } from "./sections/Certifications";
import { Projects } from "./sections/Projects";
import { TrackRecord } from "./sections/TrackRecord";
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
      <History />
      <Team />
      <Certifications />
      <Projects />
      <TrackRecord />
      <Contact />
      <Footer />
    </>
  );
}
