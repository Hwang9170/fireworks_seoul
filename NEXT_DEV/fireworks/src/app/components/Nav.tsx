"use client";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 right-0 w-full z-50 flex justify-end items-center px-6 py-4">
      {/* 데스크탑 네비게이션 */}
      <div className="hidden md:flex gap-6 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 px-6 py-2 shadow-lg">
        <Link href="/activity" className="text-zinc-100 font-semibold hover:text-orange-400 transition">활동 안내</Link>
        <Link href="/apply" className="text-orange-300 font-bold hover:text-yellow-400 transition">신청하기</Link>
      </div>
      {/* 모바일 햄버거 */}
      <div className="md:hidden relative">
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20"
          onClick={() => setOpen(!open)}
          aria-label="메뉴 열기"
        >
          <span className="block w-6 h-0.5 bg-zinc-100 mb-1 rounded transition" style={{transform: open ? 'rotate(45deg) translateY(7px)' : 'none'}}></span>
          <span className={`block w-6 h-0.5 bg-zinc-100 mb-1 rounded transition ${open ? 'opacity-0' : ''}`}></span>
          <span className="block w-6 h-0.5 bg-zinc-100 rounded transition" style={{transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none'}}></span>
        </button>
        {open && (
          <div className="absolute right-0 mt-2 bg-zinc-900/90 backdrop-blur-lg rounded-xl border border-white/20 shadow-xl py-4 px-8 flex flex-col gap-4">
            <Link href="/activity" className="text-zinc-100 font-semibold hover:text-orange-400 transition" onClick={()=>setOpen(false)}>활동 안내</Link>
            <Link href="/apply" className="text-orange-300 font-bold hover:text-yellow-400 transition" onClick={()=>setOpen(false)}>신청하기</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
