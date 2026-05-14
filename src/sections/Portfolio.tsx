// 시공안내 섹션 — 자료 보강 전까지 분야별 카드로 구성
import { Building2, Store, Home, Factory, Sparkles } from "lucide-react";
import { SectionHeader } from "./About";

const CASES = [
  {
    icon: Building2,
    tag: "상업 시설",
    title: "사무실 · 빌딩 전기시공",
    body: "신축·리모델링 사무 공간 전체 전기 설비 및 분전반 구성.",
    tone: "from-slate-800 to-slate-900",
  },
  {
    icon: Store,
    tag: "매장",
    title: "상가 조명 · 간판",
    body: "고객을 끌어들이는 매장 조명 설계와 LED 간판 시공.",
    tone: "from-yellow-500 to-amber-600",
  },
  {
    icon: Home,
    tag: "주거",
    title: "아파트 · 주택 전기",
    body: "노후 배선 교체, 콘센트 증설, 스마트 조명 설치까지.",
    tone: "from-sky-700 to-slate-800",
  },
  {
    icon: Factory,
    tag: "산업",
    title: "공장 · 산업시설",
    body: "동력 설비, 접지 공사, 산업용 분전반과 안전 검사 대응.",
    tone: "from-slate-700 to-zinc-900",
  },
  {
    icon: Sparkles,
    tag: "실내건축",
    title: "전기 + 인테리어 통합",
    body: "전기 동선부터 마감재까지 한 번에 끝내는 통합 시공.",
    tone: "from-amber-500 to-yellow-600",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="WORKS"
          title="이런 시공을 해드립니다"
          description="현장 사진과 상세 시공 사례는 순차적으로 업데이트됩니다. 견적·상담은 언제든 전화 주시면 빠르게 도와드립니다."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CASES.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200"
            >
              <div
                className={`bg-gradient-to-br ${c.tone} aspect-[5/3] p-6 text-white`}
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold tracking-wide backdrop-blur">
                    {c.tag}
                  </span>
                  <c.icon className="h-6 w-6 text-white/90" />
                </div>
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-lg font-bold">{c.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">
                    {c.body}
                  </p>
                </div>
              </div>
            </article>
          ))}

          <article className="flex flex-col items-start justify-between rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
            <span className="rounded-full bg-yellow-100 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-yellow-800">
              상담
            </span>
            <div>
              <h3 className="mt-6 text-lg font-bold text-slate-900">
                찾으시는 시공이 있으신가요?
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                현장에 가장 맞는 방식으로 견적을 만들어 드립니다.
              </p>
              <a
                href="tel:051-895-5505"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                지금 전화하기
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
