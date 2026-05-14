// 기술자 보유 현황 + 기구 조직도 — slide 10 명단과 slide 14 조직 구조
const STAFF = [
  {
    name: "안용득",
    role: "대표이사",
    cert: "전기기능사 · 초급기술자",
    reg: "CZ202105076",
    since: "2023.08.01",
  },
  {
    name: "곽동훈",
    role: "이사",
    cert: "초급기술자",
    reg: "D5202310813",
    since: "2022.12.16",
  },
  {
    name: "이동건",
    role: "대리",
    cert: "전기기사 · 초급기술자",
    reg: "DZ202315350",
    since: "2024.06.18",
  },
];

const COUNTS = [
  { k: "기술자", v: "3", small: "명" },
  { k: "사무실", v: "2", small: "명" },
  { k: "현장소장", v: "2", small: "명" },
  { k: "총 근무인원", v: "7", small: "명" },
];

export function Team() {
  return (
    <section className="block cream-2 grain" id="team">
      <span className="sec-num l">(06) — TEAM · 기술자·조직</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            현장에서 ─<br />
            <span className="ital">함께 책임지는 사람.</span>
          </h2>
          <p className="sub l">
            한국전기공사협회에서 발급한 기술자 경력증을 보유한 3인의 초급기술자가
            현장을 책임집니다. 대표가 직접 현장을 챙기는 구조로, 총 근무인원은
            7명입니다.
          </p>
        </div>

        <div className="team-grid">
          <div className="staff-card">
            <div className="staff-head">
              <span className="lbl">기술자 명단 · ENGINEERS</span>
              <span className="cnt">총 {STAFF.length}명</span>
            </div>
            <ul className="staff-list">
              {STAFF.map((s) => (
                <li className="staff-row" key={s.reg}>
                  <div className="staff-name">
                    <h6>{s.name}</h6>
                    <span className="role">{s.role}</span>
                  </div>
                  <div className="staff-meta">
                    <div className="cert">{s.cert}</div>
                    <div className="reg">
                      등록번호 {s.reg} · 입사 {s.since}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="staff-counts">
              {COUNTS.map((c) => (
                <div className="staff-count" key={c.k}>
                  <div className="k">{c.k}</div>
                  <div className="v">
                    {c.v}
                    <small>{c.small}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="org-card">
            <span className="lbl">기구 조직도 · ORG CHART</span>
            <h4>주식회사 와이디인</h4>

            <div className="org-root">
              <div className="org-box top">
                <span className="t">대표이사</span>
                <span className="n">안용득</span>
              </div>
            </div>
            <div className="org-stem" aria-hidden />
            <div className="org-row">
              <div className="org-box">
                <span className="t">사무·관리</span>
                <span className="n">2명</span>
              </div>
              <div className="org-box">
                <span className="t">기술·시공</span>
                <span className="n">기술자 3명</span>
              </div>
              <div className="org-box">
                <span className="t">현장</span>
                <span className="n">현장소장 2명</span>
              </div>
            </div>
            <div className="org-note">
              ※ 전 인원 부산 거점 상주 · 총 근무인원 7명
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
