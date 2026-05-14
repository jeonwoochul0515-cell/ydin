// 메인 Hero — 슬로건과 핵심 CTA
import { Phone, MessageCircle, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-slate-900 pt-28 pb-20 text-white sm:pt-36 sm:pb-28"
    >
      <BackgroundGrid />

      <div className="relative mx-auto max-w-6xl px-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-semibold text-yellow-300">
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          부산 부산진구 · 전기공사 전문
        </span>

        <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          전기, 우리가
          <br />
          <span className="text-yellow-400">책임지겠습니다.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          전기공사 · 전기자재 · 조명 · 실내건축까지.
          <br className="hidden sm:block" />
          (주)와이디인은 안전과 정확을 최우선으로, 부산 전역 어디든 신속하게
          출동합니다.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="tel:051-895-5505"
            className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            <Phone className="h-4 w-4" />
            견적 전화 051-895-5505
          </a>
          <a
            href="tel:010-9303-9400"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            대표 직통 010-9303-9400
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-300 underline-offset-4 transition hover:text-white hover:underline"
          >
            <MapPin className="h-4 w-4" />
            오시는 길 보기
          </a>
        </div>

        <dl className="mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8 text-left">
          {STATS.map((s) => (
            <div key={s.label}>
              <dt className="text-xs font-medium text-slate-400">{s.label}</dt>
              <dd className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const STATS = [
  { label: "출동 권역", value: "부산 전역" },
  { label: "운영 시간", value: "24h 상담" },
  { label: "전문 분야", value: "4 영역" },
];

function BackgroundGrid() {
  return (
    <>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-yellow-400/15 blur-3xl"
      />
    </>
  );
}
