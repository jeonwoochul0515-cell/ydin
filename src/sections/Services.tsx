// 사업영역 4종 — 전기공사·전기자재·조명·실내건축
import { Zap, PackageOpen, Lightbulb, Hammer } from "lucide-react";
import { SectionHeader } from "./About";

const SERVICES = [
  {
    icon: Zap,
    title: "전기공사",
    body: "내선·외선 배선, 분전반 교체, 산업·상업·주거 전기시공까지 모든 전기 공사를 전문 시공합니다.",
    bullets: ["내선·외선 공사", "분전반·콘센트", "동력·접지·인입"],
  },
  {
    icon: PackageOpen,
    title: "전기자재",
    body: "현장에 꼭 맞는 자재를 합리적인 가격에 공급합니다. 자재 선정부터 납품까지 책임지겠습니다.",
    bullets: ["케이블·배관 자재", "분전반·차단기", "현장 맞춤 공급"],
  },
  {
    icon: Lightbulb,
    title: "조명",
    body: "공간의 용도에 맞춘 조명 설계와 시공. 매장·사무실·주거 공간을 더 밝고 효율적으로 만듭니다.",
    bullets: ["LED 조명 설계", "매장·간판 조명", "에너지 절감 컨설팅"],
  },
  {
    icon: Hammer,
    title: "실내건축",
    body: "전기와 인테리어를 한 번에. 마감까지 깔끔하게 정리되는 통합 시공을 제공합니다.",
    bullets: ["부분·전체 인테리어", "전기·조명 통합 시공", "사용 공간 최적화"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="SERVICES"
          title="네 가지 영역, 하나의 책임"
          description="(주)와이디인은 전기공사를 중심으로 자재 공급, 조명, 실내건축까지 통합 서비스를 제공합니다. 따로 시공사를 부를 필요 없이 한 번에 끝내드립니다."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-900/20 hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-slate-900">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {s.body}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-slate-400" />
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
