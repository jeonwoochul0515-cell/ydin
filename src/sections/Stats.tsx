// 숫자 섹션 — 신생 시공사 톤에 맞춘 검증 가능한 4개 지표
const STATS = [
  {
    k: "YEAR · 설립",
    v: "2022",
    small: "년",
    d: "부산광역시 부산진구 가야동에서 출범 — 같은 자리에서 같은 손으로.",
  },
  {
    k: "SERVICES · 사업영역",
    v: "4",
    small: "영역",
    d: "전기공사 · 전기자재 · 조명 · 실내건축 — 한 시공사가 모두 책임.",
  },
  {
    k: "AREA · 출동 권역",
    v: "전역",
    small: "부산",
    d: "거점에서 1시간 권역 내 부산 전역 현장 출동 가능.",
  },
  {
    k: "RESPONSE · 상담",
    v: "24",
    small: "h",
    d: "평일 영업 외 시간에도 휴대폰 연결로 신속 상담을 받습니다.",
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
            2022년 부산진구 가야동에서 출범 ─ (주)와이디인이 지금까지 쌓아온
            기록입니다. 매년 갱신되며, 갱신될 때마다 더 단단해집니다.
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
