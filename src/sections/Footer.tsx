// 푸터 — 다크 + 그라데이션 separator
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent"
      />
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <img
              src={logo}
              alt="(주)와이디인"
              className="h-11 w-11 rounded-lg object-cover ring-1 ring-white/10"
            />
            <div>
              <div className="text-base font-extrabold">
                <span className="text-grad-logo">(주)와이디인</span>
              </div>
              <div className="mt-0.5 text-xs text-white/45">
                YD In Electrician Co., Ltd.
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-3 text-xs text-white/65 sm:text-sm">
            <div>
              <dt className="font-semibold text-white/40">대표이사</dt>
              <dd>안용득</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/40">사업자등록번호</dt>
              <dd>449-86-02736</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/40">전화</dt>
              <dd>051-895-5505</dd>
            </div>
            <div>
              <dt className="font-semibold text-white/40">팩스</dt>
              <dd>051-895-5504</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-semibold text-white/40">주소</dt>
              <dd>부산광역시 부산진구 가야대로408번길 27 (개금동)</dd>
            </div>
          </dl>
        </div>

        <div className="mt-12 border-t border-white/5 pt-6 text-[11px] text-white/35">
          © {new Date().getFullYear()} (주)와이디인. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
