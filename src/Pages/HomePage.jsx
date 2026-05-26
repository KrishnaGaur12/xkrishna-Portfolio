import React, { useState, useEffect, useRef } from 'react';
import { FlipWords } from '../components/ui/flip-words';
import { BriefcaseBusiness, Lightbulb, MapPin, Clock3, Mail, Link2, ArrowUpRight, Heart } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import AchievementsSection from '../components/Home Components/AchievementsSection';
import TechnicalArsenal from '../components/Home Components/TechnicalArsenal';
import { Link } from 'react-router-dom';

const words = ['Software Engineer.', 'AI Engineer.', 'Digital creator'];

const profileDetails = [
  { icon: BriefcaseBusiness, label: 'Aspiring Software Engineer' },
  { icon: Lightbulb, label: 'C++, Python, React, Typescript' },
  { icon: MapPin, label: 'Ghaziabad, India' },
  { icon: Clock3, label: 'IST // GMT+5:30' },
  { icon: Mail, label: 'krishnagaur0033@gmail.com' },
  { icon: Link2, label: 'xkrishnagaur.dev' },
];

const socialLinks = [
  { label: 'X', handle: '@xkrishnagaur', desc: 'Thoughts, updates and random stuff I like.', href: 'https://x.com/2m_next', logo: '/images/x.jpg', glow: 'rgba(255,50,100,0.4)' },
  { label: 'GitHub', handle: 'xkrishnagaur', desc: 'Code, projects and open source stuff.', href: 'https://github.com/KrishnaGaur12', logo: '/images/github.jpg', glow: 'rgba(0,0,0,0.2)' },
  { label: 'LinkedIn', handle: 'krishna-gaur', desc: 'Professional journey and work experience.', href: 'https://www.linkedin.com/in/gaurkrishna/', logo: '/images/linkedin.jpg', glow: 'rgba(10,102,194,0.4)' },
  { label: 'Discord', handle: 'xkrishnagaur', desc: "Join me and let's talk!", href: 'https://discord.com', logo: '/images/discord.jpg', glow: 'rgba(88,101,242,0.4)' },
  { label: 'daily.dev', handle: 'xkrishnagaur', desc: 'Dev articles, insights and curated reads.', href: 'https://app.daily.dev/xkrishna', logo: '/images/dailydotdev.webp', glow: 'rgba(160,32,240,0.4)' },
  { label: 'DSA Portfolio', handle: 'xkrishnagaur', desc: 'My DSA journey and problem solving stats.', href: 'https://codolio.com/profile/Krishna15', logo: '/images/codolio.jpg', glow: 'rgba(255,140,0,0.4)' },
];

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpOpen, setIsExpOpen] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => {
        console.error("Audio play failed:", e);
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-24">
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/music.mp3" loop preload="auto" />

      <div className="flex flex-row justify-between items-center mb-14">
        <div className="flex items-center gap-6">
          <img
            src="/images/pfp.jpg"
            alt="Krishna Gaur"
            className="h-20 w-20 sm:h-[120px] sm:w-[120px] rounded-[16px] object-cover border-[3px] border-black shrink-0"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-[36px] sm:text-[48px] font-thin tracking-tighter text-black leading-none mb-1" style={{ fontWeight: 200, letterSpacing: '-0.06em' }}>
              krishna gaur
            </h1>
            <p className="text-[24px] sm:text-[34px] text-black font-thin tracking-tight leading-none flex items-center" style={{ fontWeight: 200 }}>
              i am a <FlipWords words={words} className="mx-1" />
            </p>
          </div>
        </div>
        
        {/* Record Player Interactive */}
        <div 
          onClick={togglePlay}
          className="bg-[#be1e4b] border border-black rounded-[14px] sm:rounded-[18px] w-[90px] h-[90px] sm:w-[130px] sm:h-[130px] items-center justify-center shrink-0 relative cursor-pointer active:scale-95 transition-all flex select-none"
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          {/* Vinyl Record */}
          <div className={`w-[78px] h-[78px] sm:w-[110px] sm:h-[110px] rounded-full bg-[#111111] flex items-center justify-center relative overflow-hidden ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
             <div className="absolute w-[82%] h-[82%] rounded-full border border-white/10"></div>
             <div className="absolute w-[66%] h-[66%] rounded-full border border-white/10"></div>
             <div className="absolute w-[50%] h-[50%] rounded-full border border-white/10"></div>
             <div className="absolute w-[34%] h-[34%] rounded-full border border-white/10"></div>
             
             {/* Player Label / Red Center */}
             <div className="w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] rounded-full bg-[#be1e4b] flex items-center justify-center z-10 relative">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#111111]"></div>
                {/* Visual marker to show spinning */}
                <div className="absolute top-[3px] right-[3px] w-1 h-1 bg-white/20 rounded-full"></div>
             </div>
          </div>

          {/* Tone Arm Assembly */}
          <div 
            className="absolute right-[0px] top-[4px] sm:right-[2px] sm:top-[6px] w-[26px] h-[75px] sm:w-[32px] sm:h-[95px] z-20 origin-[50%_16px] transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            style={{ transform: isPlaying ? 'rotate(25deg)' : 'rotate(0deg)' }}
          >
            <svg width="100%" height="100%" viewBox="0 0 30 90" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Top counter-weight details */}
              <rect x="12" y="2" width="6" height="4" rx="1" fill="white"/>
              <rect x="11" y="7" width="8" height="6" rx="1.5" fill="white"/>
              <rect x="11" y="14" width="8" height="6" rx="1.5" fill="white"/>
              <rect x="11" y="21" width="8" height="6" rx="1.5" fill="white"/>
              <rect x="12" y="28" width="6" height="4" rx="1" fill="white"/>
              
              {/* Main Arm */}
              <path d="M13.5 32 H16.5 V72 H13.5 Z" fill="white"/>
              
              {/* Angled headshell */}
              <path d="M12.5 70 L17.5 70 L9 88 L3 85 Z" fill="white" stroke="white" strokeWidth="1" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* 6 Pointers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-6 mb-12">
        {profileDetails.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-500 shrink-0">
                <Icon size={16} />
              </div>
              <span className="text-sm text-text-primary">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* About Paragraphs */}
      <div className="space-y-6 text-[18px] sm:text-[19px] font-light text-black tracking-[-0.04em] leading-[1.5em] mb-32">
        <p>
          I'm a Bachelor of Technology student in Computer Science and Engineering at ABES Engineering College (graduating in 2027) who enjoys understanding how software systems work beyond just writing code.
        </p>
        <p>
          I focus on Data Structures & Algorithms, Operating Systems, and System Design, building full-stack and backend systems with an emphasis on performance and scalability, while also exploring AI/ML through hands-on projects.
        </p>
        <p>
          I enjoy learning new technologies and keeping up with evolving tech trends, and outside academics, I aspire to be a tech YouTuber and like listening to music to unwind.
        </p>
      </div>

      {/* My Profile Section */}
      <div className="mb-32">
        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#be1e4b] mb-4">My Profile</h3>
          <h2 className="text-4xl sm:text-[52px] font-bold text-black mb-6 tracking-tight leading-none flex items-end">
            Let's connect<span className="text-[#be1e4b] text-5xl leading-[0.5] -ml-1">.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed max-w-sm">
            Here are some places where you can find me around the internet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative flex flex-col justify-between bg-white rounded-[24px] p-6 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.15)] transition-all duration-300 border border-gray-100/50"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div 
                      className="absolute inset-0 blur-xl opacity-60 rounded-full transition-opacity duration-300 group-hover:opacity-100" 
                      style={{ backgroundColor: link.glow.replace(/[\d.]+\)$/g, '1)') }}
                    ></div>
                    <img 
                      src={link.logo} 
                      alt={link.label} 
                      className="w-[60px] h-[60px] rounded-2xl object-cover relative z-10 shadow-sm" 
                    />
                  </div>
                  <div>
                    <h4 className="text-[17px] font-semibold text-black leading-tight mb-1">{link.label}</h4>
                    <span className="text-sm text-[#be1e4b]">{link.handle}</span>
                  </div>
                </div>
                <ArrowUpRight className="text-[#be1e4b] w-5 h-5 opacity-40 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <div>
                <div className="w-5 h-[2px] bg-gray-200 mb-3 group-hover:bg-[#be1e4b]/40 transition-colors"></div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed max-w-[90%]">
                  {link.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="mb-32">
        <h2 className="text-2xl sm:text-[28px] font-medium text-black tracking-tight mb-8 lowercase">professional experience:</h2>
        
        <div className="flex flex-col gap-3">
          {/* Single Experience Block */}
          <div 
            onMouseEnter={() => setIsExpOpen(true)}
            onMouseLeave={() => setIsExpOpen(false)}
            className="flex flex-col border border-gray-200/80 rounded-[20px] p-5 sm:px-8 sm:py-6 bg-white transition-all hover:border-gray-300 overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              {/* Left: Role */}
              <div className="text-lg sm:text-[20px] font-light text-black lowercase mb-2 sm:mb-0 w-full sm:w-[30%]">
                Software Developer Intern
              </div>

              {/* Middle: Duration */}
              <div className="text-base sm:text-[17px] font-light text-gray-600 lowercase mb-4 sm:mb-0 w-full sm:w-[40%] sm:text-center">
                march '26 - april '26
              </div>

              {/* Right: Company Logo & Name */}
              <div className="flex items-center gap-3 w-full sm:w-[30%] sm:justify-end">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                  <path d="M4 6H14C17.3137 6 20 8.68629 20 12V22H14V12H4V6Z" fill="#be1e4b"/>
                </svg>
                <span className="text-lg sm:text-[19px] font-light text-black lowercase">
                  Adventriq
                </span>
                {/* Accordion Icon */}
                <div className={`ml-2 transform transition-transform duration-300 text-gray-400 ${isExpOpen ? 'rotate-180' : 'rotate-0'}`}>
                  ▼
                </div>
              </div>
            </div>
            
            {/* Expandable Content */}
            <div className={`grid transition-all duration-300 ease-in-out ${isExpOpen ? 'grid-rows-[1fr] opacity-100 mt-5' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
              <div className="overflow-hidden">
                <ul className="list-disc pl-5 text-gray-600 font-light space-y-2 text-sm sm:text-base leading-relaxed">
                  <li>Built a responsive healthcare platform by developing the entire frontend from scratch, ensuring it worked smoothly on all devices for users across South Carolina.</li>
                  <li>Delivered reliable features in an Agile team by fixing complex rendering bugs, connecting backend APIs for live data, and consistently meeting sprint deadlines.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work / Projects Section */}
      <div className="mb-32">
        <h2 className="text-2xl sm:text-[28px] font-medium text-black tracking-tight mb-8 lowercase">featured projects:</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {projectsData.slice(0, 4).map((project, idx) => (
            <Link 
              key={idx} 
              to={`/project/${project.slug}`}
              className="group flex flex-col border border-gray-200/80 rounded-[24px] bg-white p-2.5 transition-all hover:border-gray-300 hover:shadow-sm"
            >
              {/* Project Image */}
              <div className={`relative aspect-[16/10] overflow-hidden rounded-[18px] bg-gradient-to-br ${project.accent || 'from-gray-100 to-gray-200'}`}>
                {/* Fallback pattern if no image */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] bg-[size:10px_10px]"></div>
                {project.image && (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                )}
              </div>
              
              {/* Project Text */}
              <div className="px-3 pt-5 pb-3">
                <h3 className="text-[20px] sm:text-[22px] font-medium text-black mb-1 lowercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[16px] sm:text-[17px] font-light text-gray-500 tracking-tight lowercase">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <TechnicalArsenal />

      {/* Achievements Section brought back */}
      <div className="mb-32">
        <AchievementsSection />
      </div>
    </div>
  );
};

export default HomePage;
