// 회사 소개 섹션 — 한 줄 소개와 3가지 핵심 가치
import { ShieldCheck, Clock, Award } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "안전 우선",
    body: "전기는 사람의 생활과 직결됩니다. 모든 시공은 안전 규정을 한 치도 어김없이 준수합니다.",
  },
  {
    icon: Clock,
    title: "신속 대응",
    body: "부산 부산진구 가야동을 거점으로, 부산 전역 1시간 권역 내 즉시 출동합니다.",
  },
  {
    icon: Award,
    title: "정확한 시공",
    body: "도면 검토에서 마무리까지, 한 번에 깔끔하게 끝내는 시공을 약속드립니다.",
  },
];

export function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="ABOUT"
          title="작지만 단단한, 부산의 전기 파트너"
          description="(주)와이디인은 2022년 부산광역시 부산진구에 자리 잡은 전기공사 전문 업체입니다. 내선·외선부터 조명 설계, 실내건축 마감까지 한 번에 책임지고 마무리합니다."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-yellow-400">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader(props: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="text-xs font-bold tracking-[0.18em] text-yellow-600">
        {props.eyebrow}
      </span>
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {props.title}
      </h2>
      {props.description && (
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {props.description}
        </p>
      )}
    </div>
  );
}
