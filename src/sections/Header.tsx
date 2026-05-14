// 상단 고정 네비게이션 — 다크 글래스 + 그라데이션 워드마크
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/logo.png";

const NAV = [
  { href: "#about", label: "회사소개" },
  { href: "#services", label: "사업영역" },
  { href: "#portfolio", label: "시공안내" },
  { href: "#contact", label: "오시는 길" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/55 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="group flex items-center gap-2.5">
          <img
            src={logo}
            alt="(주)와이디인 로고"
            className="h-9 w-9 rounded-lg object-cover ring-1 ring-white/10"
          />
          <span className="text-lg font-extrabold tracking-tight">
            <span className="text-grad-logo">와이디인</span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-white/70 transition hover:text-white"
            >
              {n.label}
            </a>
          ))}
          <a
            href="tel:051-895-5505"
            className="inline-flex items-center gap-2 rounded-full bg-grad-logo px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_-12px_rgba(168,85,247,0.6)] transition hover:brightness-110"
          >
            <Phone className="h-4 w-4" />
            051-895-5505
          </a>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          className="rounded-md p-2 text-white/80 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black/80 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-base font-medium text-white/85 hover:bg-white/5"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:051-895-5505"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-grad-logo px-4 py-2.5 text-sm font-semibold text-black"
            >
              <Phone className="h-4 w-4" />
              051-895-5505
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
