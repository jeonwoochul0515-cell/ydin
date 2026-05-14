// 시공 절차 4단계 — 견적·설계·시공·사후관리
const STEPS = [
  {
    num: "01",
    title: "현장 방문 · 견적",
    en: "Consult · Estimate",
    body:
      "전화·이메일 문의 접수 후 가능한 빠르게 현장 방문. 도면·용도·예산을 청취하여 정식 견적서를 무료로 제공합니다.",
  },
  {
    num: "02",
    title: "설계 · 자재선정",
    en: "Design · Specify",
    body:
      "현장 조건에 맞춘 회로·동선 설계, 신뢰할 수 있는 자재 선정. 모든 자재 내역은 사전 공유됩니다.",
  },
  {
    num: "03",
    title: "시공 · 안전관리",
    en: "Construct · Safe-Manage",
    body:
      "안전 우선으로 진행. 진행 사진과 점검 사항을 매일 보고드리고, 작은 문제도 즉시 공유합니다.",
  },
  {
    num: "04",
    title: "준공 · 사후관리",
    en: "Handover · Care",
    body:
      "준공 후에도 같은 담당자가 책임. 추가 정비와 유지보수도 한 연락으로 해결합니다.",
  },
];

export function Process() {
  return (
    <section className="block cream-2 process grain" id="process">
      <span className="sec-num l">(03) — PROCESS · 시공절차</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            견적부터<br />
            <span className="ital">사후관리</span>까지.
          </h2>
          <p className="sub l">
            견적 받은 사람과 시공하는 사람, A/S 가는 사람이 같습니다. 한 명의
            담당자가 한 현장의 처음과 끝을 책임집니다.
          </p>
        </div>

        <div style={{ position: "relative" }}>
          <svg
            className="proc-flow"
            viewBox="0 0 1200 60"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 30 Q 200 -20 400 30 T 800 30 T 1200 30"
              stroke="#E85D2C"
              strokeWidth="3"
              strokeDasharray="2 8"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          <div className="proc-grid">
            {STEPS.map((s) => (
              <div className="proc-step" key={s.num}>
                <div className="num">{s.num}</div>
                <h4>{s.title}</h4>
                <span className="en">{s.en}</span>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
