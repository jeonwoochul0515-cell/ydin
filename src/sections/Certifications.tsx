// 공식 등록·인증 5종 — 매거진 톤의 비대칭 레이아웃 + 면허번호 디스플레이 히어로
import construction from "../assets/pptx/cert-construction-capability.png";
import license from "../assets/pptx/cert-electrical-license.png";
import business from "../assets/pptx/cert-business-registration.png";
import nationalTax from "../assets/pptx/cert-national-tax.png";
import localTax from "../assets/pptx/cert-local-tax.png";

const HERO = {
  img: construction,
  cat: "01 / CAPACITY",
  h: "전기공사 시공능력 확인서",
  serial: "₩1,518,091,000",
  meta: "한국전기공사협회 발급 · 2025년 평가 기준",
  p: "매년 갱신되는 협회 공식 시공능력. 도급·입찰의 즉시 제출 가능 증빙입니다.",
};

const LICENSE = {
  img: license,
  cat: "02 / LICENSE",
  h: "전기공사업 등록증",
  serial: "제 부산-02201호",
  meta: "부산광역시장 · 2022.12.16 등록",
  p: "전기공사업법 제4조 제1항에 따라 등록된 정식 전기공사 시공사.",
};

const SUPPORTING = [
  {
    img: business,
    cat: "03 / CORP",
    h: "사업자등록증",
    serial: "449-86-02736",
    meta: "법인사업자 · 2022.11.07",
    p: "전기공사업 · 전기판넬(분전반) 제작·조립 · 전기자재.",
  },
  {
    img: nationalTax,
    cat: "04 / TAX",
    h: "국세 납세증명서",
    serial: "체납 없음",
    meta: "국세청 발급",
    p: "체납 없는 정상 납세 — 입찰·도급 참여 즉시 제출.",
  },
  {
    img: localTax,
    cat: "05 / TAX",
    h: "지방세 납세증명서",
    serial: "체납 없음",
    meta: "부산진구청 발급",
    p: "지방세 완납 증명 — Local Tax Payment Certificate.",
  },
];

export function Certifications() {
  return (
    <section className="cert-section dark grain" id="certifications">
      <svg
        className="cert-deco"
        viewBox="0 0 1200 600"
        fill="none"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="certRib" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2C4AA0" stopOpacity=".55" />
            <stop offset=".5" stopColor="#5B4E96" stopOpacity=".35" />
            <stop offset="1" stopColor="#E85D2C" stopOpacity=".55" />
          </linearGradient>
        </defs>
        <path
          d="M-50 200 Q 300 -50 700 240 T 1300 320"
          stroke="url(#certRib)"
          strokeWidth="90"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      <span className="sec-num d">(07) — CERTIFICATIONS · 등록·인증</span>
      <div className="wrap">
        <div className="cert-head">
          <div>
            <span className="eyebrow">— OFFICIAL DOCUMENTS · 5건</span>
            <h2>
              서류로 증명되는
              <br />
              <span className="ital o">신뢰의 무게.</span>
            </h2>
          </div>
          <p className="cert-lede">
            전기공사업 면허, 시공능력 평가, 사업자 등록, 국세·지방세 완납 —
            도급·입찰에 필요한 5건의 공식 서류를 그대로 공개합니다. 별도의 보안
            처리 없이, 발주처에 보여드리는 그대로.
          </p>
        </div>

        <div className="cert-hero-row">
          <article className="cert-hero">
            <div className="cert-hero-media">
              <img src={HERO.img} alt={HERO.h} loading="lazy" />
              <span className="cert-tag">{HERO.cat}</span>
            </div>
            <div className="cert-hero-body">
              <div className="cert-kicker">{HERO.meta}</div>
              <h3>{HERO.h}</h3>
              <div className="cert-display">{HERO.serial}</div>
              <p>{HERO.p}</p>
            </div>
          </article>

          <article className="cert-license">
            <div className="cert-license-media">
              <img src={LICENSE.img} alt={LICENSE.h} loading="lazy" />
            </div>
            <span className="cert-tag inv">{LICENSE.cat}</span>
            <div className="cert-license-body">
              <div className="cert-kicker o">{LICENSE.meta}</div>
              <h3>{LICENSE.h}</h3>
              <div className="cert-display lg">{LICENSE.serial}</div>
              <p>{LICENSE.p}</p>
            </div>
          </article>
        </div>

        <div className="cert-support-row">
          {SUPPORTING.map((c) => (
            <article className="cert-sup" key={c.h}>
              <div className="cert-sup-media">
                <img src={c.img} alt={c.h} loading="lazy" />
                <span className="cert-tag sm">{c.cat}</span>
              </div>
              <div className="cert-sup-body">
                <div className="cert-kicker">{c.meta}</div>
                <h4>{c.h}</h4>
                <div className="cert-display sm">{c.serial}</div>
                <p>{c.p}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
