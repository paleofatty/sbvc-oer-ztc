export default function Timeline() {
  const events = [
    { date: 'Feb–Apr 2025', title: 'Onboarding', desc: 'LFM Academy II onboarding. Team formation. Leadership self-assessments and initial project scoping.', status: 'past' },
    { date: 'May 15–17, 2025', title: 'Convening I: "This is Water"', desc: 'Evaluating systems and cultures. Team-building. Logic model development. Stakeholder and ecosystem mapping. Journey maps created.', status: 'past' },
    { date: 'Summer 2025', title: 'Foundation Building', desc: 'Data collection planning. SharePoint setup. Course inventory analysis. Degree pathway identification. Faculty interest gauging.', status: 'past' },
    { date: 'Oct 2–4, 2025', title: 'Convening II: "Navigating the Currents"', desc: 'Engaging resistance. Conflict resolution strategies. Monroe\'s Motivated Sequence presentations. Spheres of influence mapping. Persuasive elevator speeches.', status: 'past' },
    { date: 'Fall 2025', title: 'Implementation Push', desc: 'Regular biweekly meetings (1st/3rd Wednesdays). CourseDog integration discovery. Microsoft 365 Forms deployed for data collection. Three pillars framework developed and tested.', status: 'past' },
    { date: 'January 2026', title: 'Team Transition', desc: 'Significant team disruption. New co-leadership appointed by VP for Instruction. Scope reassessment initiated.', status: 'past' },
    { date: 'February 2026', title: 'Scope Containment', desc: 'Agreement reached to contain project scope. Deliverable reframed as lessons-learned documentation with prescribed next steps. Focus shifts from hitting original targets to building sustainable foundation.', status: 'past' },
    { date: 'Mar 19–21, 2026', title: 'Convening III: "Just Keep Swimming"', desc: 'Momentum mapping. Student voice. Coalition building. Risk and failing successfully. Gallery walk. Consultancy feedback. Sustainability planning begins.', status: 'current' },
    { date: 'Late Mar–Apr 2026', title: 'Sustainability Phase', desc: 'Zoom sessions facilitated by LFM coach. Lessons-learned document drafting. Deliverables finalization. Transition planning.', status: 'future' },
    { date: 'May 8, 2026', title: 'Celebration of Learning', desc: 'Virtual presentation to full LFM cohort (10 AM – 1 PM). Team presents journey, findings, and recommendations.', status: 'future' },
    { date: 'June 2026', title: 'Task Force Conclusion', desc: 'Hand off documentation to VP for Instruction and successor team. Ensure institutional memory survives the transition. Future of the task force to be determined.', status: 'future' },
  ];

  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">2025–2026 Academy Year</div>
          <h1>Project Timeline</h1>
          <p className="subtitle">Key milestones from onboarding through sustainability — including the inflection points that changed the project&rsquo;s trajectory.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <div className="timeline">
            {events.map((e, i) => (
              <div key={i} className={`timeline-item ${e.status}`}>
                <div className="date">{e.date}</div>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <h2>Reading the Timeline</h2>
          <p>
            The timeline tells two stories. The first is the planned arc of the LFM Academy — a structured progression from understanding systems to navigating resistance to sustaining momentum. The second is the real arc of the project — where unexpected events required the team to adapt, contain scope, and redefine what success looks like.
          </p>
          <div className="callout gold">
            <p>The gap between the planned timeline and the actual timeline is itself a key finding. Institutional change projects need to build in resilience — not just plans for success, but plans for disruption. The team&rsquo;s honest documentation of both arcs is part of the deliverable.</p>
          </div>
        </section>
      </div>
    </>
  );
}
