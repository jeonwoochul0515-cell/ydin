// 시공 안내 — 자료 부족 단계에서 분야별 안내 카드로 구성
const PROJECTS = [
  {
    cls: "p1",
    dark: true,
    label: "[ 사무실 · 빌딩 전기 시공 ]",
    cat: "전기공사",
    title: "사무실·빌딩 전기 시공",
    tags: "내선·외선 · 분전반 · 동력",
    code: "EW-01",
  },
  {
    cls: "p2",
    dark: false,
    label: "[ 매장 조명 · 간판 디자인 ]",
    cat: "조명",
    title: (
      <>
        매장 조명 · 간판
        <br />
        디자인 시공
      </>
    ),
    tags: "LED · 매장 · 간판",
    code: "LT-02",
  },
  {
    cls: "p3",
    dark: false,
    label: "[ 주거 노후 배선 교체 ]",
    cat: "전기공사",
    title: (
      <>
        아파트·주택
        <br />
        노후 배선 교체
      </>
    ),
    tags: "내선 · 콘센트 · 스마트조명",
    code: "EW-02",
  },
  {
    cls: "p4",
    dark: true,
    label: "[ 분전반 · 자재 공급 ]",
    cat: "전기자재",
    title: (
      <>
        분전반 교체
        <br />
        전기자재 공급
      </>
    ),
    tags: "분전반 · 차단기 · 케이블",
    code: "MT-01",
  },
  {
    cls: "p5",
    dark: false,
    label: "[ 실내건축 통합 시공 ]",
    cat: "실내건축",
    title: (
      <>
        전기 + 인테리어
        <br />
        통합 시공
      </>
    ),
    tags: "인테리어 · 전기 · 마감",
    code: "IC-01",
  },
];

export function Projects() {
  return (
    <section className="block cream-2 grain" id="projects">
      <span className="sec-num l">(05) — WORK GUIDE · 시공안내</span>
      <div className="wrap">
        <div className="sec-head">
          <h2>
            이런 시공을 <span className="ital">해드립니다.</span>
          </h2>
          <p className="sub l">
            실제 시공 사진은 순차적으로 업데이트되며, 견적 문의 시 분야별 사례를
            함께 보내드립니다. 아래는 와이디인이 다루는 대표 시공 카테고리입니다.
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
