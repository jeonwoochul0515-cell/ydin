// 공사실적 표 — 2025 지명원 slide 15-17 데이터를 그대로 옮긴 전체 실적
type Row = {
  name: string;
  amount: string;
  start: string;
  end: string;
  client: string;
};

const ROWS: Row[] = [
  { name: "유베이스 전층 리모델링 공사", amount: "₩462,000,000", start: "2022.03", end: "2024.04", client: "디자인 휴인" },
  { name: "주례동 693-19 고시텔 리모델링 공사", amount: "₩75,020,000", start: "2022.12", end: "2023.04", client: "(주)성현이엔지" },
  { name: "냉동창고 자동제어 판넬 전원공사", amount: "₩154,000,000", start: "2023.05", end: "2023.08", client: "(주)서전전기통신" },
  { name: "반송여자중학교 냉난방 개선·전기공사", amount: "₩84,333,380", start: "2023.05", end: "2023.10", client: "해운대교육지원청" },
  { name: "용접기 판넬 공사", amount: "₩21,450,000", start: "2023.08", end: "2023.08", client: "아진테크" },
  { name: "계량기 합병 공사", amount: "₩71,500,000", start: "2023.10", end: "2023.11", client: "(주)냉수탕가든" },
  { name: "기계 전원 공사", amount: "₩20,240,000", start: "2023.11", end: "2023.12", client: "이진정밀" },
  { name: "기계 전원 공사", amount: "₩13,200,000", start: "2023.11", end: "2023.12", client: "(주)케이제이에프" },
  { name: "LCT 내 자동문 설치공사", amount: "₩121,550,000", start: "2023.11", end: "2024.03", client: "(주)미래건축디자인" },
  { name: "기계 전원 공사", amount: "₩20,900,000", start: "2023.12", end: "2023.12", client: "진성정밀" },
  { name: "작업장 투광등 설치 공사", amount: "₩34,320,000", start: "2024.03", end: "2024.03", client: "(주)동영전력시스템" },
  { name: "롯데호텔 자동제어 전원 공사", amount: "₩35,750,000", start: "2024.03", end: "2024.03", client: "청호테크" },
  { name: "김해 관동동 다가구주택 신축공사", amount: "₩35,200,000", start: "2024.03", end: "2025.06", client: "(주)미래건축디자인" },
  { name: "투광등 교체 공사", amount: "₩27,500,000", start: "2024.05", end: "2024.05", client: "(주)까띠" },
  { name: "기계실 구축공사", amount: "₩37,400,000", start: "2024.06", end: "2024.06", client: "(주)까띠" },
  { name: "한신포차 리모델링공사", amount: "₩27,500,000", start: "2024.07", end: "2024.09", client: "(주)까띠" },
  { name: "김해 율하동 다가구주택 신축공사", amount: "₩28,900,000", start: "2024.06", end: "2024.11", client: "(주)미래건축디자인" },
  { name: "트레이 설치", amount: "₩114,400,000", start: "2024.10", end: "2024.12", client: "(주)진성이엔지" },
  { name: "공장동 분전반 신설·교체 공사", amount: "₩38,500,000", start: "2024.10", end: "2024.11", client: "로카디(주)" },
  { name: "이동통신 기지보수공사", amount: "₩44,000,000", start: "2024.08", end: "2024.12", client: "(주)까띠" },
  { name: "한진컨테이너 터미널 리모델링공사", amount: "₩29,000,000", start: "2024.10", end: "2024.12", client: "(주)까띠" },
  { name: "코모도호텔(부산) 객실 리모델링공사", amount: "₩133,100,000", start: "2025.01", end: "2025.05", client: "(주)인성건설" },
  { name: "장유동 1062-2 신축공사", amount: "₩113,960,000", start: "2025.05", end: "2025.12", client: "(주)와이제이종합건설" },
  { name: "빙동댕 장유점 전기공사", amount: "₩22,550,000", start: "2025.06", end: "2025.07", client: "(주)까띠" },
  { name: "노사발전재단 부산근로자이음센터 전기공사", amount: "₩15,334,000", start: "2025.06", end: "2025.07", client: "(재)노사발전재단" },
  { name: "2호관 5층 스마트팜 실습실 전기공사", amount: "₩20,970,000", start: "2025.09", end: "2025.10", client: "마산대학교 산업협력단" },
  { name: "3차처리설비동 전기실 진공차단기 교체공사", amount: "₩10,978,000", start: "2025.10", end: "2025.10", client: "부산환경공단 강변사업단" },
  { name: "복지관현장 소방전기", amount: "₩49,500,000", start: "2025.04", end: "진행중", client: "(주)지호이엔지" },
  { name: "영도 문화로빛센터 소방전기공사", amount: "₩66,000,000", start: "2025.11", end: "진행중", client: "화성소방" },
  { name: "교내 가로등 보수공사", amount: "₩18,500,000", start: "2025.11", end: "2025.11", client: "동의과학대학교 산업협력단" },
  { name: "트레이 설치공사", amount: "₩109,000,000", start: "2025.07", end: "2025.12", client: "(주)유림" },
];

export function TrackRecord() {
  return (
    <section className="block dark grain" id="track">
      <span className="sec-num d">(09) — TRACK RECORD · 공사실적</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            지금까지 ─
            <br />
            <span className="ital">{ROWS.length}건</span>의 시공.
          </h2>
          <p className="sub d">
            2022년 출범 이후 누적된 공사실적입니다. 호텔 객실 리모델링부터 학교
            전기공사, 신축, 자동문·트레이 같은 특수 시공까지 ─ 발주처 신뢰가 그대로
            누적되어 왔습니다.
          </p>
        </div>

        <div className="track-table-wrap">
          <table className="track-table">
            <thead>
              <tr>
                <th style={{ width: "8%" }}>NO.</th>
                <th>공사명</th>
                <th style={{ width: "16%" }}>금액</th>
                <th style={{ width: "11%" }}>착공</th>
                <th style={{ width: "11%" }}>준공</th>
                <th style={{ width: "20%" }}>발주처</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r, i) => (
                <tr key={i}>
                  <td className="num">{String(i + 1).padStart(2, "0")}</td>
                  <td className="name">{r.name}</td>
                  <td className="amt">{r.amount}</td>
                  <td className="date">{r.start}</td>
                  <td className="date">{r.end}</td>
                  <td className="client">{r.client}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
