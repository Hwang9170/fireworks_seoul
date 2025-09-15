"use client";
import { useState } from "react";

export default function Apply() {
  const [form, setForm] = useState({ name: "", phone: "", reason: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-red-900 overflow-hidden">
      {/* 배경 오브시디언 스톤 이미지들 */}
      <img src="/rocks/rock3.png" className="absolute left-10 top-1/2 w-40 opacity-60 blur-[1px] drop-shadow-[0_0_32px_rgba(255,60,0,0.4)] -translate-y-1/2" alt="rock3" />
      <img src="/rocks/rock5.png" className="absolute right-10 bottom-10 w-52 opacity-70 blur-[1px] drop-shadow-[0_0_32px_rgba(255,60,0,0.4)]" alt="rock5" />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 w-full">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-[0_2px_24px_rgba(255,60,0,0.7)]">불꽃 살림단 신청하기</h2>
        <div className="mx-auto max-w-lg bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 shadow-2xl text-zinc-100 text-base md:text-lg mb-8" style={{boxShadow:'0 4px 32px 0 rgba(255,60,0,0.15)'}}>
          {submitted ? (
            <div className="text-orange-300 font-bold text-xl py-8">신청이 완료되었습니다!<br />함께 불꽃 살림단의 에너지를 나눠요🔥</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="text-left">
                <span className="block mb-2 text-orange-300 font-bold">이름</span>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="이름을 입력하세요" />
              </label>
              <label className="text-left">
                <span className="block mb-2 text-orange-300 font-bold">연락처</span>
                <input type="text" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="010-0000-0000" />
              </label>
              <label className="text-left">
                <span className="block mb-2 text-orange-300 font-bold">참여 동기</span>
                <textarea name="reason" value={form.reason} onChange={handleChange} required rows={3} className="w-full px-4 py-3 rounded-lg bg-zinc-900/60 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-orange-400" placeholder="불꽃 살림단에 참여하고 싶은 이유를 적어주세요" />
              </label>
              <button type="submit" className="mt-4 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white text-lg font-bold shadow-lg border border-red-400/40 backdrop-blur-md hover:scale-105 transition">신청하기</button>
            </form>
          )}
        </div>
        <a href="/" className="px-8 py-4 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-900 to-black text-white text-lg font-bold shadow-lg border border-zinc-400/40 backdrop-blur-md hover:scale-105 transition">메인으로</a>
      </section>
    </main>
  );
}
