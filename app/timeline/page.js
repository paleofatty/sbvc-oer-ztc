export default function Timeline() {
  const events = [
    { date:'Feb–Apr 2025', title:'Onboarding', desc:'LFM Academy II onboarding. Team formation. Leadership assessments. Initial project scoping. Elevator speech development.', status:'past' },
    { date:'May 15–17, 2025', title:'Convening I: "This is Water"', desc:'Mission Inn, Riverside. Systems and culture evaluation. Team-building. Logic model development. Stakeholder and ecosystem mapping. College journey maps. Data culture assessment.', status:'past' },
    { date:'June 2025', title:'New Member Onboarding', desc:'Department Chair and Economics Professor joins the LFM team. Canvas access established. Onboarding with team to review deliverables from Convening I.', status:'past' },
    { date:'Summer 2025', title:'Foundation Building', desc:'SharePoint setup. Data collection planning. Course inventory analysis begins. Degree pathway identification (Social Behavioral Sciences AA-T). Coordination with Crafton Hills College on methodology.', status:'past' },
    { date:'Fall 2025', title:'Implementation Push', desc:'Biweekly meetings established (1st/3rd Wednesdays, 1–3 PM). CourseDog integration discovery. Microsoft 365 Forms deployed. Three pillars framework developed. Department chair liaison meeting presentation (alongside Follett). Library OER integration in curriculum review.', status:'past' },
    { date:'Oct 2–4, 2025', title:'Convening II: "Navigating the Currents"', desc:'Kellogg West, Pomona. Engaging resistance frameworks. Conflict resolution strategies. Monroe\'s Motivated Sequence presentations. Spheres of influence. Persuasive elevator speeches. Thomas-Kilmann Conflict Mode assessment.', status:'past' },
    { date:'November 2025', title:'Data Deep Dive', desc:'EIS/Informer data pulls for ZTC baseline. Identified ~18% reporting rate. Discovered Savings Plus interaction. Bookstore data integrity concerns surfaced. Faculty survey yielded limited responses.', status:'past' },
    { date:'January 2026', title:'Team Transition', desc:'Significant loss of key team member. New co-leadership appointed by VP for Instruction. New member joins. Team begins regrouping.', status:'past' },
    { date:'February 2026', title:'Scope Containment', desc:'VP for Instruction and team leadership agree to contain scope. Deliverable reframed as lessons-learned documentation with prescribed next steps. Original 100/100/100 targets remain aspirational but realistic focus shifts to foundation-building.', status:'past' },
    { date:'Mar 19–21, 2026', title:'Convening III: "Just Keep Swimming"', desc:'Kellogg West, Pomona. Momentum mapping. Student voice. Coalition building. Risk-taking and failing successfully. Gallery walk. Consultancy. Sustainability planning begins.', status:'current' },
    { date:'Late Mar–Apr 2026', title:'Sustainability Phase', desc:'Zoom sessions facilitated by LFM coach. Lessons-learned document drafting. Deliverables finalization. Transition planning. Chancellor\'s Office report preparation.', status:'future' },
    { date:'May 8, 2026', title:'Celebration of Learning', desc:'Virtual presentation to full LFM cohort (10 AM – 1 PM). Team presents journey, findings, and recommendations.', status:'future' },
    { date:'June 2026', title:'Task Force Conclusion', desc:'Hand off documentation to VP for Instruction and successor team. Ensure institutional memory survives. Future of the task force to be determined.', status:'future' },
  ];
  return (
    <>
      <div className="page-hero">
        <div className="page-container">
          <div className="badge">2025–2026 Academy Year</div>
          <h1>Project Timeline</h1>
          <p className="subtitle">Key milestones from onboarding through sustainability — including the inflection points that changed the trajectory.</p>
        </div>
      </div>
      <div className="page-container">
        <section className="section">
          <div className="timeline">
            {events.map((e, i) => (
              <div key={i} className={"timeline-item " + e.status}>
                <div className="date">{e.date}</div>
                <h4>{e.title}</h4>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section">
          <h2>Reading the Timeline</h2>
          <p>The timeline tells two stories. The first is the planned arc of the LFM Academy — a structured progression from understanding systems to navigating resistance to sustaining momentum. The second is the real arc — where unexpected events required the team to adapt, contain scope, and redefine success.</p>
          <div className="callout gold">
            <p>The gap between the planned timeline and the actual timeline is itself a key finding. Institutional change projects need to build in resilience — not just plans for success, but plans for disruption. The honest documentation of both arcs is part of the deliverable.</p>
          </div>
        </section>
      </div>
    </>
  );
}