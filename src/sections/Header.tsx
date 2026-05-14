// 상단 고정 네비게이션 — 로고 + 앵커 메뉴 + 모바일 햄버거
import { useState } from "react";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo} alt="(주)와이디인 로고" className="h-9 w-9 rounded-md object-cover" />
          <span className="text-lg font-extrabold tracking-tight">
            (주)와이디인
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {n.label}
            </a>
          ))}
          <a
            href="tel:051-895-5505"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            <Phone className="h-4 w-4" />
            051-895-5505
          </a>
        </nav>

        <button
          type="button"
          aria-label="메뉴 열기"
          className="rounded-md p-2 text-slate-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-100"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:051-895-5505"
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
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
