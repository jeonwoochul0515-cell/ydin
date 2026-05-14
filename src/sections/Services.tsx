// 사업영역 4종 — 전기공사·전기자재·조명·실내건축 (디자인 v2 카드 스타일)
const SERVICES = [
  {
    ord: "— 01 / WIRING",
    title: ["전기", "공사"],
    en: "Indoor & Outdoor Wiring",
    body:
      "건물 내부 배선·분전반·콘센트·조명 회로부터 옥외 인입·동력까지, 모든 전기 시공을 책임지고 마무리합니다.",
    tags: ["내선", "외선", "분전반"],
    ribbon: (
      <path
        d="M40 40 Q 200 0 240 240"
        stroke="#5B4E96"
        strokeWidth="50"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    ord: "— 02 / MATERIALS",
    title: ["전기", "자재"],
    en: "Materials Supply",
    body:
      "케이블·배관·차단기·분전반 등 현장에 꼭 맞는 자재를 합리적인 가격에 공급. 자재 선정부터 납품까지 책임집니다.",
    tags: ["케이블", "차단기", "공급"],
    ribbon: (
      <path
        d="M40 240 Q 100 80 240 40"
        stroke="#E85D2C"
        strokeWidth="50"
        strokeLinecap="round"
        fill="none"
        opacity=".25"
      />
    ),
  },
  {
    ord: "— 03 / LIGHTING",
    title: ["조명", "설계·시공"],
    en: "Lighting Design",
    body:
      "공간 용도에 맞춘 조명 설계와 시공. 매장·사무실·주거 공간을 더 밝고 효율적으로. LED·간판·에너지 절감까지.",
    tags: ["LED", "매장", "간판"],
    ribbon: (
      <path
        d="M0 140 Q 140 0 280 140 Q 140 280 0 140"
        stroke="#2C4AA0"
        strokeWidth="40"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    ord: "— 04 / INTERIOR",
    title: ["실내", "건축"],
    en: "Interior Construction",
    body:
      "전기와 인테리어를 한 번에. 동선 설계부터 마감재까지, 따로 시공사를 부를 필요 없는 통합 시공을 제공합니다.",
    tags: ["인테리어", "통합 시공", "마감"],
    ribbon: (
      <circle
        cx="200"
        cy="80"
        r="60"
        stroke="#E85D2C"
        strokeWidth="40"
        fill="none"
        opacity=".35"
      />
    ),
  },
];

export function Services() {
  return (
    <section className="block cream grain" id="services">
      <span className="sec-num l">(01) — SERVICES · 사업영역</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            전기가 흐르는
            <br />
            모든 곳, <span className="ital">네 갈래.</span>
          </h2>
          <p className="sub l">
            한 동의 배선부터 매장의 간판 조명, 인테리어 마감까지 — 와이디인은
            전류와 공간이 만나는 모든 지점을 한 손으로 책임 시공합니다.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div className="svc-card" key={i}>
              <svg className="svc-ribbon" viewBox="0 0 280 280" fill="none">
                {s.ribbon}
              </svg>
              <span className="ord">{s.ord}</span>
              <h3>
                {s.title[0]}
                <br />
                {s.title[1]}
              </h3>
              <span className="en">{s.en}</span>
              <p>{s.body}</p>
              <div className="footer">
                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a className="arr" href="#contact" aria-label="견적 문의로 이동">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
