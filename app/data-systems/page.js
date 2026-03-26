export default function DataSystems() {
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">Biggest Barrier</div>
          <h1>The Data Systems Challenge</h1>
          <p className="subtitle">You cannot manage what you cannot measure. The fragmented data pipeline is the single greatest obstacle to OER/ZTC progress at SBVC.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <h2>The Pipeline Problem</h2>
          <p>OER/ZTC data at SBVC flows through multiple disconnected systems, each controlled by different stakeholders with different incentives. No single system provides a reliable picture of actual adoption.</p>
          <div className="findings-grid">
            <div className="finding-card">
              <h4>CourseDog (Scheduling)</h4>
              <p>Department chairs build course schedules here. Contains cost designation fields that can flag ZTC sections — but only if chairs know to use them and have the data. This is the team's biggest infrastructure win: embedding OER tracking into an existing workflow.</p>
            </div>
            <div className="finding-card">
              <h4>Colleague (SIS)</h4>
              <p>Student information system that feeds the schedule students see. CourseDog syncs to Colleague — meaning a ZTC flag in scheduling can appear in the student-facing schedule. But only if it was entered correctly upstream.</p>
            </div>
            <div className="finding-card">
              <h4>Informer (Reporting)</h4>
              <p>Reporting and data analytics tool that contains section-level data. Used for institutional research and reporting. Can pull ZTC data — but only what was entered in Colleague. Low-cost data is not available through this pipeline at all due to Book Saver program interactions.</p>
            </div>
            <div className="finding-card">
              <h4>Follett (Bookstore)</h4>
              <p>Outsourced bookstore vendor operating under a contract with potential minimum-spend provisions. Follett data is difficult to access, hard to interpret, and the vendor has limited financial motivation to promote OER visibility. Their "free" button creates student confusion.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>The Misclassification Problem</h2>
          <p>The data gap runs in both directions, making any baseline measurement unreliable:</p>
          <h3>"No Textbook" ≠ Zero Textbook Cost</h3>
          <p>Many courses flagged as having "no textbook" in the bookstore system aren't actually ZTC. They may use instructor-created materials, required software, lab equipment, or supplies that carry costs. The Follett "free" button sends students to a page saying no materials are needed — when the instructor has actually assigned an OER text or other resources.</p>
          <h3>ZTC Courses That Don't Report</h3>
          <p>Conversely, many faculty using OER materials have no streamlined mechanism to report it. The team discovered this firsthand — several members realized their own courses were unreported. The result: courses that are ZTC in practice are invisible in the data — and students may be charged Savings Plus fees for materials they don't need.</p>
          <div className="callout red">
            <p><strong>The direct student harm:</strong> When a ZTC course isn't flagged in the schedule, students enrolled in that course are included in the Savings Plus calculation and charged accordingly. They pay for materials that should be free — because the system doesn't know the course is ZTC. The data gap is not an administrative inconvenience; it is a direct financial burden on students.</p>
          </div>
        </section>

        <section className="section">
          <h2>The Bookstore Contract Tension</h2>
          <p>Follett operates SBVC's bookstore under an outsourced contract. The team identified a structural tension: the bookstore vendor may have contractual minimum-spend provisions that create a financial disincentive for aggressive OER promotion. While the exact contract terms haven't been fully reviewed (the contract is in the board book archives), the team noted that the team determined that building independent institutional tracking was the more sustainable approach.</p>
          <p>The strategic response: build OER tracking independent of Follett, within institutional systems (CourseDog → Colleague → Informer). This ensures the college owns its own data regardless of the bookstore relationship. The Book Saver program contract expires in approximately four years, creating a future window for renegotiation.</p>
        </section>

        <section className="section">
          <h2>The Syllabus Access Challenge</h2>
          <p>Faculty syllabi — which list required materials — represent a potential data source for identifying OER usage. However, accessing syllabi for tracking purposes involves navigating established processes around faculty evaluation and contractual considerations. Division deans collect syllabi for accreditation purposes, but repurposing that access for OER tracking requires a collaborative approach that respects existing governance structures. The team identified this as an area where cross-functional coordination between instruction, library services, and faculty leadership could develop a workable protocol.</p>
        </section>

        <section className="section">
          <h2>What the Team Built</h2>
          <p>Given these constraints, the team developed a multi-track approach:</p>
          <ul>
            <li><strong>CourseDog integration</strong> — embed ZTC flagging into the scheduling workflow department chairs already use</li>
            <li><strong>Microsoft 365 survey</strong> — direct faculty self-reporting as a bridge mechanism</li>
            <li><strong>Informer/EIS pulls</strong> — institutional research extracts for baseline and trend data</li>
            <li><strong>Curriculum review integration</strong> — library staff suggesting OER during every course review and new course submission</li>
          </ul>
          <div className="callout gold">
            <p><strong>Recommendation:</strong> No single data source will be sufficient. The long-term solution requires all four tracks operating simultaneously, with CourseDog as the primary institutional record. The Chancellor's Office report, the faculty survey, and the data validation process are immediate priorities for the next phase.</p>
          </div>
        </section>
      </div>
    </>
  );
}
