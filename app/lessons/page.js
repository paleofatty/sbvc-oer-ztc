export default function Lessons() {
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">Key Findings</div>
          <h1>Lessons Learned &amp; Recommendations</h1>
          <p className="subtitle">What worked, what didn't, and what the next team — or this team in its next form — needs to know.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <h2>Execution Patterns</h2>
          <div className="findings-grid">
            <div className="finding-card">
              <h4>Strong Discussion, Weak Actionization</h4>
              <p>The most persistent pattern: rich strategic analysis in meetings that didn't convert to completed action items. Not a motivation problem — a structural one. Volunteer task forces without formal authority, dedicated staff, or built-in accountability mechanisms will reproduce this pattern. Design for it.</p>
            </div>
            <div className="finding-card">
              <h4>Knowledge Concentration Risk</h4>
              <p>Deep expertise and institutional knowledge were concentrated in one team member. When that person was no longer available, operational capacity and institutional memory were significantly impacted. Future initiatives must build redundancy into roles and document continuously.</p>
            </div>
            <div className="finding-card">
              <h4>Adoption Is Human, Not Technical</h4>
              <p>Faculty don't resist OER because they disagree with the concept. They resist because switching costs are real, incentives are unclear, and social dynamics within departments reinforce the status quo. The technical infrastructure (Canvas shells, OER repositories) matters — but only after the human problem is addressed.</p>
            </div>
            <div className="finding-card">
              <h4>Embed, Don't Add</h4>
              <p>Every time the team created a separate process (standalone surveys, additional forms, new reporting requirements), participation was low. Every time they embedded tracking into an existing workflow (CourseDog scheduling, curriculum review), engagement improved. The lesson: integration beats invention.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Institutional Barriers Documented</h2>
          <ul>
            <li><strong>Fragmented data systems</strong> — CourseDog, Colleague, Informer, and Follett don't communicate reliably. No single source of truth for OER adoption exists.</li>
            <li><strong>Bookstore contract structure</strong> — Follett's outsourced contract may include minimum-spend provisions that create misaligned incentives. The Book Saver program adds another layer of complexity.</li>
            <li><strong>Union/labor considerations</strong> — Syllabus review for OER tracking can be perceived as faculty evaluation. Navigating labor relations adds process overhead.</li>
            <li><strong>50/50 in-person/online requirement</strong> — Union contract provisions affect the feasibility of a fully online ZTC degree pathway.</li>
            <li><strong>Undefined organizational placement</strong> — The "OER" function exists on the org chart but lacks clear definition, authority, and staffing. The team advocates for OER as its own entity (not a library sub-function) with direct reporting access to instructional leadership.</li>
            <li><strong>Campus reorganization</strong> — Leadership turnover and structural changes disrupted established stakeholder relationships and created uncertainty about institutional priorities.</li>
            <li><strong>ZTC vs. OER distinction</strong> — Faculty conflate "zero textbook cost" with "open educational resources." They're related but different. ZTC is achievable in many courses; true OER (with remix/reuse rights) requires more development. Separating the goals would reduce confusion.</li>
          </ul>
        </section>

        <section className="section">
          <h2>What LFM Provided</h2>
          <p>The Leading from the Middle Academy served as more than professional development. It functioned as:</p>
          <ul>
            <li><strong>Accountability cadence</strong> — Convenings created external deadlines and structured check-ins that kept the project moving when internal momentum flagged.</li>
            <li><strong>Political cover</strong> — LFM provided institutional legitimacy for middle leaders to act on cross-institutional initiatives without formal authority. "We're part of an RP Group academy" opened doors that "we have an idea" did not.</li>
            <li><strong>Frameworks for resistance</strong> — Tools like Monroe's Motivated Sequence, stakeholder mapping, and systems change frameworks gave the team structured approaches to what would otherwise be ad hoc relationship management.</li>
            <li><strong>Peer network</strong> — Cross-college connections (including coordination with Crafton Hills College on methodology comparisons) provided benchmarking and moral support.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Recommendations for the Next Phase</h2>
          <div className="momentum-grid">
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Institutionalize the OER Coordinator Role</h4><p>The work cannot sustain on volunteer task force energy. A dedicated position — whether within the library, instruction office, or as a standalone role — is essential. The position should have clear authority over data collection, faculty outreach, and infrastructure development.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Formalize the CourseDog Protocol</h4><p>The scheduling integration is the most ready-to-implement win. Create a formal SOP: department chairs flag ZTC sections during scheduling, the data flows to Colleague and the student-facing schedule, and institutional research pulls the data through Informer for reporting. Train all chairs during the next CourseDog training cycle.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Separate ZTC Goals from OER Goals</h4><p>ZTC (no cost to students) and OER (openly licensed, remixable materials) require different strategies and different levels of faculty development. A course using a free commercial e-textbook is ZTC but not OER. A course using LibreTexts is both. Separating the goals reduces confusion and creates more achievable milestones.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Adopt First, Author Later</h4><p>Prioritize faculty adopting existing OER materials over creating new ones. Authoring platforms (LibreTexts, Canvas) are valuable but require significant faculty time. Adoption — especially for courses where state-level common course numbering has identified recommended OER — is the faster path to scale.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Build Student Voice Data</h4><p>The project has strong demographic data and institutional metrics, but limited student narrative data. The next phase should include structured student feedback on how textbook costs affect their enrollment decisions, course selection, and completion. This data is essential for persuasive advocacy.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Design for Accountability</h4><p>Every action item needs a named owner, a specific deadline, and a check-in mechanism. The "strong discussion, weak actionization" pattern will repeat unless the structure changes. Consider: biweekly written progress updates (not just meeting discussions), a shared task tracker, and explicit "who does what by when" documentation after every meeting.</p></div></div>
          </div>
        </section>
      </div>
    </>
  );
}