import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-black/10 to-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto h-full flex flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Secure Billing Suite
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
          Modern Web-based Billing System
        </h1>
        <p className="mt-4 max-w-2xl text-slate-200/80">
          Dual-access dashboards for Admin and Shop Staff, smart invoice generation with GST logic, inventory controls, and exportable reports — all in one place.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#login" className="inline-flex items-center gap-2 rounded-lg bg-white text-slate-900 px-4 py-2 font-medium shadow hover:shadow-md transition">
            Get Started
          </a>
          <a href="#features" className="inline-flex items-center gap-2 rounded-lg bg-white/10 text-white px-4 py-2 font-medium border border-white/15 backdrop-blur hover:bg-white/15 transition">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
