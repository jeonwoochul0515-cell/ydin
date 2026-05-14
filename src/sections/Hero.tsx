// 메인 Hero — 풀스크린 다크 + 로고 그라데이션 글로우 + 시네마틱 슬로건
import { Phone, MessageCircle, MapPin, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-44 sm:pb-32"
    >
      <HeroBackdrop />

      <div className="relative mx-auto max-w-6xl px-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-white/80 backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </span>
          BUSAN · 전기공사 전문
        </span>

        <h1 className="mt-6 text-[40px] font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          전기, 우리가
          <br />
          <span className="text-grad-logo">책임지겠습니다.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
          전기공사 · 전기자재 · 조명 · 실내건축까지.
          <br className="hidden sm:block" />
          <span className="text-white/85">(주)와이디인</span>은 안전과 정확을
          최우선으로, 부산 전역 어디든 신속하게 출동합니다.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="tel:051-895-5505"
            className="group inline-flex items-center gap-2 rounded-full bg-grad-logo px-6 py-3.5 text-sm font-bold text-black shadow-[0_20px_60px_-20px_rgba(168,85,247,0.7)] transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" />
            견적 전화 051-895-5505
          </a>
          <a
            href="tel:010-9303-9400"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08]"
          >
            <MessageCircle className="h-4 w-4" />
            대표 직통 010-9303-9400
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-white/60 underline-offset-4 transition hover:text-white hover:underline"
          >
            <MapPin className="h-4 w-4" />
            오시는 길
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8 text-left">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-[11px] font-semibold tracking-[0.18em] text-white/45">
                {s.label}
              </dt>
              <dd className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#about"
          aria-label="아래로 스크롤"
          className="mt-20 inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-white/40 transition hover:text-white/70"
        >
          SCROLL <ArrowDown className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}

const STATS = [
  { label: "출동 권역", value: "부산 전역" },
  { label: "운영 시간", value: "24h 상담" },
  { label: "전문 분야", value: "4 영역" },
];

function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 -z-10 h-[520px] w-[520px] rounded-full bg-cyan-500/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-10 right-[-120px] -z-10 h-[460px] w-[460px] rounded-full bg-violet-600/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-[520px] w-[520px] rounded-full bg-orange-500/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 75% 60% at 50% 30%, black 35%, transparent 100%)",
        }}
      />
    </>
  );
}
