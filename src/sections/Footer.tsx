// 푸터 — 사업자 정보 + 사이트 맵 + 메가 워드마크
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <a href="#home" className="logo" style={{ marginBottom: 24 }}>
              <span className="mark">
                <img src={logo} alt="(주)와이디인 로고" />
              </span>
              <span className="name">
                <span className="ko" style={{ color: "var(--paper)" }}>
                  (주)와이디인
                </span>
                <span className="en">YD IN ELECTRICIAN CO.,LTD.</span>
              </span>
            </a>
            <p
              style={{
                fontSize: 13.5,
                color: "rgba(241,232,216,.7)",
                lineHeight: 1.65,
                maxWidth: 320,
                marginTop: 16,
              }}
            >
              전기로 연결되는 모든 공간의 안전한 시공 — 부산을 거점으로,
              (주)와이디인.
            </p>
          </div>
          <div>
            <h6>사업영역 · Services</h6>
            <a href="#services">전기공사</a>
            <a href="#services">전기자재</a>
            <a href="#services">조명</a>
            <a href="#services">실내건축</a>
          </div>
          <div>
            <h6>회사 · Company</h6>
            <a href="#about">회사소개</a>
            <a href="#process">시공절차</a>
            <a href="#projects">시공안내</a>
            <a href="#contact">견적문의</a>
          </div>
          <div>
            <h6>연락 · Contact</h6>
            <a href="tel:051-895-5505">051-895-5505</a>
            <a href="tel:010-9303-9400">010-9303-9400</a>
            <a href="mailto:yd9303@naver.com">yd9303@naver.com</a>
            <p>부산진구 가야대로408번길 27</p>
            <p>평일 09:00 – 18:00</p>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} (주)와이디인. All rights reserved.</span>
          <span>사업자 449-86-02736 · 부산 부산진구</span>
          <span>SITE — REDESIGN v2 / 2026</span>
        </div>
      </div>

      <div className="mega">
        <div className="word">
          YDI<span className="o">N</span>
        </div>
      </div>
    </footer>
  );
}
