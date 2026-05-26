import React from 'react';
import { Code, Terminal, Database, Cpu } from 'lucide-react';

const Badge = ({ name }) => (
  <div className="px-3 py-1.5 rounded-[12px] bg-slate-50 border border-gray-200/80 text-[14px] font-medium text-gray-800 tracking-tight transition-all hover:border-gray-300">
    {name}
  </div>
);

const TechnicalArsenal = () => {
  return (
    <div className="mb-32 flex flex-col">
      {/* Top Header Section */}
      <div className="flex justify-between items-end mb-6">
        {/* Left Headers */}
        <h2 className="text-2xl sm:text-[32px] font-bold text-black tracking-tight normal-case" style={{ fontFamily: 'monospace' }}>
          Technical arsenal
        </h2>

        {/* Right Info */}
        <div className="flex flex-col items-end text-[11px] sm:text-[13px] text-gray-500 font-mono lowercase tracking-widest leading-relaxed">
          <span>Stack & Tools</span>
          <span>UPDATED 2026</span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 border-t border-gray-200 pt-8">
        
        {/* Card 1: Languages */}
        <div className="bg-white border border-gray-200/60 p-6 flex flex-col shadow-sm transition-all hover:border-gray-300">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-black font-semibold text-[15px]">&lt;/&gt;</span>
          </div>
          <h3 className="text-xl font-bold text-black tracking-tight mb-8">Languages</h3>
          
          <div className="flex flex-wrap gap-2.5">
            <Badge name="C++" />
            <Badge name="Java" />
            <Badge name="Python" />
            <Badge name="JavaScript" />
            <Badge name="SQL" />
          </div>
        </div>

        {/* Card 2: Backend & Sys */}
        <div className="bg-white border border-gray-200/60 p-6 flex flex-col shadow-sm transition-all hover:border-gray-300">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-black font-semibold text-[15px]">&gt;_</span>
          </div>
          <h3 className="text-xl font-bold text-black tracking-tight mb-8">Backend & Sys</h3>
          
          <div className="flex flex-wrap gap-2.5">
            <Badge name="Spring Boot" />
            <Badge name="Node.js" />
            <Badge name="Express" />
            <Badge name="Docker" />
            <Badge name="Linux" />
          </div>
        </div>

        {/* Card 3: Databases */}
        <div className="bg-white border border-gray-200/60 p-6 flex flex-col shadow-sm transition-all hover:border-gray-300">
          <div className="flex items-center gap-2 mb-6">
            <Database className="w-[18px] h-[18px] text-black" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold text-black tracking-tight mb-8">Databases</h3>
          
          <div className="flex flex-wrap gap-2.5">
            <Badge name="MongoDB" />
            <Badge name="MySQL" />
            <Badge name="PostgreSQL" />
          </div>
        </div>

        {/* Card 4: AI / ML */}
        <div className="bg-white border border-gray-200/60 p-6 flex flex-col shadow-sm transition-all hover:border-gray-300">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-[18px] h-[18px] text-black" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-bold text-black tracking-tight mb-1">AI / ML</h3>
          <p className="text-black text-[15px] font-medium mb-8" style={{ fontFamily: 'monospace' }}>(Applied)</p>
          
          <div className="flex flex-wrap gap-2.5">
            <Badge name="OpenCV" />
            <Badge name="BERT" />
            <Badge name="Transformers" />
            <Badge name="NumPy" />
            <Badge name="Pandas" />
          </div>
        </div>

      </div>

      {/* Bottom Tools Bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-8 py-4 bg-white border border-gray-200/80 rounded-[18px] shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#be1e4b] rounded-full"></div>
          <span className="text-[#be1e4b] text-[12px] font-bold tracking-widest uppercase">TOOLS</span>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/images/tools/git.svg" alt="Git" className="w-[18px] h-[18px] object-contain" />
            <span className="text-[14px] font-medium text-black">Git</span>
          </div>
          <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/images/tools/github.svg" alt="GitHub" className="w-[18px] h-[18px] object-contain" />
            <span className="text-[14px] font-medium text-black">GitHub</span>
          </div>
          <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/images/tools/antigravity.svg" alt="Antigravity" className="w-[18px] h-[18px] object-contain" />
            <span className="text-[14px] font-medium text-black">Antigravity</span>
          </div>
          <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/images/tools/postman.svg" alt="Postman" className="w-[18px] h-[18px] object-contain" />
            <span className="text-[14px] font-medium text-black">Postman</span>
          </div>
          <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/images/tools/linux.svg" alt="Linux" className="w-[18px] h-[18px] object-contain" />
            <span className="text-[14px] font-medium text-black">Linux</span>
          </div>
          <div className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <img src="/images/tools/docker.svg" alt="Docker" className="w-[18px] h-[18px] object-contain" />
            <span className="text-[14px] font-medium text-black">Docker</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalArsenal;