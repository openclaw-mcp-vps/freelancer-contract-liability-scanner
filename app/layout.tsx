import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contract Liability Scanner — Protect Your Freelance Business',
  description: 'AI scans freelance contracts and highlights dangerous indemnification, liability, and IP assignment clauses with plain English explanations.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="148a4b8d-6a7f-4d72-953f-587460438a81"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
