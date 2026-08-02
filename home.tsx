import { useState, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Mic, UserX, AlertTriangle, CheckCircle2, XCircle, Crosshair, Gavel, Car } from 'lucide-react';
import nysrpLogo from '@assets/1000064742-removebg-preview_1785666683796.png';

const FadeIn = ({ children, delay = 0, className = '' }: { children: ReactNode, delay?: number, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeader = ({ number, title }: { number: string, title: string }) => (
  <div className="flex flex-col items-start mb-16">
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-1.5 w-20 bg-primary origin-left mb-6"
    />
    <h2 className="text-4xl md:text-5xl font-mono font-bold uppercase tracking-tight text-white">
      <span className="text-primary mr-3">{number}.</span>{title}
    </h2>
  </div>
);

const navLinks = [
  { id: 'requirements', label: 'Requirements' },
  { id: 'core-rules', label: 'Core Rules' },
  { id: 'civ-weapons', label: 'Civ & Weapons' },
  { id: 'scenarios', label: 'Scenarios' },
];

const scenarios = [
  {
    rule: 'Fear RP',
    correct: {
      label: 'Correct',
      text: 'Two officers draw weapons and shout "Hands up!" — the suspect immediately raises their hands, complies with commands, and does not reach for their waistband.',
    },
    incorrect: {
      label: 'Incorrect',
      text: 'A suspect draws their pistol and attempts to shoot while two officers have rifles aimed directly at their head.',
    },
  },
  {
    rule: 'New Life Rule',
    correct: {
      label: 'Correct',
      text: 'After being killed in a gang shootout near the docks, you spawn at an uptown hospital, wait 15 minutes, and begin a completely separate roleplay — unrelated to the previous scene.',
    },
    incorrect: {
      label: 'Incorrect',
      text: 'You get shot during a robbery, respawn at the hospital, and immediately drive back to the same block to shoot the people who killed you.',
    },
  },
  {
    rule: 'Metagaming',
    correct: {
      label: 'Correct',
      text: 'You have no idea who the masked person in front of you is until they physically show you an ID card or introduce themselves out loud in-character.',
    },
    incorrect: {
      label: 'Incorrect',
      text: 'You read the floating name tag above a character\'s head and use that information to call them by name before they have identified themselves.',
    },
  },
  {
    rule: 'Fail RP — Vehicle Damage',
    correct: {
      label: 'Correct',
      text: 'After hitting a barrier at speed, you pull over, roleplay a broken engine, and call a mechanic via in-game phone. You wait for help before moving.',
    },
    incorrect: {
      label: 'Incorrect',
      text: 'Your car flips twice during a police chase. You land on the wheels and continue the chase at full speed as if nothing happened.',
    },
  },
  {
    rule: 'Powergaming',
    correct: {
      label: 'Correct',
      text: '/me slowly attempts to work a hand free from the cuffs, giving the officer a chance to notice and respond before any escape is possible.',
    },
    incorrect: {
      label: 'Incorrect',
      text: '/me instantly escapes from handcuffs using superhuman strength and sprints away at full speed with no chance for the officer to react.',
    },
  },
  {
    rule: 'Cop Baiting',
    correct: {
      label: 'Correct',
      text: 'You speed away from a pursuit because your character is fleeing a crime scene — there is a real, active roleplay reason for the interaction.',
    },
    incorrect: {
      label: 'Incorrect',
      text: 'You rev your engine repeatedly outside the police station and do donuts in the parking lot specifically to get officers to chase you for no story reason.',
    },
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      {/* Texture Overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgMTBoNDBNMTAgMHY0ME0wIDIwaDQwTTIwIDB2NDBNMCAzMGg0ME0zMCAwdjQwIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMSkiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')]" />

      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center"
        >
          <img
            src={nysrpLogo}
            alt="NYSRP Logo"
            className="w-64 h-64 md:w-80 md:h-80 object-contain mb-8 filter drop-shadow-[0_0_40px_rgba(212,160,23,0.2)]"
          />

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 uppercase leading-none" style={{ textShadow: '0 4px 30px rgba(0,0,0,0.8)' }}>
            New York State <br className="md:hidden" /><span className="text-primary">Roleplay</span>
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "160px" }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="h-1 bg-primary mb-10"
          />

          <h2 className="text-xl md:text-3xl font-mono text-gray-300 mb-8 uppercase tracking-[0.25em]">
            Whitelisted Guidelines
          </h2>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl font-medium leading-relaxed">
            A realistic, immersive GTA RP community — read carefully before applying.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-gray-500 font-mono text-sm uppercase tracking-[0.2em]"
        >
          <span>Scroll to read</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
        </motion.div>
      </section>

      {/* Sticky Nav */}
      <div className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-xl border-b border-border shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-start md:justify-center space-x-2 md:space-x-8 overflow-x-auto py-5 scrollbar-hide">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`whitespace-nowrap px-5 py-2.5 text-sm md:text-base font-mono uppercase tracking-wider transition-all duration-300 rounded-sm ${activeSection === link.id ? 'text-primary bg-primary/10 border-b-2 border-primary font-bold' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto pb-40">
        {/* Requirements */}
        <section id="requirements" className="py-32 px-4 scroll-mt-24">
          <SectionHeader number="01" title="Requirements" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <UserX size={40} strokeWidth={1.5} />, title: 'Age: 13+', desc: 'Discord TOS strictly enforced. No exceptions whatsoever.' },
              { icon: <Mic size={40} strokeWidth={1.5} />, title: 'Working Mic', desc: 'Clear audio required. No loud static, fan noise, or background chatter.' },
              { icon: <ShieldAlert size={40} strokeWidth={1.5} />, title: 'Maturity', desc: 'Bringing drama or toxicity from other servers results in an immediate ban.' }
            ].map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-10 h-full border border-border bg-card rounded-xl flex flex-col items-center text-center group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl shadow-black/20">
                  <div className="text-primary mb-8 p-6 bg-background rounded-full border border-border group-hover:scale-110 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500 shadow-inner">
                    {r.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 font-mono uppercase tracking-tight">{r.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{r.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Core Rules */}
        <section id="core-rules" className="py-32 px-4 scroll-mt-24 border-t border-border/50">
          <SectionHeader number="02" title="Core RP Rules" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              { title: 'Fear RP', desc: 'If someone pulls a gun on you, comply. You cannot run or draw your own weapon. Value your life as if it were real.' },
              { title: 'Fail RP', desc: 'No unrealistic stunts. Car flipped? Call a tow truck. Damaged vehicle? Pull over and roleplay the damage — no driving into a mod shop mid-pursuit.' },
              { title: 'Cop Baiting', desc: 'Do not speed past police stations or honk at officers to trigger a chase. It is unrealistic and not tolerated.' },
              { title: 'Prioritize Realism', desc: 'You cannot rob a bank every 5 minutes. Develop a proper character storyline. No treating the server like a public lobby or team deathmatch.' },
              { title: 'Greenzones', desc: 'No violence, robberies, or citizen arrests at spawn locations, hospitals, or government buildings where players are setting up their characters.' },
              { title: 'New Life Rule (NLR)', desc: 'If you die, you forget everything from that scene. Spawn somewhere else, stay away for at least 15 minutes. No revenge allowed.' },
              { title: 'Powergaming', desc: 'You cannot type that you magically escaped handcuffs. Every action must give the other player a fair chance to react.' },
              { title: 'Metagaming', desc: 'You cannot use out-of-character information — Discord chats, stream sniping — to influence your in-character decisions. Your character doesn\'t know names until shown an ID.' }
            ].map((rule, i) => (
              <FadeIn key={i} delay={0.1}>
                <div className="relative h-full flex flex-col p-8 md:p-10 border border-border bg-card rounded-xl overflow-hidden group hover:border-primary/40 transition-colors shadow-xl shadow-black/20">
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-border group-hover:bg-primary transition-colors duration-500" />
                  <h3 className="text-3xl font-bold text-white mb-4 font-mono uppercase tracking-tight">{rule.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{rule.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Civ & Weapons */}
        <section id="civ-weapons" className="py-32 px-4 scroll-mt-24 border-t border-border/50">
          <SectionHeader number="03" title="Civ & Weapons" />
          <FadeIn delay={0.2}>
            <div className="border border-border bg-card p-10 md:p-16 rounded-2xl relative overflow-hidden shadow-2xl shadow-black/40">
              <Crosshair className="absolute -bottom-20 -right-20 text-primary/[0.03] w-[500px] h-[500px] pointer-events-none rotate-12" />
              <Car className="absolute top-10 right-10 text-primary/[0.05] w-40 h-40 pointer-events-none -rotate-12" />

              <ul className="space-y-10 relative z-10 max-w-5xl">
                {[
                  "No military-grade rifles as a walking civilian — it triggers an immediate tactical response from law enforcement.",
                  "Weapons must be properly concealed and require a valid RP reason to draw.",
                  "Self-defense requires real justification — not just 'they insulted me or gave me a ticket'.",
                  "Realistic driving physics — no civilian sedan through thick mud or over steep mountains.",
                  "Popped tires from spike strips = slow down immediately and stop. No driving on bare rims at 100mph.",
                  "Your character's wealth, lifestyle, and vehicle must match the backstory you wrote in your application."
                ].map((rule, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <div className="mt-1.5 w-8 h-8 rounded bg-background flex items-center justify-center shrink-0 border border-primary/30 shadow-[0_0_15px_rgba(212,160,23,0.1)] group-hover:border-primary/80 transition-colors">
                      <div className="w-2.5 h-2.5 bg-primary rounded-sm group-hover:scale-125 transition-transform" />
                    </div>
                    <span className="text-gray-200 text-xl md:text-2xl font-medium leading-relaxed group-hover:text-white transition-colors">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </section>

        {/* Scenarios */}
        <section id="scenarios" className="py-32 px-4 scroll-mt-24 border-t border-border/50">
          <SectionHeader number="04" title="Scenario Examples" />
          <p className="text-gray-400 text-xl leading-relaxed mb-16 max-w-3xl">
            Review the following situations to understand how the rules apply in practice. Every rule comes down to a simple question: would this happen in real life?
          </p>
          <div className="space-y-10">
            {scenarios.map((s, i) => (
              <FadeIn key={i} delay={0.05}>
                <div className="border border-border bg-card rounded-2xl overflow-hidden shadow-xl shadow-black/30">
                  {/* Rule label */}
                  <div className="px-8 py-5 border-b border-border bg-background/60 flex items-center gap-3">
                    <AlertTriangle className="text-primary shrink-0" size={18} />
                    <span className="font-mono font-bold uppercase tracking-widest text-primary text-sm">{s.rule}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
                    {/* Correct */}
                    <div className="p-8 md:p-10 flex flex-col gap-5">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-emerald-500 shrink-0" size={22} />
                        <span className="font-mono font-bold uppercase tracking-widest text-emerald-500 text-sm">Correct</span>
                      </div>
                      <p className="text-gray-200 text-lg leading-relaxed font-medium">{s.correct.text}</p>
                    </div>

                    {/* Incorrect */}
                    <div className="p-8 md:p-10 flex flex-col gap-5 bg-red-950/10">
                      <div className="flex items-center gap-3">
                        <XCircle className="text-red-500 shrink-0" size={22} />
                        <span className="font-mono font-bold uppercase tracking-widest text-red-500 text-sm">Incorrect</span>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed italic">"{s.incorrect.text}"</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-24 pb-16 border-t border-border bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-gray-500 text-sm md:text-base font-mono uppercase tracking-wider">
            <div className="flex items-center gap-4">
              <img src={nysrpLogo} className="w-10 h-10 opacity-60" alt="logo" />
              <span>NYSRP &copy; {new Date().getFullYear()}</span>
            </div>
            <div className="flex items-center gap-3">
              <Gavel size={20} />
              <span>Roleplay Required. Drama Prohibited.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
