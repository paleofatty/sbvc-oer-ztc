import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">LFM Academy II &middot; 2025–2026 &middot; Centennial Celebration</div>
          <h1>Zero Textbook Cost &amp; Open Educational Resources Initiative</h1>
          <p className="subtitle">
            Removing financial barriers to instructional materials at San Bernardino Valley College — a systems change project documented through the Leading from the Middle Academy.
          </p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <h2>The Challenge</h2>
          <h3>SBVC Students at a Glance</h3>
          <p>Textbook costs remain one of the most significant and immediate financial barriers students face. At SBVC — celebrating its centennial in 2026 — 82% of students come from underrepresented groups and nearly half are first-generation. The burden falls disproportionately on those who can least afford it.</p>
          <p>California's Title 5, Section 54221 now requires community college governing boards to adopt policies ensuring burden-free access to instructional materials. This regulation transforms zero-cost materials from optional innovation into required policy. Students who use ZTC/OER materials have shown 3–5 percentage point higher success rates in courses.</p>
          <div className="stat-row">
            <div className="stat-card"><div className="stat-value">82.3%</div><div className="stat-label">Underrepresented Students</div></div>
            <div className="stat-card"><div className="stat-value">49%</div><div className="stat-label">First-Generation</div></div>
            <div className="stat-card"><div className="stat-value">$1,200+</div><div className="stat-label">Avg. Annual Textbook Cost</div></div>
            <div className="stat-card"><div className="stat-value">~18%</div><div className="stat-label">Sections Reporting ZTC</div></div>
          </div>
        </section>

        <section className="section">
          <h2>The Initiative</h2>
          <p>Supported by over $200,000 in state funding, SBVC's centennial ZTC/OER initiative aims to build institutional infrastructure for sustainable adoption — data systems, faculty support, degree pathway mapping, and compliance frameworks. The Leading from the Middle Academy provides leadership development, coaching, and a structured change management framework.</p>
          <p>The project operates through a dual structure: the state ZTC/OER grant provides resources and accountability targets, while LFM provides something equally valuable — structured deadlines and check-ins through convenings, frameworks for navigating institutional complexity, and the institutional legitimacy that comes from participating in a statewide RP Group academy — enabling middle leaders to advance cross-institutional coordination that would otherwise lack formal sponsorship.</p>
          <div className="callout">
            <p><strong>Project Goals:</strong> 100 faculty participants, 100 ZTC/OER course adoptions, and one complete ZTC degree pathway (Social Behavioral Sciences Liberal Arts, AA-T — the college's second most popular degree) — supported by institutional systems that sustain the work beyond any single grant cycle.</p>
          </div>
        </section>

        <section className="section">
          <h2>The Core Insight</h2>
          <div className="callout gold">
            <p>This is not a resource problem. It is a <strong>systems + governance + adoption problem</strong>. Success depends on aligning three things: credible data (we can't measure what we can't track), clear organizational ownership (the OER "box" exists on the org chart but is undefined), and faculty behavior change (adoption is a human problem, not a technical one). Without all three, funding alone will not translate into outcomes.</p>
          </div>
        </section>

        <section className="section">
          <h2>The Team</h2>
          <p>This work is carried out by the SBVC LFM Task Force — a cross-functional team bringing together instructional leadership, institutional research, library services, and faculty expertise.</p>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-role">Co-Lead</div>
              <h4>Norma Durian</h4>
              <p>Executive sponsorship and strategic direction</p>
            </div>
            <div className="team-card">
              <div className="team-role">Co-Lead</div>
              <h4>Davena Burns-Peters</h4>
              <p>Instructional leadership and college-wide alignment</p>
            </div>
            <div className="team-card">
              <div className="team-role">OER Liaison</div>
              <h4>Wei-Chung Wang</h4>
              <p>Department Chair &amp; Economics Professor — systems strategy and site development</p>
            </div>
            <div className="team-card">
              <div className="team-role">Institutional Research</div>
              <h4>Christie Gabriel</h4>
              <p>Planning, Research &amp; Institutional Effectiveness — data systems and reporting</p>
            </div>
            <div className="team-card">
              <div className="team-role">Library</div>
              <h4>Celia Huston</h4>
              <p>OER cataloging, curriculum integration, and resource infrastructure</p>
            </div>
            <div className="team-card">
              <div className="team-role">Library Technical Services</div>
              <h4>Timothy Hosford</h4>
              <p>OER access systems, course reserves, and accessibility research</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="memorial">
            <div className="memorial-photo">
              <Image src="/thomas-berry.png" alt="Thomas W. Berry II" width={120} height={120} />
            </div>
            <div className="memorial-text">
              <h3>In Memory of Thomas W. Berry II</h3>
              <p>Thomas served as the task force's Curriculum Specialist and was the operational engine behind this initiative. He built the processes, tracked the details, and kept the work moving forward when it would have been easy to let it stall. Much of the infrastructure documented on this site — the CourseDog integration, the curriculum review pipeline, the data collection framework — started with Thomas doing the work before anyone asked him to. The team lost Thomas in early 2026. This site exists in part because of what he built, and in part to make sure that work continues.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Navigate This Site</h2>
          <div className="findings-grid">
            <Link href="/momentum" style={{textDecoration:'none'}}><div className="finding-card" style={{cursor:'pointer'}}>
              <h4>Momentum Map &rarr;</h4><p>What moved, what evolved, what shifted — an honest assessment of where the project stands.</p>
            </div></Link>
            <Link href="/framework" style={{textDecoration:'none'}}><div className="finding-card" style={{cursor:'pointer'}}>
              <h4>Three Pillars Framework &rarr;</h4><p>The advocacy strategy that reframed OER from optional innovation to required compliance.</p>
            </div></Link>
            <Link href="/data-systems" style={{textDecoration:'none'}}><div className="finding-card" style={{cursor:'pointer'}}>
              <h4>Data Systems Challenge &rarr;</h4><p>The fragmented data pipeline — CourseDog, Colleague, Informer, Follett — and why measurement is the biggest barrier.</p>
            </div></Link>
            <Link href="/student-impact" style={{textDecoration:'none'}}><div className="finding-card" style={{cursor:'pointer'}}>
              <h4>Student Impact &rarr;</h4><p>How data gaps and textbook costs create measurable harm for SBVC's most vulnerable students.</p>
            </div></Link>
            <Link href="/lessons" style={{textDecoration:'none'}}><div className="finding-card" style={{cursor:'pointer'}}>
              <h4>Lessons Learned &rarr;</h4><p>Execution patterns, resistance dynamics, and recommendations for the next phase.</p>
            </div></Link>
            <Link href="/timeline" style={{textDecoration:'none'}}><div className="finding-card" style={{cursor:'pointer'}}>
              <h4>Timeline &rarr;</h4><p>Key milestones from onboarding through sustainability planning — including the inflection points.</p>
            </div></Link>
          </div>
        </section>
      </div>
    </>
  );
}
