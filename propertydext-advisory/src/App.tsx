import { useMemo, useState, type ReactNode } from "react";

type Page = "home" | "call" | "contact";

type NavItem = {
  key: Page;
  label: string;
};

export default function PropertyDexTAdvisorSite() {
  const [page, setPage] = useState<Page>("home");

  const nav = useMemo<NavItem[]>(
    () => [
      { key: "home", label: "Home" },
      { key: "call", label: "Call Details" },
      { key: "contact", label: "Contact" },
    ],
    []
  );

  const coreProblems = [
    {
      title: "Too Much Information. Almost No Clarity.",
      text: "Most real estate professionals are already hearing about tokenization, blockchain, wallets, stablecoins, and digital ownership. The problem is not lack of information. The problem is that most of that information is fragmented, generic, too technical, or completely disconnected from daily real estate work.",
    },
    {
      title: "The Cost of Waiting Is Invisible at First.",
      text: "Many agents and real estate professionals assume they can simply learn later, when this becomes more mainstream. But markets do not reward late understanding. The people who start earlier gain language, confidence, trust, and positioning before everyone else even realizes what changed.",
    },
    {
      title: "Confusion Creates Exposure to Bad Decisions.",
      text: "As digital real estate evolves, the space will attract serious opportunities and a massive amount of noise: fake projects, poorly explained products, phishing attacks, wallet mistakes, and misleading narratives. The less prepared someone is, the more vulnerable they become.",
    },
  ];

  const solutionPoints = [
    "I translate complex topics into plain English.",
    "I connect digital real estate concepts to your actual work, not abstract crypto talk.",
    "I help you understand what is real, what is premature, and what is simply noise.",
    "I give you a structured path so you can move with more clarity, confidence, and safety.",
  ];

  const services = [
    {
      eyebrow: "01",
      title: "1:1 Advisory Sessions",
      text: "Private working sessions for real estate professionals who want clarity on tokenization, wallets, digital ownership, stablecoins, and what these changes may mean for their role, clients, and positioning.",
    },
    {
      eyebrow: "02",
      title: "Real Estate Future Readiness",
      text: "A structured advisory path for professionals who want to stay relevant as the market evolves, understand what may change in the industry, and prepare before they are forced to catch up under pressure.",
    },
    {
      eyebrow: "03",
      title: "Security & Scam Awareness",
      text: "A practical education layer focused on phishing, bad wallet practices, fake opportunities, poor assumptions, and avoidable mistakes that will become more common as more people enter this space without preparation.",
    },
    {
      eyebrow: "04",
      title: "Asset Opportunity Review",
      text: "A first strategic conversation around one property, listing, or project, exploring whether there could be a meaningful future digital angle without forcing hype, unrealistic promises, or the wrong structure.",
    },
  ];

  const process = [
    {
      title: "Understand Where You Are Now",
      text: "We begin by identifying your level of exposure, your market, your goals, and your current understanding. This avoids generic advice and makes the conversation relevant from the start.",
    },
    {
      title: "Break Down the Landscape Clearly",
      text: "We simplify the ecosystem: tokenization, wallets, stablecoins, digital ownership, and market direction. The goal is not to impress you with jargon. The goal is to make things make sense.",
    },
    {
      title: "Connect It to Real Estate Reality",
      text: "Everything is translated back into the context that matters to you: clients, properties, opportunities, risk, trust, and professional positioning.",
    },
    {
      title: "Identify Risks and False Signals",
      text: "We cover what can go wrong, where beginners usually fail, and how to avoid the traps that come from entering a changing market with incomplete knowledge.",
    },
    {
      title: "Define a Logical Next Step",
      text: "At the end, you leave with more than ideas. You leave with clearer direction: whether to stop, keep learning, go deeper, review an asset, or build a stronger positioning path.",
    },
  ];

  const notFor = [
    "People looking for generic free information with no intention to act.",
    "Crypto speculation mindsets searching for quick wins instead of professional clarity.",
    "Anyone expecting shortcuts without learning the basics of safety, structure, and context.",
    "Professionals who do not believe the market will change and prefer to ignore the shift entirely.",
  ];

  const whyMe = [
    {
      title: "Real Estate Context First",
      text: "This is not built from pure crypto theory. The conversation is shaped around the language, pressures, and realities of real estate professionals.",
    },
    {
      title: "Clarity Over Hype",
      text: "My role is not to confuse you with complexity. My role is to help you understand what matters, what does not, and how to think clearly before the market gets noisier.",
    },
    {
      title: "Structured Guidance",
      text: "Instead of random content, you get a logical path. This makes your learning faster, cleaner, and far more useful than consuming disconnected information online.",
    },
  ];

  const callIncludes = [
    "A focused paid working session, not a vague intro chat.",
    "Clear explanations tailored to your level of understanding.",
    "A practical overview of risks, mistakes, and false expectations.",
    "A first strategic conversation around your role, market, or one potential asset.",
    "Guidance on what your smartest next move may be.",
  ];

  const afterCall = [
    "A second, deeper advisory session focused on your specific market or questions.",
    "A more detailed review of one property, listing, or asset scenario.",
    "A broader strategic positioning path for professionals who want to build early credibility.",
    "A longer advisory relationship if the project or opportunity justifies it.",
  ];

  const contactReasons = [
    "You feel the market is changing, but you do not yet have a clear framework.",
    "You want to understand these topics without wasting weeks on scattered content.",
    "You want to protect yourself from scams, bad assumptions, and beginner mistakes.",
    "You want to explore whether one of your assets could fit a future-ready direction.",
  ];

  const sectionTitle =
    "font-serif text-4xl md:text-5xl font-light tracking-[-0.02em] text-stone-100";
  const paragraph = "text-[15px] md:text-base leading-8 text-slate-400 font-light";

  const Shell = ({ children }: { children: ReactNode }) => (
    <div className="min-h-screen bg-[#050508] text-stone-200 selection:bg-amber-300 selection:text-black">
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.14),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(56,189,248,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.16)_1px,transparent_1px)] [background-size:84px_84px]" />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );

  const Header = () => (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(5,5,8,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
          <div className="h-11 w-11 rounded-sm border border-amber-400/30 bg-white/95" />
          <div>
            <div className="font-serif text-2xl font-light tracking-[0.04em] text-stone-100">
              PropertyDex<span className="text-amber-400">T</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
              Private Advisory
            </div>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              className={`text-[12px] uppercase tracking-[0.16em] transition ${
                page === item.key
                  ? "text-stone-100"
                  : "text-slate-500 hover:text-stone-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setPage("call")}
          className="rounded-sm border border-amber-400 bg-amber-400 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.12em] text-black shadow-[0_0_30px_rgba(201,168,76,0.18)] transition hover:bg-amber-300"
        >
          Book $49
        </button>
      </div>
    </header>
  );

  const Hero = () => (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#080b12]">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-28 md:pt-28">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-amber-300">
            <span className="h-2 w-2 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(201,168,76,0.6)]" />
            Real Estate × Digital Transition Advisory
          </div>

          <h1 className="max-w-5xl font-serif text-5xl font-light leading-[0.96] tracking-[-0.03em] text-stone-100 md:text-7xl">
            I help real estate professionals understand{" "}
            <span className="text-amber-300">what is changing</span>, what is noise,
            and what they should do before the market forces them to react.
          </h1>

          <p className="mt-8 max-w-2xl text-[16px] leading-8 text-slate-400 md:text-[17px]">
            This is not a crypto platform. This is a personal advisory website
            built for professionals who want clarity on tokenization, wallets,
            stablecoins, digital ownership, and the future of real estate —
            without hype, confusion, or technical overload.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={() => setPage("call")}
              className="rounded-sm border border-amber-400 bg-amber-400 px-6 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-black shadow-[0_0_34px_rgba(201,168,76,0.18)] transition hover:bg-amber-300"
            >
              Book the $49 Session
            </button>
            <button
              onClick={() => setPage("contact")}
              className="rounded-sm border border-white/15 bg-transparent px-6 py-3 text-[12px] font-medium uppercase tracking-[0.12em] text-stone-100 transition hover:border-amber-400/40 hover:bg-amber-400/10 hover:text-amber-200"
            >
              Start the Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const HomePage = () => (
    <Shell>
      <Hero />
      {/* Sections omitted for brevity in this scaffold: same structure can be expanded */}
      <section className="border-b border-white/10 bg-[#0c1018] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-4 text-[11px] uppercase tracking-[0.22em] text-cyan-300">
              The Core Problem
            </div>
            <h2 className={sectionTitle}>
              The issue is not that professionals are unwilling to learn.
            </h2>
            <p className={`${paragraph} mx-auto mt-6 max-w-2xl`}>
              Most people are behind because digital real estate information is
              scattered and hard to apply.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-3">
            {coreProblems.map((item, index) => (
              <div key={item.title} className="bg-[#101520] p-8">
                <div className="mb-6 text-sm text-cyan-300">0{index + 1}</div>
                <h3 className="text-stone-100">{item.title}</h3>
                <p className="mt-4 text-[14px] leading-8 text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );

  const CallPage = () => (
    <Shell>
      <section className="bg-[#050508] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-5xl text-stone-100">Call Details</h1>
          <div className="mt-10 space-y-4">
            {callIncludes.map((item) => (
              <p key={item} className="text-slate-400">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );

  const ContactPage = () => (
    <Shell>
      <section className="bg-[#050508] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="font-serif text-5xl text-stone-100">Contact</h1>
          <div className="mt-10 space-y-4">
            {contactReasons.map((item) => (
              <p key={item} className="text-slate-400">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>
    </Shell>
  );

  const Footer = () => (
    <footer className="border-t border-white/10 bg-[#050508]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="font-serif text-3xl font-light text-stone-100">
            PropertyDex<span className="text-amber-400">T</span>
          </div>
        </div>
        <div>
          <div className="space-y-3">
            {nav.map((item) => (
              <button
                key={item.key}
                onClick={() => setPage(item.key)}
                className="block text-left text-[13px] uppercase tracking-[0.12em] text-slate-500 transition hover:text-stone-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[13px] leading-7 text-slate-500">
            Educational and advisory content only. No legal, financial, or
            investment advice is provided through this website.
          </p>
        </div>
      </div>
    </footer>
  );

  if (page === "call") return <CallPage />;
  if (page === "contact") return <ContactPage />;
  return <HomePage />;
}
