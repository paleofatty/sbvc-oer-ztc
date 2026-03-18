export default function StudentImpact() {
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">Equity &amp; Access</div>
          <h1>Student Impact</h1>
          <p className="subtitle">How textbook costs and data infrastructure gaps create measurable barriers for SBVC&rsquo;s most vulnerable students.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <h2>Who Our Students Are</h2>
          <p>
            SBVC serves one of the most diverse and economically vulnerable student populations in the California community college system. The textbook affordability problem is not abstract here — it directly affects enrollment decisions, course selection, and degree completion for a majority of our students.
          </p>
          <div className="stat-row">
            <div className="stat-card">
              <div className="stat-value">82.3%</div>
              <div className="stat-label">Underrepresented Groups</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">49%</div>
              <div className="stat-label">First-Generation</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">~52%</div>
              <div className="stat-label">Hispanic/Latinx</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">67%</div>
              <div className="stat-label">Economically Disadvantaged (Econ classes)</div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>The Hidden Cost: Data Infrastructure as Student Harm</h2>
          <p>
            One of the task force&rsquo;s most important findings is that the data infrastructure itself creates a direct financial burden on students. The problem operates in two directions:
          </p>

          <h3>When ZTC courses aren&rsquo;t flagged in the schedule</h3>
          <p>
            Students enrolled in courses that use free OER materials may still be charged through the college&rsquo;s textbook savings program. If a ZTC course isn&rsquo;t properly coded in the scheduling system, students pay for materials they don&rsquo;t need. The system cannot distinguish between &ldquo;no textbook required&rdquo; and &ldquo;free textbook provided through OER&rdquo; — and the financial consequence falls entirely on the student.
          </p>

          <h3>When &ldquo;no textbook&rdquo; doesn&rsquo;t mean zero cost</h3>
          <p>
            Conversely, some courses flagged as having no textbook in the bookstore system actually require materials the student must obtain — instructor-created packets, required software, lab equipment, or supplies. The &ldquo;free&rdquo; label in the bookstore sends students to a page that says no materials are needed, when in fact the instructor has assigned an OER text or other resources. Students arrive at the library unable to find textbooks they were told don&rsquo;t exist.
          </p>

          <div className="callout" style={{marginTop: '24px'}}>
            <p><strong>The misclassification runs in both directions</strong> — making any baseline measurement unreliable and creating confusion for the students the system is supposed to serve. This is not a technical glitch. It is a systemic failure that requires coordinated action across scheduling, bookstore, library, and faculty reporting systems.</p>
          </div>
        </section>

        <section className="section">
          <h2>The Student Experience</h2>
          <p>
            Behind the systems problem are real patterns affecting real students:
          </p>

          <div className="momentum-grid">
            <div className="momentum-item">
              <div className="bar shifted" />
              <div className="content">
                <h4>Day-One Disadvantage</h4>
                <p>Students who cannot afford textbooks fall behind in the first weeks of a course, creating an achievement gap from day one that compounds throughout the semester.</p>
              </div>
            </div>
            <div className="momentum-item">
              <div className="bar shifted" />
              <div className="content">
                <h4>Distorted Pathways</h4>
                <p>Students choose courses based on textbook cost rather than academic fit or degree progress — distorting their educational pathway and potentially extending time to completion.</p>
              </div>
            </div>
            <div className="momentum-item">
              <div className="bar shifted" />
              <div className="content">
                <h4>Information Gap</h4>
                <p>First-generation students who don&rsquo;t know how to navigate textbook alternatives, OER repositories, or library reserves face a compounding barrier — a cost gap amplified by an information gap.</p>
              </div>
            </div>
            <div className="momentum-item">
              <div className="bar slowed" />
              <div className="content">
                <h4>Unnecessary Purchases</h4>
                <p>Students buy textbooks they didn&rsquo;t need because the bookstore listed them and the instructor didn&rsquo;t update the system — a direct consequence of the reporting gap between faculty practice and institutional records.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>The Cost of Inaction</h2>
          <p>
            The question is not whether OER adoption carries risk. The question is what happens if we don&rsquo;t act. For SBVC&rsquo;s student population, the cost of inaction is measurable:
          </p>
          <div className="stat-row" style={{gridTemplateColumns: 'repeat(2, 1fr)'}}>
            <div className="stat-card">
              <div className="stat-value" style={{fontSize: '24px'}}>Courses dropped</div>
              <div className="stat-label">Students who can&rsquo;t afford materials withdraw</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{fontSize: '24px'}}>Degrees delayed</div>
              <div className="stat-label">Pathway distortion extends time to completion</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{fontSize: '24px'}}>Enrollment barriers</div>
              <div className="stat-label">Prospective students never enroll due to total cost perception</div>
            </div>
            <div className="stat-card">
              <div className="stat-value" style={{fontSize: '24px'}}>Compliance risk</div>
              <div className="stat-label">Title 5 now requires burden-free access policies</div>
            </div>
          </div>

          <div className="callout gold" style={{marginTop: '32px'}}>
            <p><strong>Recommendation:</strong> The next phase of this work needs a structured student feedback mechanism — not just satisfaction surveys, but actual student voice data about how textbook costs affect enrollment decisions, course selection, and completion. The demographic data is clear. The student narrative data needs to be collected at scale to drive institutional action.</p>
          </div>
        </section>
      </div>
    </>
  );
}
