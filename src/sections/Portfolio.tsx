// 시공안내 섹션 — 다크 + 시네마틱 그라데이션 카드
import {
  Building2,
  Store,
  Home,
  Factory,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "./About";

const CASES = [
  {
    icon: Building2,
    tag: "상업 시설",
    title: "사무실 · 빌딩 전기시공",
    body: "신축·리모델링 사무 공간 전체 전기 설비 및 분전반 구성.",
    tone: "from-cyan-500 via-blue-600 to-indigo-700",
  },
  {
    icon: Store,
    tag: "매장",
    title: "상가 조명 · 간판",
    body: "고객을 끌어들이는 매장 조명 설계와 LED 간판 시공.",
    tone: "from-fuchsia-500 via-violet-600 to-indigo-700",
  },
  {
    icon: Home,
    tag: "주거",
    title: "아파트 · 주택 전기",
    body: "노후 배선 교체, 콘센트 증설, 스마트 조명 설치까지.",
    tone: "from-blue-500 via-indigo-600 to-violet-700",
  },
  {
    icon: Factory,
    tag: "산업",
    title: "공장 · 산업시설",
    body: "동력 설비, 접지 공사, 산업용 분전반과 안전 검사 대응.",
    tone: "from-amber-500 via-orange-600 to-red-600",
  },
  {
    icon: Sparkles,
    tag: "실내건축",
    title: "전기 + 인테리어 통합",
    body: "전기 동선부터 마감재까지 한 번에 끝내는 통합 시공.",
    tone: "from-orange-400 via-rose-500 to-fuchsia-600",
  },
];

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-[-180px] -z-0 h-[480px] w-[480px] rounded-full bg-cyan-600/12 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="WORKS"
          title={
            <>
              이런 시공을{" "}
              <span className="text-grad-warm">해드립니다</span>
            </>
          }
          description="현장 사진과 상세 시공 사례는 순차적으로 업데이트됩니다. 견적·상담은 언제든 전화 주시면 빠르게 도와드립니다."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div
                className={`relative aspect-[5/3.4] bg-gradient-to-br ${c.tone} p-6 text-white`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/15 blur-3xl"
                />
                <div className="relative flex items-start justify-between">
                  <span className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] backdrop-blur">
                    {c.tag}
                  </span>
                  <c.icon className="h-7 w-7 text-white/95" />
                </div>
                <div className="absolute inset-x-6 bottom-5">
                  <h3 className="text-lg font-bold leading-snug">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/85">
                    {c.body}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <article className="ring-grad relative flex flex-col items-start justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <span className="rounded-full border border-orange-400/30 bg-orange-400/10 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-orange-300">
              상담
            </span>
            <div>
              <h3 className="mt-8 text-lg font-bold text-white">
                찾으시는 시공이 있으신가요?
              </h3>
              <p className="mt-2 text-sm text-white/65">
                현장에 가장 맞는 방식으로 견적을 만들어 드립니다.
              </p>
              <a
                href="tel:051-895-5505"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-grad-warm px-4 py-2.5 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_rgba(239,68,68,0.7)] transition hover:brightness-110"
              >
                지금 전화하기
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
