// 콜아웃 인용 — 회사 운영 철학 한 문장 + 대표 attribution
export function CalloutQuote() {
  return (
    <section className="callout grain">
      <svg className="callout-ribbon" viewBox="0 0 900 900" fill="none">
        <defs>
          <linearGradient id="cr1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2C4AA0" />
            <stop offset=".5" stopColor="#5B4E96" />
            <stop offset="1" stopColor="#E85D2C" />
          </linearGradient>
        </defs>
        <path
          d="M100 100 Q 500 -100 800 200 T 850 700 Q 500 1000 100 700 Q -100 400 100 100Z"
          stroke="url(#cr1)"
          strokeWidth="60"
          fill="none"
        />
      </svg>
      <div className="wrap">
        <p className="quote">
          "한 번의 시공으로 끝나지 않습니다. <br />
          <span className="ital">견적, 시공, 마감, 관리</span>까지 ─<br />
          <span className="stroke">같은 사람이 끝까지 책임집니다.</span>"
        </p>
        <div className="attrib">
          <div className="av">안</div>
          <div className="who">
            <div className="n">안용득 · 대표이사</div>
            <div className="r">CEO · YD IN ELECTRICIAN CO.,LTD.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
