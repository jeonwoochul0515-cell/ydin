// 오렌지 마퀴 스트립 — 사업영역 키워드 무한 스크롤
const KEYWORDS = [
  "전기공사",
  "전기자재",
  "조명",
  "실내건축",
  "내선·외선",
  "분전반·콘센트",
  "LED 조명",
  "매장·간판",
  "인테리어 통합",
  "부산 전역 출동",
];

export function MarqueeStrip() {
  const items = [...KEYWORDS, ...KEYWORDS];
  return (
    <div className="strip">
      <div className="strip-track">
        {items.map((kw, i) => (
          <span
            key={`${kw}-${i}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 60 }}
          >
            <span>{kw}</span>
            <i className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
