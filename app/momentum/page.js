export default function Momentum() {
  const items = [
    { status:'moving', title:'Scheduling System Integration (CourseDog)', desc:'Discovered that CourseDog scheduling system already contains cost designation fields that sync with Colleague (student information system) via Informer reporting. Department chairs can flag ZTC sections during normal scheduling — no separate process needed. Initially validated with the Social Behavioral Sciences division, then tested across all divisions to confirm the workflow is replicable campus-wide. SBS has been particularly responsive with reporting.', imp:'Single biggest structural win. Reduces faculty burden, improves data accuracy, embeds tracking into existing workflows. Documented as a replicable SOP for other colleges.' },
    { status:'moving', title:'Compliance Advocacy Framework (Three Pillars)', desc:'Developed a three-pronged advocacy strategy: Title 5 mandate + Chancellor\'s Vision 2030 + accreditation standards. Tested in stakeholder conversations — the compliance framing shifted conversations from "should we?" to "how do we comply?" Faculty who resisted OER as ideology engaged with it as regulatory requirement.', imp:'Ready for broader deployment. The framing is transferable to any California community college. See the Framework page for full details.' },
    { status:'moving', title:'Degree Pathway Mapping', desc:'<a href="https://catalog.valleycollege.edu/degree-certificate-program-index/liberal-arts/social-behavioral-sciences/" target="_blank" rel="noopener noreferrer">Social Behavioral Sciences Liberal Arts (AA-T)</a> identified as pilot pathway — the college\'s second most popular degree. Course requirements mapped against CalGETC alignment. Multiple course options within each requirement identified (e.g., 10 options, 5 potentially ZTC-enabled). Common course numbering initiative provides additional leverage: state-level course descriptions now include recommended OER resources.', imp:'Pathway design is documented. Implementation requires scheduling commitments from department chairs — a handoff item. The backwards-mapping approach (start from degree requirements, work to course sections) is the recommended methodology.' },
    { status:'moving', title:'Interim Data Collection', desc:'Microsoft 365 Forms deployed for Spring 2025 data collection as a bridge while CourseDog integration is formalized. Established baseline: approximately 18% of sections currently report as ZTC. Social Behavioral Sciences division leading in response rates. Identified significant gap between actual OER usage and system-reported usage.', imp:'18% baseline is a starting metric, but likely an undercount. The gap between what faculty actually use and what gets reported is itself a critical finding.' },
    { status:'moving', title:'Curriculum & Library Integration', desc:'Library staff proactively suggests OER/ZTC options during every course review and new course submission. The library has also built infrastructure for students and faculty to locate and access OER materials — including cataloging OER titles, setting up course reserves for open materials, and offering print-on-demand service for electronic resources. Common course numbering work at the state level is beginning to include recommended OER materials for aligned courses. Both create systemic entry points that don\'t depend on individual faculty initiative.', imp:'These are "quiet infrastructure" wins — structural changes that make OER adoption the path of least resistance rather than an extra step.' },
    { status:'slowed', title:'Faculty Recruitment at Scale', desc:'Individual department champions identified. An initial faculty interest survey received 12 responses — a finding in itself — with half indicating OER wasn\'t applicable to their discipline (particularly STEM and vocational programs where equipment costs, not textbook costs, are the barrier). The team prioritized infrastructure and data systems before launching a broader recruitment effort — then the team transition intervened.', imp:'Reaching 100 faculty requires a dedicated coordinator. Key distinction discovered: ZTC (zero textbook cost) is achievable in many courses, but true OER (open educational resources with remix/reuse rights) requires more faculty development. Recommend separating the goals.' },
    { status:'slowed', title:'Canvas Resource Hub', desc:'Concept developed: modular Canvas shell with pre-built OER resources faculty can adopt or customize. An existing model was identified — a state-level Canvas shell containing pre-vetted, drag-and-drop OER offerings curated through the Chancellor\'s Office — which serves as a proven template for the local implementation. Library team consulted and raised thoughtful questions about staffing, sustainability, and long-term organizational placement. Design specifications outlined but shell not yet built.', imp:'Infrastructure gap. Two competing approaches identified: (1) LibreTexts for formal textbook creation, (2) Canvas shells for modular course-level resources. Team consensus: focus on adoption first, authoring later. "Crawl before you walk."' },
    { status:'slowed', title:'Stakeholder Presentations', desc:'Monroe\'s Motivated Sequence presentation developed at Convening II. Presented to the department chair meeting alongside Follett (bookstore vendor). Department chairs received the data collection rationale well. Formal presentations to Academic Senate and president\'s cabinet limited by team transition and campus reorganization.', imp:'Presentation deck and credible messenger strategy exist as playbook assets. Key learning: presenting after the bookstore vendor was actually advantageous — it demonstrated that internal tracking goes beyond what Follett provides.' },
    { status:'slowed', title:'Bookstore/Follett Alignment', desc:'Follett (outsourced bookstore vendor) operates on a contract with potential minimum-spend provisions. Follett\'s "free" button in the course lookup creates student confusion. Follett data is difficult to access, hard to decipher, and the vendor has limited motivation to support OER visibility. Book Saver/Savings Plus program interactions create additional complexity.', imp:'The bookstore contract is a systemic constraint. OER tracking must be independent of Follett to be reliable. CourseDog integration directly addresses this by keeping data within institutional systems.' },
    { status:'shifted', title:'Team Composition & Leadership', desc:'The task force experienced a significant loss of a key team member in early 2026 — the curriculum specialist who served as the primary operational driver. New co-leadership appointed by VP for Instruction. A new member joined. The team is rebuilding shared understanding and capacity.', imp:'Central reality of the project. Key recommendation: build redundancy into team roles, document institutional knowledge continuously (not at the end), and ensure more than one person understands each part of the work.' },
    { status:'shifted', title:'Project Scope & Deliverable', desc:'Original 100/100/100 targets adjusted through agreement between VP for Instruction and team leadership. Current focus: document lessons learned, map institutional barriers, and create prescribed next steps. Deliverable reframed as a sustainability and transition document.', imp:'The scope adjustment demonstrates institutional leadership under adversity — acknowledging real constraints rather than performing unattainable ambition.' },
    { status:'shifted', title:'Campus Reorganization', desc:'Campus undergoing leadership transitions and structural reorganization. The OER "box" exists on the new org chart but is undefined — presenting both risk (could be marginalized) and opportunity (could be positioned strategically). Impact on governance, stakeholder relationships, and institutional priorities still unfolding.', imp:'Position the OER initiative not as competing with the reorg for attention, but as demonstrating institutional capacity for productive change during transition. New leadership needs visible wins; a well-documented OER initiative offers that.' },
  ];
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">As of March 2026</div>
          <h1>Momentum Map</h1>
          <p className="subtitle">An honest assessment of what moved, what slowed, and what shifted — and what each means for the work ahead.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <p>A momentum map differs from a logic model. The logic model shows the plan. The momentum map shows the truth — where the project actually stands, what forces are at work, and what the realistic path forward looks like.</p>
          <h3 style={{marginTop:'32px',marginBottom:'8px',display:'flex',gap:'16px',alignItems:'center',flexWrap:'wrap'}}>
            <span className="status-badge moving">Moving</span>
            <span className="status-badge slowed">Slowed</span>
            <span className="status-badge shifted">Shifted</span>
          </h3>
          <div className="momentum-grid">
            {items.map((item, i) => (
              <div key={i} className="momentum-item">
                <div className={"bar " + item.status} />
                <div className="content">
                  <h4>{item.title}<span className={"status-badge " + item.status}>{item.status === 'moving' ? 'Moving' : item.status === 'slowed' ? 'Slowed' : 'Shifted'}</span></h4>
                  <p dangerouslySetInnerHTML={{__html: item.desc}} />
                  <div className="implication">→ {item.imp}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="section">
          <h2>The Execution Pattern</h2>
          <div className="callout gold">
            <p>A recurring pattern emerged across the project: <strong>rich strategic thinking that outpaced the team&#x27;s structural capacity to execute.</strong> The team generated rich analysis and strategic thinking in meetings, but the gap between analysis and execution reflected structural constraints — not effort or commitment — particularly without formal authority, dedicated staff, or clear accountability mechanisms. This is not unique to SBVC; it is a structural feature of volunteer task forces operating in bureaucratic institutions. The takeaway for future initiatives: design the accountability structure before launching the work — with named owners, specific deadlines, and accountability check-ins built into every action item.</p>
          </div>
        </section>
      </div>
    </>
  );
}
