// 연락처 · 오시는 길 — 그라데이션 글로우 패널 + 임베드 지도
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
    <section id="contact" className="relative overflow-hidden py-28 sm:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 -z-0 h-[520px] w-[520px] rounded-full bg-violet-700/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 -z-0 h-[520px] w-[520px] rounded-full bg-orange-500/15 blur-[140px]"
      />
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] text-white/55">
            <span className="h-px w-8 bg-gradient-to-r from-orange-400 to-red-500" />
            CONTACT
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            견적·상담은{" "}
            <span className="text-grad-warm">지금 바로</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            전화 한 통이면 됩니다. 평일 영업 시간 외에는 휴대폰으로 연락 주시면
            빠르게 답변 드립니다.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <ul className="grid gap-3">
            {INFO.map((i) => {
              const inner = (
                <div className="ring-grad group flex items-start gap-3.5 rounded-2xl border border-white/10 bg-white/[0.025] p-4.5 transition hover:bg-white/[0.05]">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-grad-logo text-black shadow-[0_10px_30px_-12px_rgba(168,85,247,0.6)]">
                    <i.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 py-0.5">
                    <div className="text-[11px] font-semibold tracking-[0.18em] text-white/45">
                      {i.label.toUpperCase()}
                    </div>
                    <div className="mt-1 truncate text-base font-semibold text-white">
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

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-1.5">
            <iframe
              title="(주)와이디인 위치 지도"
              src={`https://maps.google.com/maps?q=${MAP_QUERY}&hl=ko&z=16&output=embed`}
              className="h-[440px] w-full rounded-xl"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                filter:
                  "invert(0.9) hue-rotate(180deg) saturate(0.85) brightness(0.9)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
