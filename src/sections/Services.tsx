// 사업영역 4종 카드 — 다크 + 분야별 그라데이션 아이콘
import { Zap, PackageOpen, Lightbulb, Hammer } from "lucide-react";
import { SectionHeader } from "./About";

const SERVICES = [
  {
    icon: Zap,
    title: "전기공사",
    body: "내선·외선 배선, 분전반 교체, 산업·상업·주거 전기시공까지 모든 전기 공사를 전문 시공합니다.",
    bullets: ["내선·외선 공사", "분전반·콘센트", "동력·접지·인입"],
    tone: "from-cyan-400 to-blue-600",
    glow: "rgba(34,211,238,0.35)",
  },
  {
    icon: PackageOpen,
    title: "전기자재",
    body: "현장에 꼭 맞는 자재를 합리적인 가격에 공급합니다. 자재 선정부터 납품까지 책임지겠습니다.",
    bullets: ["케이블·배관 자재", "분전반·차단기", "현장 맞춤 공급"],
    tone: "from-blue-500 to-violet-600",
    glow: "rgba(99,102,241,0.35)",
  },
  {
    icon: Lightbulb,
    title: "조명",
    body: "공간의 용도에 맞춘 조명 설계와 시공. 매장·사무실·주거 공간을 더 밝고 효율적으로 만듭니다.",
    bullets: ["LED 조명 설계", "매장·간판 조명", "에너지 절감 컨설팅"],
    tone: "from-violet-500 to-orange-400",
    glow: "rgba(168,85,247,0.35)",
  },
  {
    icon: Hammer,
    title: "실내건축",
    body: "전기와 인테리어를 한 번에. 마감까지 깔끔하게 정리되는 통합 시공을 제공합니다.",
    bullets: ["부분·전체 인테리어", "전기·조명 통합 시공", "사용 공간 최적화"],
    tone: "from-orange-400 to-red-500",
    glow: "rgba(251,146,60,0.35)",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-20 right-[-200px] -z-0 h-[480px] w-[480px] rounded-full bg-violet-700/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="SERVICES"
          title={
            <>
              네 가지 영역,{" "}
              <span className="text-grad-logo">하나의 책임</span>
            </>
          }
          description="(주)와이디인은 전기공사를 중심으로 자재 공급, 조명, 실내건축까지 통합 서비스를 제공합니다. 따로 시공사를 부를 필요 없이 한 번에 끝내드립니다."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="ring-grad group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:bg-white/[0.045]"
              style={{
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.03) inset",
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, ${s.glow} 0%, transparent 60%)`,
                }}
              />
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.tone} text-white shadow-[0_12px_28px_-12px_rgba(0,0,0,0.6)]`}
              >
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/65">
                {s.body}
              </p>
              <ul className="mt-6 space-y-2 border-t border-white/10 pt-5 text-xs text-white/55">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <span
                      className={`h-1 w-1 rounded-full bg-gradient-to-r ${s.tone}`}
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
