export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Contract Scanner
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan contracts for{' '}
          <span className="text-[#58a6ff]">dangerous liability clauses</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Upload any freelance contract. Our AI instantly flags risky indemnification, unlimited liability, and IP assignment traps — in plain English, before you sign.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Scanning — $12/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { step: '01', title: 'Upload your contract', desc: 'PDF or DOCX — any freelance or consulting agreement.' },
            { step: '02', title: 'AI scans every clause', desc: 'GPT-4 identifies indemnification, IP grabs, and liability traps.' },
            { step: '03', title: 'Get a plain English report', desc: 'Highlighted risks with severity ratings and what to negotiate.' },
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-mono text-sm font-bold mb-2">{item.step}</div>
              <div className="text-white font-semibold mb-1">{item.title}</div>
              <div className="text-[#8b949e] text-sm">{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-xl font-semibold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$12</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited contract scans',
              'AI clause risk scoring',
              'Plain English explanations',
              'Exportable PDF reports',
              'Covers indemnity, IP & liability',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-xl font-semibold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-5">
          {[
            {
              q: 'What types of contracts can I scan?',
              a: 'Any freelance, consulting, or agency contract in PDF or DOCX format. The AI handles NDAs, service agreements, work-for-hire contracts, and more.',
            },
            {
              q: 'Is this legal advice?',
              a: 'No. This tool provides AI-powered analysis to help you understand risky language, but it is not a substitute for advice from a licensed attorney.',
            },
            {
              q: 'How is my contract data handled?',
              a: 'Contracts are processed securely and never stored permanently or used to train AI models. Your documents stay private.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Contract Liability Scanner. Not legal advice.
      </footer>
    </main>
  )
}
