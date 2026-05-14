// 연락처 · 오시는 길 섹션 — 전화·이메일·주소·카카오맵
import { Phone, Smartphone, Mail, Printer, MapPin, Clock } from "lucide-react";

const INFO = [
  {
    icon: Phone,
    label: "유선",
    value: "051-895-5505",
    href: "tel:051-895-5505",
  },
  {
    icon: Smartphone,
    label: "대표 직통",
    value: "010-9303-9400",
    href: "tel:010-9303-9400",
  },
  {
    icon: Mail,
    label: "이메일",
    value: "yd9303@naver.com",
    href: "mailto:yd9303@naver.com",
  },
  {
    icon: Printer,
    label: "팩스",
    value: "051-895-5504",
  },
  {
    icon: MapPin,
    label: "주소",
    value: "부산광역시 부산진구 가야대로408번길 27 (개금동)",
  },
  {
    icon: Clock,
    label: "운영 시간",
    value: "평일 09:00 – 18:00 · 응급 출동 상시 상담",
  },
];

const MAP_QUERY = encodeURIComponent(
  "부산광역시 부산진구 가야대로408번길 27",
);

export function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="text-xs font-bold tracking-[0.18em] text-yellow-400">
            CONTACT
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            견적·상담은 지금 바로
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            전화 한 통이면 됩니다. 평일 영업 시간 외에는 휴대폰으로 연락 주시면
            빠르게 답변 드립니다.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <ul className="grid gap-3">
            {INFO.map((i) => {
              const inner = (
                <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-yellow-400/30 hover:bg-white/[0.06]">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400 text-slate-900">
                    <i.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[11px] font-semibold tracking-[0.18em] text-slate-400">
                      {i.label.toUpperCase()}
                    </div>
                    <div className="mt-0.5 truncate text-base font-semibold text-white">
                      {i.value}
                    </div>
                  </div>
                </div>
              );
              return (
                <li key={i.label}>
                  {i.href ? (
                    <a href={i.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>

          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              title="(주)와이디인 위치 지도"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&hl=ko&z=16&output=embed`}
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
