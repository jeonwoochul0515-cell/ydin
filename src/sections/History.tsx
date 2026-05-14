// 회사 연혁 — 2022 사업자등록부터 2024 롯데쇼핑 협력업체 등록까지 4건
const EVENTS = [
  {
    date: "2022.11.09",
    title: "와이디인 사업자 등록",
    body: "부산광역시 부산진구 가야대로408번길 27 (개금동)에서 출범. 법인사업자 등록번호 449-86-02736.",
  },
  {
    date: "2022.12.16",
    title: "전기공사업 면허 등록",
    body: "부산광역시장으로부터 전기공사업 등록(제 부산-02201호) 취득. 정식 전기공사 시공사로 출범.",
  },
  {
    date: "2022.12.20",
    title: "한국전기공사협회 가입",
    body: "협회 가입으로 시공능력 평가·기술자 경력증 발급·도급 입찰 자격을 갖춤.",
  },
  {
    date: "2024.08.10",
    title: "롯데쇼핑 협력업체 등록",
    body: "대기업 시공사와의 협력 채널 확보. 호텔·매장 리모델링 등 중·대형 현장 수주의 기반.",
  },
];

export function History() {
  return (
    <section className="block cream grain" id="history">
      <span className="sec-num l">(05) — HISTORY · 회사연혁</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            짧지만 ─
            <br />
            <span className="ital">탄탄한 발자국.</span>
          </h2>
          <p className="sub l">
            2022년 11월 9일 사업자등록부터 시작해, 같은 해 12월 전기공사업 면허
            등록 → 협회 가입 → 2024년 롯데쇼핑 협력업체 등록까지. 시작과 동시에
            법정 절차와 평가를 모두 통과한 정식 시공사입니다.
          </p>
        </div>

        <ol className="hist-list">
          {EVENTS.map((e) => (
            <li className="hist-row" key={e.date}>
              <div className="hist-date">
                <span className="y">{e.date.slice(0, 4)}</span>
                <span className="md">{e.date.slice(5)}</span>
              </div>
              <div className="hist-line" aria-hidden />
              <div className="hist-body">
                <h5>{e.title}</h5>
                <p>{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
