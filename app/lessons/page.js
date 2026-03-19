export default function Lessons() {
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">Key Findings</div>
          <h1>Lessons Learned &amp; Recommendations</h1>
          <p className="subtitle">What we learned, what we recommend, and what the next team — or this team in its next form — needs to know.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <h2>What the Team Discovered About Execution</h2>
          <div className="findings-grid">
            <div className="finding-card">
              <h4>Strong Discussion, Weak Actionization</h4>
              <p>The most persistent pattern: rich strategic analysis that outpaced the team's structural capacity to convert insights into completed actions. Not a motivation or commitment problem — a structural one. Volunteer task forces without formal authority, dedicated staff, or built-in accountability mechanisms will reproduce this pattern. Design for it.</p>
            </div>
            <div className="finding-card">
              <h4>Institutional Knowledge Continuity</h4>
              <p>The team developed deep expertise — a testament to the commitment of its members. That depth also revealed an institutional vulnerability: when key contributors are unavailable, operational capacity and institutional memory are affected. This reinforces the importance of continuous documentation and shared knowledge across team members — a practice the team is now modeling through this very documentation effort.</p>
            </div>
            <div className="finding-card">
              <h4>Adoption Is Human, Not Technical</h4>
              <p>Faculty broadly support the principle of affordable materials. Where adoption slows, it's because switching costs are real, incentives are unclear, and social dynamics within departments reinforce the status quo. The technical infrastructure (Canvas shells, OER repositories) matters — but only after the human problem is addressed.</p>
            </div>
            <div className="finding-card">
              <h4>Embed, Don't Add</h4>
              <p>Every time the team created a separate process (standalone surveys, additional forms, new reporting requirements), uptake was limited. Every time they embedded tracking into an existing workflow (CourseDog scheduling, curriculum review), engagement improved. The lesson: integration beats invention.</p>
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
            <li><strong>Shared governance charge reviews</strong> — Academic Senate is reviewing all committee charges across campus, which affects how OER/ZTC gets formally integrated into governance structures. Depending on whether committees define their charges broadly or narrowly, the task force's ability to insert OER/ZTC into existing institutional processes will vary significantly.</li>
            <li><strong>Critical mass gap</strong> — The system-level coalition (Chancellor's Office, grants, Title 5) exists, but campus-level critical mass for implementation does not. Structural supports without grassroots faculty momentum produces guidelines without adoption. The cohort model is designed to address this by building momentum discipline by discipline.</li>
            <li><strong>OER accessibility concerns</strong> — Faculty at multiple colleges are citing ADA accessibility gaps in OER materials as a reason to return to commercial textbooks. This emerging barrier requires proactive attention before it becomes a widespread justification for inaction.</li>
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
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Institutionalize the OER Office Structure</h4><p>The work cannot sustain on volunteer task force energy. At Convening III, the team developed a concrete structural recommendation: a dedicated OER/ZTC director position (separate from Distance Education), an OER librarian role with maintained reference desk duties, and an instructional design component. OER should not simply be added to existing librarians' workloads — it requires dedicated staffing with clear authority. Job descriptions from peer institutions (including Irvine Valley College) have been collected as reference models.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Formalize the CourseDog Protocol</h4><p>The scheduling integration is the most ready-to-implement win. Create a formal SOP: department chairs flag ZTC sections during scheduling, the data flows to Colleague and the student-facing schedule, and institutional research pulls the data through Informer for reporting. Train all chairs during the next CourseDog training cycle.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Separate ZTC Goals from OER Goals</h4><p>ZTC (no cost to students) and OER (openly licensed, remixable materials) require different strategies and different levels of faculty development. A course using a free commercial e-textbook is ZTC but not OER. A course using LibreTexts is both. Separating the goals reduces confusion and creates more achievable milestones.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Adopt First, Author Later</h4><p>Prioritize faculty adopting existing OER materials over creating new ones. Authoring platforms (LibreTexts, Canvas) are valuable but require significant faculty time. Adoption — especially for courses where state-level common course numbering has identified recommended OER — is the faster path to scale.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Embed OER/ZTC into Program Review</h4><p>Add OER/ZTC questions to existing program review documents — a process every department already completes. Simple data-gathering questions create accountability without separate reporting burden. This approach was discussed at Convening III with program review leadership and received positively.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Implement Cohort-Based Faculty Adoption</h4><p>Rather than an open call for 100 faculty, target degree pathway disciplines in cohorts of approximately 10 faculty per semester with defined support resources. Start with priority disciplines aligned to the ZTC degree pathway, then expand as capacity allows. This approach is operationally sustainable and produces deeper adoption than broad recruitment.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Secure Institutional Funding</h4><p>The initiative cannot continue to rely on short-term grants — the result is spurts of energy without sustainability. Equity funding should be pursued as a permanent funding source. As the team articulated at Convening III: "Your budget tells you where your priorities are." Funding represents institutional commitment.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Build Student Voice Data</h4><p>The project has strong demographic data and institutional metrics, but limited student narrative data. The next phase should include structured student feedback on how textbook costs affect their enrollment decisions, course selection, and completion. This data is essential for persuasive advocacy.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Address OER Accessibility Proactively</h4><p>Accessibility (ADA compliance) is emerging as a new barrier to OER adoption at colleges statewide. Some faculty are retreating to commercial textbooks citing accessibility concerns. The next phase should include accessibility review as part of OER vetting and adopt the position that accessibility is an ongoing improvement process — not a binary pass/fail — for all instructional materials.</p></div></div>
            <div className="momentum-item"><div className="bar moving" /><div className="content"><h4>Design for Accountability</h4><p>Every action item needs a named owner, a specific deadline, and a check-in mechanism. Consider: biweekly written progress updates (not just meeting discussions), a shared task tracker, and explicit "who does what by when" documentation after every meeting.</p></div></div>
          </div>
        </section>
      </div>
    </>
  );
}