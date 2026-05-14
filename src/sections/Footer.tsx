// 푸터 — 사업자 정보와 저작권 표시
import logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <img
              src={logo}
              alt="(주)와이디인"
              className="h-10 w-10 rounded-md object-cover"
            />
            <div>
              <div className="text-base font-extrabold text-slate-900">
                (주)와이디인
              </div>
              <div className="mt-0.5 text-xs text-slate-500">
                YD In Electrician Co., Ltd.
              </div>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-10 gap-y-3 text-xs text-slate-600 sm:text-sm">
            <div>
              <dt className="font-semibold text-slate-500">대표이사</dt>
              <dd>안용득</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500">사업자등록번호</dt>
              <dd>449-86-02736</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500">전화</dt>
              <dd>051-895-5505</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-500">팩스</dt>
              <dd>051-895-5504</dd>
            </div>
            <div className="col-span-2">
              <dt className="font-semibold text-slate-500">주소</dt>
              <dd>부산광역시 부산진구 가야대로408번길 27 (개금동)</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 border-t border-slate-100 pt-6 text-[11px] text-slate-400">
          © {new Date().getFullYear()} (주)와이디인. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
