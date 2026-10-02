
import React from 'react';
import { Bot, Zap, Shield, Rocket } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-orange-500/30">
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-black italic tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center italic text-black">A</div>
            AGENT.AI
          </div>
          <button className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-orange-500 transition-all">Get Started</button>
        </div>
      </nav>

      <main className="pt-32 px-6">
        <section className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic animate-in fade-in slide-in-from-bottom-4 duration-1000">
            ELITE PERFORMANCE <br/>
            <span className="text-orange-500">AUTONOMOUS</span> AGENT
          </h1>
          <p className="text-lg text-zinc-400 max-w-xl mx-auto font-medium">
            The next generation of software engineering. Fully autonomous, high-integrity, and specialized in GitHub workflows.
          </p>
          <div className="flex items-center justify-center gap-4">
             <button className="px-8 py-4 rounded-2xl bg-orange-500 text-black font-black uppercase tracking-widest hover:scale-105 transition-transform">Deploy Now</button>
             <button className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-black uppercase tracking-widest hover:bg-white/10">Documentation</button>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto py-32">
           {[
             { icon: Bot, title: 'Autonomous', desc: 'Proceeds from plan to execution without idling.' },
             { icon: Zap, title: 'Real-time', desc: 'Instant updates and feedback via event streaming.' },
             { icon: Shield, title: 'Secure', desc: 'Enterprise-grade security scanning and compliance.' }
           ].map((feat, i) => (
             <div key={i} className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-orange-500/20 transition-all group">
                <feat.icon className="w-10 h-10 text-orange-500 mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-black mb-2 italic uppercase">{feat.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed">{feat.desc}</p>
             </div>
           ))}
        </section>
      </main>

      <footer className="py-20 border-t border-white/5 text-center">
         <p className="text-zinc-600 text-xs font-black tracking-[0.3em] uppercase">&copy; 2026 AGENT.AI - ELITE OPERATIONS</p>
      </footer>
    </div>
  );
}