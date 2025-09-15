"use client";
import Pill from "./components/Pill";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-red-900 overflow-hidden">
        {/* 배경 오브시디언 스톤 이미지들 */}
        <img src="/rocks/rock1.png" className="absolute left-0 top-0 w-64 opacity-80 blur-[1px] drop-shadow-[0_0_40px_rgba(255,60,0,0.5)]" alt="rock1" />
        <img src="/rocks/rock2.png" className="absolute right-10 top-1/4 w-40 opacity-70 blur-[1px] drop-shadow-[0_0_40px_rgba(255,60,0,0.5)]" alt="rock2" />
        <img src="/rocks/rock3.png" className="absolute left-32 bottom-20 w-52 opacity-80 blur-[1px] drop-shadow-[0_0_40px_rgba(255,60,0,0.5)]" alt="rock3" />
        <img src="/rocks/rock4.png" className="absolute right-10 bottom-10 w-56 opacity-80 blur-[1px] drop-shadow-[0_0_40px_rgba(255,60,0,0.5)]" alt="rock4" />
        <img src="/rocks/rock5.png" className="absolute left-1/2 top-1/2 w-36 opacity-60 -translate-x-1/2 -translate-y-1/2 blur-[1px] drop-shadow-[0_0_40px_rgba(255,60,0,0.5)]" alt="rock5" />
        <img src="/rocks/rock6.png" className="absolute left-1/4 top-1/3 w-32 opacity-70 blur-[1px] drop-shadow-[0_0_40px_rgba(255,60,0,0.5)]" alt="rock6" />
        <img src="/rocks/rock7.png" className="absolute right-1/4 bottom-1/3 w-40 opacity-70 blur-[1px] drop-shadow-[0_0_40px_rgba(255,60,0,0.5)]" alt="rock7" />

        {/* 메인 콘텐츠 (한국어, 브랜드 톤 적용) */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
          <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-[0_2px_24px_rgba(255,60,0,0.7)] mb-6" style={{letterSpacing: '-2px'}}>
            불꽃 살림단
          </h1>
          <p className="text-zinc-200 text-lg md:text-2xl font-medium mb-8 drop-shadow-[0_1px_8px_rgba(255,60,0,0.3)]">
            서울의 밤을 밝히는 <span className="text-orange-400 font-bold">2025 </span><span className="text-zinc-300 font-bold">한화 불꽃 축제</span><br className="hidden md:inline" /> 우리는 쇠맛대신 불맛이다 !
          </p>
          <div className="flex gap-6 justify-center mb-8">
            <span className="px-7 py-3 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white text-lg font-semibold shadow-lg border border-red-400/40 backdrop-blur-md">
              40개 이미지
            </span>
            <span className="px-7 py-3 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-900 to-black text-white text-lg font-semibold shadow-lg border border-zinc-400/40 backdrop-blur-md">
              PNG 포맷
            </span>
            <span className="px-7 py-3 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white text-lg font-semibold shadow-lg border border-red-400/40 backdrop-blur-md">
              Ultra HD
            </span>
          </div>
          <div className="mx-auto max-w-xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl text-zinc-100 text-base md:text-lg" style={{boxShadow:'0 4px 32px 0 rgba(255,60,0,0.15)'}}>
            <span className="font-bold text-orange-400">불꽃 살림단</span>은 서울의 밤을 밝히는 환경 캠페인입니다.<br />
            흑요석 스톤과 용암의 불빛처럼, 우리 일상에 작은 변화의 불씨를 심어보세요.<br />
            <span className="text-orange-300">활동 참여</span>와 <span className="text-orange-300">신청하기</span>를 통해 함께할 수 있습니다.
          </div>
        </section>
      </main>
    </>
  );
}