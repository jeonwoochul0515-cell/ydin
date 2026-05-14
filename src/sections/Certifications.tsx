// 공식 등록·인증 서류 5종 — 2025 지명원에서 발췌한 실제 등록증/증명서 갤러리
import construction from "../assets/pptx/cert-construction-capability.png";
import license from "../assets/pptx/cert-electrical-license.png";
import business from "../assets/pptx/cert-business-registration.png";
import nationalTax from "../assets/pptx/cert-national-tax.png";
import localTax from "../assets/pptx/cert-local-tax.png";

const CERTS = [
  {
    img: construction,
    cat: "시공능력",
    h: "전기공사 시공능력 확인서",
    p: "한국전기공사협회 발급 ─ 2025년 시공능력 ₩1,518,091,000.",
  },
  {
    img: license,
    cat: "면허",
    h: "전기공사업 등록증",
    p: "제 부산-02201호 ─ 부산광역시장 발급 (2022.12.16 등록).",
  },
  {
    img: business,
    cat: "법인",
    h: "사업자등록증 (법인사업자)",
    p: "449-86-02736 ─ 전기공사업·전기판넬(분전반)·전기자재.",
  },
  {
    img: nationalTax,
    cat: "납세",
    h: "국세 납세증명서",
    p: "체납 없는 정상 납세 ─ 입찰·도급 참여 시 즉시 제출 가능.",
  },
  {
    img: localTax,
    cat: "납세",
    h: "지방세 납세증명서",
    p: "부산광역시 부산진구 ─ 지방세 완납 증명서.",
  },
];

export function Certifications() {
  return (
    <section className="block cream-2 grain" id="certifications">
      <span className="sec-num l">(07) — CERTIFICATIONS · 등록·인증</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            서류로 증명되는 <span className="ital">신뢰.</span>
          </h2>
          <p className="sub l">
            한국전기공사협회 시공능력 평가, 부산광역시 전기공사업 등록,
            국세·지방세 완납 ─ 도급·입찰에 필요한 서류는 즉시 제출 가능합니다.
          </p>
        </div>

        <div className="cert-grid">
          {CERTS.map((c) => (
            <figure className="cert-card" key={c.h}>
              <div className="cert-img">
                <img src={c.img} alt={c.h} loading="lazy" />
              </div>
              <figcaption>
                <span className="cert-cat">{c.cat}</span>
                <h6>{c.h}</h6>
                <p>{c.p}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
