// 숫자 섹션 — 2025년 지명원 기준 실제 회사 지표
const STATS = [
  {
    k: "CAPACITY · 시공능력",
    v: "15.18",
    small: "억원",
    d: "2025년 한국전기공사협회 평가 기준 ₩1,518,091,000 — 매년 갱신되는 공식 시공능력.",
  },
  {
    k: "CAPITAL · 자본금",
    v: "2.6",
    small: "억원",
    d: "실질자본금 ₩260,308,000 — 안정적 재무 구조로 중·대형 현장도 책임 시공.",
  },
  {
    k: "ENGINEERS · 기술자",
    v: "3",
    small: "명",
    d: "전기기능사·전기기사 보유 초급기술자 3명 + 사무 2명 + 현장소장 2명 = 총 7명.",
  },
  {
    k: "SINCE · 설립",
    v: "2022",
    small: "년",
    d: "2022.11 사업자등록·12 전기공사업 면허(제 부산-02201호)·전기공사협회 가입.",
  },
];

export function Stats() {
  return (
    <section className="block dark grain">
      <span className="sec-num d">(02) — BY THE NUMBERS</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            한 자리에서<br />
            쌓아가는 <span className="ital">숫자.</span>
          </h2>
          <p className="sub d">
            2022년 부산진구 가야동에서 출범 ─ 한국전기공사협회 시공능력 평가,
            등록 자본금, 기술자 현황까지 실제 지명원 기준 공식 지표입니다.
          </p>
        </div>

        <div className="stat-row">
          {STATS.map((s) => (
            <div className="stat" key={s.k}>
              <div className="k">{s.k}</div>
              <div className="v">
                {s.v}
                <small>{s.small}</small>
              </div>
              <div className="d">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
