// 회사소개 (Why YDIN) — 네 가지 약속 + 현장 사진 placeholder
const ROWS = [
  {
    n: "01",
    h: "정식 전기공사업 등록 시공사",
    p: "전기공사업 등록을 갖춘 정식 시공사. 모든 공사는 법정 절차에 따라 진행되며, 준공 후 도면·내역 일체를 제공합니다.",
    meta: "— 면허번호는 견적 시 확인 가능",
  },
  {
    n: "02",
    h: "안전 우선 · 모든 현장",
    p: "전기는 사람의 생활과 직결됩니다. 작은 공사도 큰 공사와 동일한 안전 기준으로 진행하며, 점검 결과를 매일 공유합니다.",
    meta: "— SAFETY FIRST · YDIN STANDARD",
  },
  {
    n: "03",
    h: "부산 전역 신속 출동",
    p: "정전·누전·단락 등 긴급 상황에 부산 전역 1시간 권역 내 출동을 목표로 운영합니다. 야간·휴일에도 휴대폰으로 연결됩니다.",
    meta: "— EMERGENCY · 010-9303-9400",
  },
  {
    n: "04",
    h: "전기부터 마감까지 한 손에",
    p: "전기공사·자재·조명·실내건축을 한 시공사가 모두 다룹니다. 따로 시공사를 부를 필요 없는 통합 시공이 기본입니다.",
    meta: "— ONE-STOP · WIRING TO FINISH",
  },
];

export function Why() {
  return (
    <section className="block cream grain" id="about">
      <span className="sec-num l">(04) — WHY YD IN · 회사소개</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            처음부터 끝까지,<br />
            <span className="ital">같은 손으로.</span>
          </h2>
          <p className="sub l">
            한 줄로 요약됩니다 — "같은 사람이 끝까지 한다." 그 단순함을 지키기
            위해 와이디인이 운영하는 네 가지 약속입니다.
          </p>
        </div>

        <div className="why-grid">
          <div className="why-img">
            <div className="ph">
              <div className="l">— JOBSITE PHOTO</div>
              <div className="v">
                현장 사진
                <br />
                자리
              </div>
            </div>
            <div className="corner">
              <span>
                YDIN / SITE 0001
                <br />
                BUSAN BUSANJIN-GU
              </span>
              <span className="badge">실제 사진 교체 예정</span>
            </div>
          </div>

          <div className="why-list">
            {ROWS.map((r) => (
              <div className="why-row" key={r.n}>
                <div className="n">{r.n}</div>
                <div>
                  <h5>{r.h}</h5>
                  <p>{r.p}</p>
                  <div className="meta">{r.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
