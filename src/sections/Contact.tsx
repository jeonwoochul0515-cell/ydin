// 견적 문의 섹션 — 회사 정보 + 위치 지도 + chip 폼 (mailto 전송)
import { useState, type FormEvent } from "react";
import locationMap from "../assets/pptx/location-map.png";

const CHIPS = ["전기공사", "전기자재", "조명", "실내건축", "유지보수", "기타"];

export function Contact() {
  const [active, setActive] = useState<Set<string>>(new Set(["전기공사"]));

  const toggleChip = (label: string) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const types = [...active].join(", ") || "미지정";
    const subject = `[견적문의] ${types} — ${data.get("name") || ""}`;
    const body = [
      `공사 종류: ${types}`,
      `성함: ${data.get("name") || ""}`,
      `연락처: ${data.get("phone") || ""}`,
      `현장 주소: ${data.get("addr") || ""}`,
      "",
      `요청 내용:`,
      `${data.get("notes") || ""}`,
    ].join("\n");
    window.location.href = `mailto:yd9303@naver.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="contact dark grain" id="contact">
      <svg
        style={{
          position: "absolute",
          left: "-200px",
          top: "-100px",
          width: "800px",
          height: "800px",
          opacity: 0.12,
          pointerEvents: "none",
        }}
        viewBox="0 0 800 800"
        fill="none"
      >
        <defs>
          <linearGradient id="contactRib" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2C4AA0" />
            <stop offset=".5" stopColor="#5B4E96" />
            <stop offset="1" stopColor="#E85D2C" />
          </linearGradient>
        </defs>
        <path
          d="M100 100 Q 500 -100 700 200 T 750 700"
          stroke="url(#contactRib)"
          strokeWidth="50"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <span className="sec-num d">(10) — CONTACT · 견적문의</span>
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <h2>
              현장이<br />
              <span className="ital o">준비되었다면,</span>
              <br />
              <span className="stroke">우리가 갑니다.</span>
            </h2>
            <div className="contact-meta">
              <div className="row">
                <div className="k">대표전화 · CALL</div>
                <div className="v big">
                  <a href="tel:051-895-5505">051-895-5505</a>
                </div>
              </div>
              <div className="row">
                <div className="k">대표 직통 · MOBILE</div>
                <div className="v big">
                  <a href="tel:010-9303-9400">010-9303-9400</a>
                </div>
              </div>
              <div className="row">
                <div className="k">이메일 · EMAIL</div>
                <div className="v">
                  <a href="mailto:yd9303@naver.com">yd9303@naver.com</a>
                </div>
              </div>
              <div className="row">
                <div className="k">팩스 · FAX</div>
                <div className="v">051-895-5504</div>
              </div>
              <div className="row">
                <div className="k">주소 · ADDRESS</div>
                <div className="v">
                  부산광역시 부산진구
                  <br />
                  가야대로408번길 27 (개금동)
                </div>
              </div>
              <div className="row">
                <div className="k">운영시간 · HOURS</div>
                <div className="v">
                  평일 09:00 – 18:00
                  <br />
                  응급 상담 상시 (휴대폰)
                </div>
              </div>
              <div className="row" style={{ gridColumn: "1 / -1" }}>
                <div className="k">사업자 · BUSINESS REG.</div>
                <div className="v">
                  449-86-02736 &nbsp;·&nbsp; 전기공사업 등록 시공사 &nbsp;·&nbsp;
                  (주)와이디인 (대표 안용득)
                </div>
              </div>
            </div>

            <a
              href="https://map.kakao.com/?q=부산광역시 부산진구 가야대로408번길 27"
              target="_blank"
              rel="noopener noreferrer"
              className="map-card"
              aria-label="회사 위치 지도 열기"
            >
              <img src={locationMap} alt="(주)와이디인 회사 위치 지도" />
              <div className="map-cap">
                <span className="k">LOCATION · 회사 위치도</span>
                <span className="v">부산진구 가야대로408번길 27 (개금동) 1층</span>
              </div>
            </a>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <h3>견적 문의</h3>
            <div className="fsub">— FREE ESTIMATE / 신속 응답</div>

            <div className="frow">
              <label>공사 종류 · Service Type</label>
              <div className="chips">
                {CHIPS.map((c) => (
                  <span
                    key={c}
                    role="button"
                    tabIndex={0}
                    className={`chip${active.has(c) ? " on" : ""}`}
                    onClick={() => toggleChip(c)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleChip(c);
                      }
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="frow">
              <label>성함 · Name</label>
              <input name="name" placeholder="홍길동" />
            </div>
            <div className="frow">
              <label>연락처 · Phone</label>
              <input name="phone" placeholder="010-0000-0000" />
            </div>
            <div className="frow">
              <label>현장 주소 · Site Address</label>
              <input name="addr" placeholder="부산광역시 ..." />
            </div>
            <div className="frow">
              <label>요청 내용 · Notes</label>
              <textarea
                name="notes"
                placeholder="공사 규모, 일정, 도면 유무 등을 자유롭게 적어주세요."
              />
            </div>
            <button type="submit" className="submit">
              견적 요청 보내기
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
