"use client";

export default function Activity() {
  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-red-900 overflow-hidden">
      {/* 배경 오브시디언 스톤 이미지들 */}
      <img src="/rocks/rock2.png" className="absolute left-10 top-10 w-40 opacity-60 blur-[1px] drop-shadow-[0_0_32px_rgba(255,60,0,0.4)]" alt="rock2" />
      <img src="/rocks/rock4.png" className="absolute right-10 bottom-10 w-52 opacity-70 blur-[1px] drop-shadow-[0_0_32px_rgba(255,60,0,0.4)]" alt="rock4" />
      <img src="/rocks/rock7.png" className="absolute left-1/2 top-1/3 w-32 opacity-50 -translate-x-1/2 blur-[1px] drop-shadow-[0_0_32px_rgba(255,60,0,0.4)]" alt="rock7" />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_2px_24px_rgba(255,60,0,0.7)]">활동 안내</h2>
        <div className="mx-auto max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-2xl text-zinc-100 text-base md:text-lg mb-8" style={{boxShadow:'0 4px 32px 0 rgba(255,60,0,0.15)'}}>
          <ul className="list-disc list-inside text-left">
            <li><span className="text-orange-300 font-bold">불꽃 미션</span>: 서울의 밤을 밝히는 친환경 활동에 참여</li>
            <li><span className="text-orange-300 font-bold">흑요석 인증샷</span>: 오브시디언 스톤과 함께 인증샷 업로드</li>
            <li><span className="text-orange-300 font-bold">불빛 스파클 챌린지</span>: 불빛 효과를 활용한 창의적 사진 공유</li>
            <li><span className="text-orange-300 font-bold">참여자 혜택</span>: 우수 활동자에게 특별 굿즈 증정</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a href="/apply" className="px-8 py-4 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white text-lg font-bold shadow-lg border border-red-400/40 backdrop-blur-md hover:scale-105 transition">신청하기</a>
          <a href="/" className="px-8 py-4 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-900 to-black text-white text-lg font-bold shadow-lg border border-zinc-400/40 backdrop-blur-md hover:scale-105 transition">메인으로</a>
        </div>
      </section>
    </main>
  );
}
