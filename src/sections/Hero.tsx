// 풀스크린 다크 Hero — 큰 디스플레이 타이포 + 로고 카드 리본 컴포지션
export function Hero() {
  return (
    <section className="hero dark grain" id="home">
      <div className="hero-inner">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">
                Busan · Established 2022 · 부산진구 가야동
              </span>
              <h1 className="hero-title">
                전기로
                <br />
                <span className="b">연결</span>되는
                <br />
                <span className="ital o">모든 공간</span>의
                <br />
                <span className="stroke">안전한 시공.</span>
              </h1>
              <p className="hero-lede">
                (주)와이디인은 부산을 거점으로 내선·외선 전기공사, 전기자재,
                조명, 실내건축을 책임 시공합니다. 작은 공사부터 통합 시공까지,
                처음부터 끝까지 같은 손으로 진행합니다.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-pill orange">
                  무료 현장견적 신청
                  <ArrowIcon />
                </a>
                <a href="#projects" className="btn-pill ghost-light">
                  시공 안내 보기
                </a>
              </div>
            </div>

            <div className="hero-figure">
              <svg
                className="ribbon-bg"
                viewBox="0 0 600 600"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <linearGradient id="rg1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#2C4AA0" stopOpacity=".6" />
                    <stop offset=".5" stopColor="#5B4E96" stopOpacity=".4" />
                    <stop offset="1" stopColor="#E85D2C" stopOpacity=".3" />
                  </linearGradient>
                  <linearGradient id="rg2" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0" stopColor="#E85D2C" stopOpacity=".5" />
                    <stop offset="1" stopColor="#2C4AA0" stopOpacity=".2" />
                  </linearGradient>
                </defs>
                <path
                  d="M-40 380 Q 200 200 380 360 T 660 380"
                  stroke="url(#rg1)"
                  strokeWidth="80"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M40 580 Q 300 460 520 540"
                  stroke="url(#rg2)"
                  strokeWidth="40"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>

              <div className="figure-frame">
                <svg
                  viewBox="0 0 480 540"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <linearGradient id="figBody" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#5B4E96" />
                      <stop offset="1" stopColor="#2C4AA0" />
                    </linearGradient>
                    <linearGradient id="figArm" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#2C4AA0" />
                      <stop offset="1" stopColor="#5B4E96" />
                    </linearGradient>
                  </defs>
                  <circle cx="290" cy="90" r="28" fill="#E85D2C" />
                  <path
                    d="M270 110 C 240 130, 220 150, 230 200"
                    stroke="url(#figArm)"
                    strokeWidth="24"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M240 200 C 245 240, 220 270, 215 330"
                    stroke="url(#figBody)"
                    strokeWidth="34"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M220 330 C 200 380, 170 410, 130 470"
                    stroke="#2C4AA0"
                    strokeWidth="26"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M225 330 C 245 380, 270 410, 280 480"
                    stroke="#5B4E96"
                    strokeWidth="26"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M232 220 C 260 240, 295 245, 330 220"
                    stroke="#3A56A8"
                    strokeWidth="20"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <circle cx="350" cy="60" r="4" fill="#F4A87E" />
                  <circle cx="380" cy="180" r="3" fill="#E85D2C" opacity=".7" />
                  <circle cx="120" cy="240" r="3" fill="#5B4E96" opacity=".7" />
                </svg>
              </div>

              <span className="fig-corner tl">
                FILE NO.
                <br />
                <span className="v">YDIN-2022</span>
              </span>
              <span className="fig-corner tr">
                REACH
                <br />
                <span className="v">↗ UP</span>
              </span>
              <span className="fig-corner bl">
                (주)와이디인
                <br />
                YD IN ELECTRICIAN CO.,LTD.
                <br />
                BUSAN, KOREA
              </span>
              <span className="fig-corner br">
                ONE-STOP
                <br />
                <span className="v">SERVICE</span>
              </span>

              <div className="float-badge">
                <div className="ic">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div>
                  <div className="k">부산 전역 응대</div>
                  <div className="v">신속 상담·출동</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
