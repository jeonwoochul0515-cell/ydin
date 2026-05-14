// 회사 소개 섹션 — 다크 카드 + 그라데이션 아이콘 박스
import { ShieldCheck, Clock, Award } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "안전 우선",
    body: "전기는 사람의 생활과 직결됩니다. 모든 시공은 안전 규정을 한 치도 어김없이 준수합니다.",
    tone: "from-cyan-400 to-blue-600",
  },
  {
    icon: Clock,
    title: "신속 대응",
    body: "부산 부산진구 가야동을 거점으로, 부산 전역 1시간 권역 내 즉시 출동합니다.",
    tone: "from-violet-500 to-fuchsia-600",
  },
  {
    icon: Award,
    title: "정확한 시공",
    body: "도면 검토에서 마무리까지, 한 번에 깔끔하게 끝내는 시공을 약속드립니다.",
    tone: "from-orange-400 to-red-500",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeader
          eyebrow="ABOUT"
          title={
            <>
              작지만 단단한,
              <br className="sm:hidden" />{" "}
              <span className="text-grad-cool">부산의 전기 파트너</span>
            </>
          }
          description="(주)와이디인은 2022년 부산광역시 부산진구에 자리 잡은 전기공사 전문 업체입니다. 내선·외선부터 조명 설계, 실내건축 마감까지 한 번에 책임지고 마무리합니다."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="ring-grad group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition hover:-translate-y-0.5 hover:bg-white/[0.04]"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.tone} text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]`}
              >
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
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
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-white/55">
        <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-violet-500" />
        {props.eyebrow}
      </span>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
        {props.title}
      </h2>
      {props.description && (
        <p className="mt-5 text-base leading-relaxed text-white/65">
          {props.description}
        </p>
      )}
    </div>
  );
}
