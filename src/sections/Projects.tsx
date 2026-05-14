// 대표 시공 카드 — 2025 지명원 공사실적 중 최근·대표 5건 발췌
const PROJECTS = [
  {
    cls: "p1",
    dark: true,
    label: "[ 유베이스 전층 리모델링 — 디자인 휴인 ]",
    cat: "리모델링",
    title: (
      <>
        유베이스 전층
        <br />
        리모델링 공사
      </>
    ),
    tags: "₩462,000,000 · 2022 ─ 2024 · 디자인 휴인",
    code: "YB-2022",
  },
  {
    cls: "p2",
    dark: false,
    label: "[ 코모도호텔 객실 리모델링 — 인성건설 ]",
    cat: "호텔",
    title: (
      <>
        코모도호텔(부산)
        <br />
        객실 리모델링
      </>
    ),
    tags: "₩133,100,000 · 2025.01 ─ 05 · 인성건설",
    code: "KMD-2025",
  },
  {
    cls: "p3",
    dark: false,
    label: "[ 장유동 신축 — 와이제이종합건설 ]",
    cat: "신축",
    title: (
      <>
        장유동 1062-2
        <br />
        신축공사
      </>
    ),
    tags: "₩113,960,000 · 2025.05 ─ 12 · 와이제이종합건설",
    code: "JU-2025",
  },
  {
    cls: "p4",
    dark: true,
    label: "[ LCT 자동문 / 트레이 설치 — 진성·유림 ]",
    cat: "특수시공",
    title: (
      <>
        LCT 자동문 ·
        <br />
        트레이 설치공사
      </>
    ),
    tags: "₩121,550,000 + ₩109,000,000 · 미래건축 · 유림",
    code: "SP-2024",
  },
  {
    cls: "p5",
    dark: false,
    label: "[ 영도 문화로빛센터 · 소방전기 — 화성소방 ]",
    cat: "소방전기",
    title: (
      <>
        영도 문화로빛센터
        <br />
        소방전기공사
      </>
    ),
    tags: "₩66,000,000 · 2025.11 ~ 진행중 · 화성소방",
    code: "FR-2025",
  },
];

export function Projects() {
  return (
    <section className="block cream-2 grain" id="projects">
      <span className="sec-num l">(08) — HIGHLIGHTS · 대표 시공</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            우리가 실제로 <span className="ital">해온 일.</span>
          </h2>
          <p className="sub l">
            2025년 지명원 기준 공사실적 중 대표 5건입니다. 호텔·신축·리모델링·소방전기까지 ─
            전체 실적은 아래 표에서 확인하실 수 있습니다.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <div className={`proj ${p.cls}`} key={p.code}>
              <div
                className={`img${p.dark ? " dark-img" : ""}`}
                data-label={p.label}
              />
              <span className="badge-cat">{p.cat}</span>
              <div className="meta">
                <div>
                  <h6>{p.title}</h6>
                  <div className="tags">{p.tags}</div>
                </div>
                <div className="yr">{p.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
