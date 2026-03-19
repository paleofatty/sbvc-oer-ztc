import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'SBVC OER/ZTC Initiative',
  description: 'San Bernardino Valley College — Zero Textbook Cost / Open Educational Resources Initiative',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="site-header-inner">
            <Link href="/" className="brand">
              <div className="brand-icon">OER</div>
              <div>
                <span className="brand-text">SBVC ZTC/OER Initiative</span>
                <span className="brand-sub">Leading from the Middle Academy II</span>
              </div>
            </Link>
            <nav className="site-nav">
              <Link href="/">Overview</Link>
              <Link href="/momentum">Momentum</Link>
              <Link href="/framework">Framework</Link>
              <Link href="/data-systems">Data Systems</Link>
              <Link href="/student-impact">Student Impact</Link>
              <Link href="/lessons">Lessons Learned</Link>
              <Link href="/timeline">Timeline</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="page-container">
            <p>San Bernardino Valley College &middot; ZTC/OER Initiative &middot; LFM Academy II &middot; 2025&ndash;2026</p>
            <p style={{marginTop: '4px', fontSize: '12px'}}>This site documents the work of the SBVC LFM Task Force. For questions, contact the Office of Instruction.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}