export const projects = [
  {
    id: 'nova', year: 2026, date: '2026-06-19', title: 'NOVA', type: 'Project Management', role: 'Project Manager',
    short: 'A leadership candidate program shaped through strategy, coordination, and regional execution.',
    tags: ['Leadership', 'Strategy', 'Operations'], featured: true, size: 'large',
    image: '/projects/nova/cover.svg',
    fallback: 'nova',
    intro: 'NOVA is the 2026 Bakal Calon Ketua Umum program at HIMSISFO, bringing together strategic planning, cross-functional workstreams, and regional execution.',
    sections: [
      ['The Project', 'A leadership program designed around candidate preparation, communication, stakeholder coordination, and execution across multiple regions.'],
      ['My Role', 'Project Manager responsible for translating the program direction into timelines, workstreams, operational requirements, and coordinated execution.'],
      ['How I Worked', 'Anticipate → Structure → Explore → Decide → Build → Improve.'],
    ]
  },
  {
    id: 'lunar', year: 2026, date: '2026-06-14', title: 'LDKCP — LUNAR', type: 'Project Management', role: 'Project Manager',
    short: 'A leadership development program built around planning, coordination, participant experience, and execution.', tags: ['Project Management', 'Leadership', 'Event Strategy'], featured: true, size: 'wide',
    image: '/projects/lunar/cover.svg', fallback: 'lunar',
    intro: 'LDKCP LUNAR is a leadership development program for prospective HIMSISFO management members.',
    sections: [['The Challenge', 'Turning a leadership program into a coherent participant experience while coordinating multiple divisions and operational needs.'], ['My Role', 'Project Manager leading planning and execution across four divisions, including timelines, task allocation, coordination, and operational problem solving.'], ['Outcome', 'A structured program with a clear visual identity, execution framework, and participant-facing communication.']]
  },
  {
    id: 'financial-literacy', year: 2026, date: '2026-09-01', title: 'Financial Literacy UX', type: 'Product & UX', role: 'Product / UX Concept',
    short: 'Making invisible financial consequences visible at the moment a spending decision happens.', tags: ['UX', 'Product', 'Behavior'], featured: true, size: 'tall',
    image: '/projects/financial-literacy/cover.svg', fallback: 'finance',
    intro: 'A financial literacy product concept focused on the psychological gap between knowing how to manage money and actually making healthier decisions.',
    sections: [['The Problem', 'Users can understand financial advice yet still make impulsive decisions. The concept focuses on intervening at the decision moment.'], ['The Idea', 'Translate an invisible future consequence into a visible present trade-off, such as turning a monthly commitment into its total commitment.'], ['Experience', 'Adaptive nudges, spending reflection, personalization, progress tracking, and friction are combined into a behavior-oriented experience.']]
  },
  {
    id: 'business-case', year: 2026, date: '2026-03-01', title: 'Business Case Competition', type: 'Business Analysis', role: 'Case Team',
    short: 'Turning a business problem into a structured recommendation while building the proposal in parallel.', tags: ['Business Analysis', 'Strategy', 'Case Competition'], featured: true, size: 'small',
    image: '/projects/business-case/cover.svg', fallback: 'case',
    intro: 'A competition project where ideation, analysis, proposal development, and execution happened together rather than as isolated stages.',
    sections: [['Approach', 'Start with the problem, structure the issue, generate alternatives, challenge assumptions, and translate the selected direction into a recommendation.'], ['What It Shows', 'Creative ideation and systems thinking working together under time constraints.']]
  },
  {
    id: 'ezym', year: 2026, date: '2026-09-10', title: 'EZYM Experience', type: 'Product & UX', role: 'UX / Product Analysis',
    short: 'Exploring personalization, recommendations, community, and loyalty in a traveler eSIM experience.', tags: ['UX', 'Product', 'Personalization'], featured: false, size: 'medium',
    image: '/projects/ezym/cover.svg', fallback: 'ezym',
    intro: 'An exploration of how an eSIM product can extend beyond connectivity into personalization and traveler experience.',
    sections: [['Exploration', 'Personalized recommendations, AI integration, traveler community, loyalty points, and marketplace partnerships.']]
  }
];
export const featuredProjects = [...projects].filter(p=>p.featured).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,4);
export const allProjects = [...projects].sort((a,b)=>b.date.localeCompare(a.date));
export const getProject = id => projects.find(p=>p.id===id);
