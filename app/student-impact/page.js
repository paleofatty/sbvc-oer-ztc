export default function StudentImpact() {
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">Equity &amp; Access</div>
          <h1>Student Impact</h1>
          <p className="subtitle">How textbook costs and data infrastructure gaps create measurable barriers for SBVC's most vulnerable students.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <h2>Who Our Students Are</h2>
          <p>SBVC serves one of the most diverse and economically vulnerable student populations in the California community college system. The textbook affordability problem directly affects enrollment decisions, course selection, and degree completion for a majority of students.</p>
          <div className="stat-row">
            <div className="stat-card"><div className="stat-value">82.3%</div><div className="stat-label">Underrepresented Groups</div></div>
            <div className="stat-card"><div className="stat-value">49%</div><div className="stat-label">First-Generation</div></div>
            <div className="stat-card"><div className="stat-value">~52%</div><div className="stat-label">Hispanic/Latinx</div></div>
            <div className="stat-card"><div className="stat-value">67%</div><div className="stat-label">Econ. Disadvantaged (Econ classes)</div></div>
          </div>
        </section>
        <section className="section">
          <h2>The Hidden Cost: Data Infrastructure as Student Harm</h2>
          <p>The data infrastructure itself creates direct financial burden on students. When systems don't communicate — when CourseDog, Colleague, Follett, and the student-facing schedule are out of sync — the confusion falls entirely on students:</p>
          <div className="momentum-grid">
            <div className="momentum-item"><div className="bar shifted" /><div className="content"><h4>Savings Plus Overcharges</h4><p>When ZTC courses aren't flagged in the schedule, students are included in the Savings Plus textbook program calculation and charged for materials that should be free. Faculty who don't report their OER usage are unknowingly costing their students money.</p></div></div>
            <div className="momentum-item"><div className="bar shifted" /><div className="content"><h4>Day-One Disadvantage</h4><p>Students who can't afford textbooks fall behind in the first weeks. The achievement gap starts on day one and compounds throughout the semester.</p></div></div>
            <div className="momentum-item"><div className="bar shifted" /><div className="content"><h4>Distorted Pathways</h4><p>Students choose courses based on textbook cost rather than academic fit or degree progress — extending time to completion and distorting guided pathways.</p></div></div>
            <div className="momentum-item"><div className="bar slowed" /><div className="content"><h4>Bookstore Confusion</h4><p>Follett's "free" button tells students "no textbooks" when the instructor has actually assigned an OER text. Students come to the library unable to find materials they were told don't exist.</p></div></div>
            <div className="momentum-item"><div className="bar slowed" /><div className="content"><h4>Unnecessary Purchases</h4><p>Students buy commercial textbooks they didn't need because the bookstore listed them and the instructor didn't update the system. A reporting gap translates directly to dollars out of students' pockets.</p></div></div>
          </div>
        </section>
        <section className="section">
          <h2>The Cost of Inaction</h2>
          <p>The question is not whether OER adoption carries risk. The question is what happens if we don't act:</p>
          <div className="stat-row" style={{gridTemplateColumns:'repeat(2, 1fr)'}}>
            <div className="stat-card"><div className="stat-value" style={{fontSize:'26px'}}>Courses dropped</div><div className="stat-label">Students who can't afford materials withdraw</div></div>
            <div className="stat-card"><div className="stat-value" style={{fontSize:'26px'}}>Degrees delayed</div><div className="stat-label">Pathway distortion extends time to completion</div></div>
            <div className="stat-card"><div className="stat-value" style={{fontSize:'26px'}}>Enrollment barriers</div><div className="stat-label">Prospective students never enroll due to total cost</div></div>
            <div className="stat-card"><div className="stat-value" style={{fontSize:'26px'}}>Compliance risk</div><div className="stat-label">Title 5 now requires burden-free access policies</div></div>
          </div>
          <div className="callout gold" style={{marginTop:'32px'}}>
            <p><strong>The vision:</strong> A student registers for an economics course and sees "ZTC" next to the title. On day one, they open their laptop and access all materials immediately — no waiting for financial aid, no choosing between textbooks and groceries. By semester end, they've saved $800 and passed because they had what they needed from the start. That's not aspirational. Over 100 community colleges have already made it real.</p>
          </div>
        </section>
      </div>
    </>
  );
}