import { useState, useEffect } from 'react';
import { ChevronDown, Users, Flag, Mail, Zap, Shield, Code, Target } from 'lucide-react';
import { DiscordLogo, GithubLogo } from 'phosphor-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'team', 'competitions', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const teamMembers = [
    { name: 'HUNGRY BOGART', role: 'Captain of Mind Control Operations', specialty: 'Reversing, web, forensics, OSINT' },
    // cspell:disable-next-line
    { name: 'NULLPOINTERSF', role: 'Forward Reconnaissance Agent', specialty: 'AI/ML Prompt Injections, mobile security, Coding Challenges, Reversing' },
    { name: 'UNPATCHES', role: 'Junior Agent in Charge of Disinformation Campaigns', specialty: 'Social Engineering, Lockpicking, Game Hacking' },
    { name: 'CH33KS', role: 'Chemical Warfare Agent', specialty: 'API Security, Lockpicking, web' }
  ];

  const competitions = [
    { event: '0ctf 2024', placement: '114th Place', points: '129' },
    { event: 'Cyber Apocalypse CTF 2025: Tales from Eldoria', placement: '609th Place', points: '24,000' },
    { event: 'BSides NYC', placement: '2nd Place', points: '12,780' },
    { event: 'CyberPatriot', placement: '1st Place', points: '31,200' },
    { event: 'CSAW CTF', placement: '4th Place', points: '18,660' },
    { event: 'AngstromCTF', placement: '2nd Place', points: '22,340' }
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-lime-400/90">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-pink-600 uppercase tracking-wider">
              Coney Island Arcade
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'team', 'competitions', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`uppercase tracking-wide transition-colors duration-300 hover:text-pink-600 ${
                    activeSection === section ? 'text-pink-600' : 'text-white'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-green-400/5 via-transparent to-green-400/5 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-purple-600 to-pink-400 animate-pulse">
              Coney Island
            </h1>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider text-white">
              Arcade
            </h2>
          </div>
          
          <div className="mb-8 flex justify-center space-x-4">
            <div className="flex items-center space-x-2 text-green-400">
              <Shield className="w-6 h-6" />
              <span className="text-lg font-semibold">CTF TEAM</span>
            </div>
            <div className="text-white">•</div>
            <div className="flex items-center space-x-2 text-pink-400">
              <Zap className="w-6 h-6" />
              <span className="text-lg font-semibold">CYBERSECURITY</span>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            We are the persistent noise you hear on the wire. We hack our way to the end of each challenge,<br />
            <span className="text-purple-400 font-semibold">one flag at a time</span>
          </p>
          
          <button
            onClick={() => scrollToSection('about')}
            className="group inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-none border-2 border-green-400 hover:border-pink-400 transition-all duration-300 uppercase font-bold tracking-wider">
            <span>Enter the Arcade</span>
            <ChevronDown className="w-5 h-5 group-hover:animate-bounce"/>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-400">
            About Us
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-green-400 mb-6 uppercase">
                Who are these Hackers?
              </h3>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                You might see us in your local hackerspace, or find us in the cesspools of IRC.
                We're a team with varied experiences and interests in hacking. We are on a path toward
                danger and digital bloodshed.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We aren't afraid to try new categories, new tools, or even get our asses kicked at the most difficult
                competitions. Every challenge teaches us something new.

              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 p-4 border border-green-500/30 hover:border-green-400 transition-colors">
                  <Code className="w-8 h-8 text-green-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Exploitation</h4>
                  <p className="text-sm text-gray-400">Breaking binaries</p>
                </div>
                <div className="bg-black/50 p-4 border border-blue-500/30 hover:border-blue-400 transition-colors">
                  <Shield className="w-8 h-8 text-blue-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Defense</h4>
                  <p className="text-sm text-gray-400">Securing systems</p>
                </div>
                <div className="bg-black/50 p-4 border border-pink-500/30 hover:border-pink-400 transition-colors">
                  <Target className="w-8 h-8 text-pink-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">OSINT</h4>
                  <p className="text-sm text-gray-400">Intelligence gathering</p>
                </div>
                <div className="bg-black/50 p-4 border border-purple-500/30 hover:border-purple-400 transition-colors">
                  <Zap className="w-8 h-8 text-purple-400 mb-2" />
                  <h4 className="font-bold text-white mb-1">Forensics</h4>
                  <p className="text-sm text-gray-400">Digital archaeology</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 border border-green-400/30">
                <h4 className="text-xl font-bold text-green-400 mb-3">Our Philosophy</h4>
                <p className="text-gray-300">
                 "Believe in yourself. Amass as many skills as you can. Break everything that gets in your way."
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-6 border border-pink-400/30">
                <h4 className="text-xl font-bold text-pink-400 mb-3">Founded</h4>
                <p className="text-gray-300">
                  We founded Coney Island Arcade in 2024. Our first competition was 0ctf.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 p-6 border border-blue-400/30">
                <h4 className="text-xl font-bold text-blue-400 mb-3">Mission</h4>
                <p className="text-gray-300">
                  Global domination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-pink-400">
            Meet the Rogue Agents
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group bg-gradient-to-br from-gray-900 to-black p-6 border border-gray-700 hover:border-green-400 transition-all duration-300 transform hover:scale-105"
              >
                <div className="mb-4">
                  <Users className="w-12 h-12 text-green-400 mb-3" />
                  <h3 className="text-xl font-bold text-green-400 uppercase tracking-wider mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 mb-4">{member.specialty}</p>
                  <p className="text-gray-400 text-sm italic mb-4">{member.role}</p>
                </div>
                <div className="w-full bg-gray-800 h-1">
                  <div 
                    className="h-1 bg-gradient-to-r from-green-400 to-blue-400 transition-all duration-1000 group-hover:w-full" 
                    style={{ width: `${60 + (index * 7)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitions Section */}
      <section id="competitions" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-black uppercase text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
            Competitions 2025
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((achievement, index) => (
              <div
                key={achievement.event}
                className="bg-black/70 p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 group"
              >
                <Flag className="w-8 h-8 text-red-400 mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2">{achievement.event}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-green-400 font-semibold">{achievement.placement}</span>
                  <span className="text-gray-400">{achievement.points} pts</span>
                </div>
                <div className="w-full bg-gray-800 h-2">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-400 to-green-400" 
                    style={{ width: `${Math.min(90, index * 15 + 40)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black uppercase mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-green-400">
            Join the Rebellion
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            We're on the lookout for talented hackers to join our team.<br />
            Send us an email. No phishing scams, please.
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="mailto:hb@ciahacked.me"
              className="group flex items-center space-x-3 bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 border-2 border-green-400 hover:border-pink-400 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              <span className="font-bold uppercase tracking-wider">Email Us</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="w-12 h-12 bg-gray-800 flex items-center justify-center border border-gray-600 hover:border-green-400 hover:bg-green-500/20 transition-all duration-300"
            >
              <GithubLogo className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-gray-800 flex items-center justify-center border border-gray-600 hover:border-blue-400 hover:bg-blue-500/20 transition-all duration-300"
            >
              <DiscordLogo className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 bg-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-500">
            &copy; 2025 Coney Island Arcade CTF Team.
            <span className="text-green-400 ml-2">Hack the Planet!</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;