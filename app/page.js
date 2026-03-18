import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">LFM Academy II &middot; 2025–2026</div>
          <h1>Zero Textbook Cost &amp; Open Educational Resources Initiative</h1>
          <p className="subtitle">
            Removing financial barriers to instructional materials at San Bernardino Valley College — a systems change project documented through the Leading from the Middle Academy.
          </p>
        </div>
      </div>

      <div className="page-container">
        <section className="section">
          <h2>The Challenge</h2>
          <p>
            Textbook costs remain one of the most significant and immediate financial barriers students face in higher education. At SBVC, where 82% of students come from underrepresented groups and nearly half are first-generation college students, the burden falls disproportionately on those who can least afford it.
          </p>
          <p>
            California&rsquo;s Title 5, Section 54221 now requires community college governing boards to adopt policies ensuring burden-free access to instructional materials. This regulation transforms zero-cost materials from an optional innovation into a required policy consideration.
          </p>

          <div className="stat-row">
            <div className="stat-card">
              <div className="stat-value">82.3%</div>
              <div className="stat-label">Underrepresented Students</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">49%</div>
              <div className="stat-label">First-Generation</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">$1,200+</div>
              <div className="stat-label">Avg. Annual Textbook Cost</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">~18%</div>
              <div className="stat-label">Sections Currently Reporting ZTC</div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>The Initiative</h2>
          <p>
            Supported by over $200,000 in state funding and the RP Group&rsquo;s Leading from the Middle Academy, the SBVC task force is working to build the institutional infrastructure for sustainable OER/ZTC adoption — including data systems, faculty support, degree pathway mapping, and compliance frameworks.
          </p>
          <p>
            The project operates through a dual structure: the state ZTC/OER grant provides resources and accountability targets, while the LFM Academy provides leadership development, coaching, and a structured change management framework.
          </p>

          <div className="callout">
            <p><strong>Project Goals:</strong> 100 faculty participants, 100 ZTC/OER course adoptions, and one complete ZTC degree pathway (Social Behavioral Sciences) — supported by institutional systems that sustain the work beyond any single grant cycle.</p>
          </div>
        </section>

        <section className="section">
          <h2>What This Site Documents</h2>
          <p>
            This site captures the task force&rsquo;s journey: what we attempted, what we learned, what barriers we encountered, and what we recommend for the next phase. It serves as both an institutional record and a resource for other colleges pursuing similar work.
          </p>

          <div className="stat-row" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <Link href="/momentum" style={{textDecoration: 'none'}}>
              <div className="stat-card" style={{textAlign: 'left', cursor: 'pointer'}}>
                <div className="stat-label" style={{marginBottom: '8px', color: 'var(--sbvc-blue)'}}>Momentum Map &rarr;</div>
                <p style={{fontSize: '14px', color: 'var(--gray-700)', margin: 0}}>Where work advanced, where it stalled, and what shifted — an honest assessment of progress.</p>
              </div>
            </Link>
            <Link href="/framework" style={{textDecoration: 'none'}}>
              <div className="stat-card" style={{textAlign: 'left', cursor: 'pointer'}}>
                <div className="stat-label" style={{marginBottom: '8px', color: 'var(--sbvc-blue)'}}>Three Pillars Framework &rarr;</div>
                <p style={{fontSize: '14px', color: 'var(--gray-700)', margin: 0}}>The advocacy strategy that reframed OER from optional innovation to required compliance.</p>
              </div>
            </Link>
            <Link href="/timeline" style={{textDecoration: 'none'}}>
              <div className="stat-card" style={{textAlign: 'left', cursor: 'pointer'}}>
                <div className="stat-label" style={{marginBottom: '8px', color: 'var(--sbvc-blue)'}}>Project Timeline &rarr;</div>
                <p style={{fontSize: '14px', color: 'var(--gray-700)', margin: 0}}>Key milestones from onboarding through sustainability planning.</p>
              </div>
            </Link>
            <Link href="/student-impact" style={{textDecoration: 'none'}}>
              <div className="stat-card" style={{textAlign: 'left', cursor: 'pointer'}}>
                <div className="stat-label" style={{marginBottom: '8px', color: 'var(--sbvc-blue)'}}>Student Impact &rarr;</div>
                <p style={{fontSize: '14px', color: 'var(--gray-700)', margin: 0}}>How data infrastructure gaps and textbook costs affect SBVC&rsquo;s most vulnerable students.</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="section">
          <h2>Core Insight</h2>
          <div className="callout gold">
            <p>This is not a resource problem. It is a systems, governance, and adoption problem. Success depends on aligning credible data, clear organizational ownership, and faculty behavior change. Without those, funding alone will not translate into outcomes.</p>
          </div>
        </section>
      </div>
    </>
  );
}
