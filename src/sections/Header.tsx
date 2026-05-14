// 스티키 네비게이션 — 로고 + 앵커 메뉴 + 대표전화 + 견적 CTA
import logo from "../assets/logo.png";

const NAV = [
  { href: "#home", label: "홈", active: true },
  { href: "#services", label: "사업영역" },
  { href: "#process", label: "시공절차" },
  { href: "#projects", label: "시공안내" },
  { href: "#about", label: "회사소개" },
  { href: "#contact", label: "견적문의" },
];

export function Header() {
  return (
    <nav className="bar">
      <div className="wrap">
        <a href="#home" className="logo">
          <span className="mark">
            <img src={logo} alt="(주)와이디인 로고" />
          </span>
          <span className="name">
            <span className="ko">(주)와이디인</span>
            <span className="en">YD IN ELECTRICIAN CO.,LTD.</span>
          </span>
        </a>
        <div className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className={n.active ? "active" : ""}>
              {n.label}
            </a>
          ))}
        </div>
        <div className="cta-wrap">
          <div className="phone">
            <span className="l">대표전화 · CALL</span>
            <span className="n">051 · 895 · 5505</span>
          </div>
          <a href="#contact" className="btn-pill ink">
            견적 문의
            <ArrowIcon />
          </a>
        </div>
      </div>
    </nav>
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
