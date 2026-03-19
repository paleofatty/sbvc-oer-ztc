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
              <img src="/centennial-logo.png" alt="SBVC Centennial" style={{width: '44px', height: '44px', borderRadius: '4px'}} />
              <div>
                <span className="brand-text">ZTC/OER Initiative</span>
                <span className="brand-sub">A Century of Student Access &amp; Equity</span>
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
            <img src="/centennial-logo.png" alt="SBVC Centennial 1926-2026" style={{width: '64px', height: '64px', marginBottom: '12px', opacity: 0.8}} />
            <p>San Bernardino Valley College &middot; <em>100 Years of Excellence</em> &middot; 1926&ndash;2026</p>
            <p style={{marginTop: '4px', fontSize: '12px'}}>ZTC/OER Initiative &middot; Leading from the Middle Academy II &middot; A project of the Office of Instruction</p>
          </div>
        </footer>
      </body>
    </html>
  );
}