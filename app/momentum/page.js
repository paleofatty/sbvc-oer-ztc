export default function Momentum() {
  const items = [
    { status: 'moving', title: 'Scheduling System Integration', desc: 'Discovered that the CourseDog scheduling system already contains cost designation fields that sync with the student information system. This eliminates the need for a separate tracking process — department chairs can flag ZTC sections during normal scheduling workflows.', imp: 'Single biggest structural win. Reduces faculty burden, improves data accuracy, embeds tracking into existing processes. Replicable model for other colleges.' },
    { status: 'moving', title: 'Compliance Advocacy Framework', desc: 'Developed a "three pillars" strategy: Title 5 mandate + Vision 2030 goals + accreditation standards. Reframed OER from optional innovation to required compliance consideration. Tested in stakeholder conversations with administration — the language resonated.', imp: 'Ready for broader deployment. Transferable advocacy strategy documented for other institutions.' },
    { status: 'moving', title: 'Interim Data Collection', desc: 'Deployed Microsoft 365 Forms as a bridge data collection mechanism. Established a baseline: approximately 18% of sections currently report as ZTC. Identified significant gap between actual OER usage and reported usage.', imp: 'The 18% baseline and the reporting gap itself are key findings. The gap between what faculty actually use and what gets reported is the central data challenge.' },
    { status: 'moving', title: 'Degree Pathway Mapping', desc: 'Social Behavioral Sciences pathway identified. Course requirements and CalGETC alignment work started. Multiple course options within requirements mapped. Common course numbering initiative provides additional leverage for identifying OER-aligned materials.', imp: 'Pathway design is documented. Implementation requires scheduling commitments from department chairs — a handoff item for the next phase.' },
    { status: 'slowed', title: 'Faculty Recruitment at Scale', desc: 'Individual department champions identified, but no systematic recruitment campaign launched. Faculty engagement conversations lost momentum after team transition. Previous survey effort yielded only 12 responses, with half indicating OER wasn\'t applicable to their discipline.', imp: 'Reaching 100 faculty requires a dedicated coordinator role. Recommendation: institutionalize an OER Faculty Liaison position rather than relying on task force volunteers.' },
    { status: 'slowed', title: 'OER Resource Infrastructure', desc: 'Concept developed for a modular Canvas shell with pre-built OER resources. Library team consulted with mixed reception. Design specifications outlined but shell not yet built.', imp: 'Infrastructure gap. Design specs and library collaboration challenges documented as recommendations for the next phase.' },
    { status: 'slowed', title: 'Stakeholder Presentations', desc: 'Persuasive presentation developed using Monroe\'s Motivated Sequence framework at Convening II. Some informal conversations with governance bodies occurred. Formal presentations to Academic Senate and department chairs limited by team transition.', imp: 'The presentation deck and credible messenger strategy exist as playbook assets. Documentation includes guidance on which presenters are most effective for which audiences.' },
    { status: 'shifted', title: 'Team Composition', desc: 'The task force experienced a significant loss of a key team member in early 2026. New co-leadership was appointed by the VP for Instruction. A new member joined. The team is rebuilding shared understanding and operational capacity.', imp: 'Central reality of the project\'s current phase. Key recommendation: build redundancy into team roles and document institutional knowledge continuously, not at the end.' },
    { status: 'shifted', title: 'Project Scope', desc: 'Original scope adjusted through agreement between VP for Instruction and team leadership. Current focus: document lessons learned, map institutional barriers, and create prescribed next steps. Task force likely concludes June 2026; continuation uncertain.', imp: 'The scope adjustment itself is a lesson in institutional leadership — acknowledging real constraints rather than performing unattainable ambition.' },
    { status: 'shifted', title: 'Campus Reorganization', desc: 'Campus undergoing leadership transitions and structural reorganization. Decision-making processes, stakeholder relationships, and institutional priorities in flux. Impact on the project is both a barrier and an opportunity.', imp: 'External factor beyond team control. New leadership structures may create openings for institutionalizing OER work if positioned as a visible, early win.' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">As of March 2026</div>
          <h1>Momentum Map</h1>
          <p className="subtitle">An honest assessment of what moved, what slowed, and what shifted — and what each means for the next phase of this work.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <p>A momentum map differs from a logic model. The logic model shows the plan. The momentum map shows the truth — where the project actually stands, what forces are at work, and what the realistic path forward looks like.</p>

          <h3 style={{marginTop: '32px', marginBottom: '8px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap'}}>
            <span className="status-badge moving">Moving</span>
            <span className="status-badge slowed">Slowed</span>
            <span className="status-badge shifted">Shifted</span>
          </h3>

          <div className="momentum-grid">
            {items.map((item, i) => (
              <div key={i} className="momentum-item">
                <div className={`bar ${item.status}`} />
                <div className="content">
                  <h4>
                    {item.title}
                    <span className={`status-badge ${item.status}`}>
                      {item.status === 'moving' ? 'Moving' : item.status === 'slowed' ? 'Slowed' : 'Shifted'}
                    </span>
                  </h4>
                  <p>{item.desc}</p>
                  <div className="implication">→ {item.imp}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>The Pattern</h2>
          <div className="callout gold">
            <p>A recurring pattern emerged across the project: <strong>strong discussion, weak follow-through on action items.</strong> Accountability mechanisms and clear ownership assignments — not more meetings — are what the next phase needs to build differently.</p>
          </div>
        </section>
      </div>
    </>
  );
}
