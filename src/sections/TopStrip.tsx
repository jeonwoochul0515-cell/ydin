// 상단 유틸리티 스트립 — 회사 정체성과 긴급 연락처 노출
export function TopStrip() {
  return (
    <div className="top">
      <div className="wrap">
        <div className="left">
          <span>
            <em>●</em> SINCE 2022 · 부산진구 가야동
          </span>
          <span>전기공사 · 전기자재 · 조명 · 실내건축</span>
          <span>사업자등록 449-86-02736</span>
        </div>
        <div className="right">견적 상담 · 051-895-5505</div>
      </div>
    </div>
  );
}
