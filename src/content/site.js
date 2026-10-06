// Content is controlled here. Replace placeholders with your real information before publishing.
export const site = {
  person: {
    name: 'Shashank',
    field: 'Music Production / Audio Engineering',
    degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
    university: 'Engineering Graduate',
    graduation: '2024',
    location: 'India',
    tagline: 'I shape sonic experiences, craft mixes, and turn musical ideas into immersive, emotionally resonant listening.',
    introduction: 'I am a music producer and audio-focused creative with a B.Tech in Electronics & Communication Engineering, where I developed a strong foundation in signal flow, electronic systems, communication principles, and problem-solving. That technical background shaped how I listen, mix, and design sound with precision and clarity. I now combine engineering thinking with musical instinct to create immersive, emotionally resonant productions that feel both technically disciplined and artistically expressive.',
    photo: {
      src: '/portrait.jpeg',
      alt: 'Shashank portrait',
      focus: [0.52, 0.38]
    }
  },
  application: {
    university: 'Graduate music production programs',
    program: 'Master\'s in Music Production / Sound Design',
    country: 'Open to international study opportunities',
    focus: ['Production practice', 'Mixing & mastering', 'Spatial audio', 'Sound design'],
    faculty: ['Audio engineering', 'Creative production', 'Music technology'],
    fitStatement: 'I am seeking a Master\'s program that combines artistic practice, technical rigor, and research-led exploration in contemporary music production and audio engineering. My B.Tech in ECE gave me a structured understanding of signal processing, electronics, and analytical problem-solving, while my deep interest in sound and production led me toward music technology, mixing, and immersive audio. I want to build on both sides of my background to contribute meaningfully to a creative, research-driven music program.'
  },
  links: {
    email: 'mailto:shashank.music@example.com',
    cv: null
  },
  facts: [
    { label: 'Degree', value: 'B.Tech ECE' },
    { label: 'Focus', value: 'Mix / Master' },
    { label: 'Audio set', value: '4 WAV studies' },
    { label: 'Goal', value: 'Music Masters' }
  ],
  interests: [
    {
      id: 'interest-01',
      title: 'Music Production',
      description: 'How do arrangement, dynamics, and tonal balance shape emotional impact in recorded music?',
      tags: ['Mixing', 'Production', 'Arrangement']
    },
    {
      id: 'interest-02',
      title: 'Sound Design',
      description: 'How can timbre, texture, and spatial movement transform a listener\'s perception of a scene or performance?',
      tags: ['Synthesis', 'Texture', 'Spatiality']
    },
    {
      id: 'interest-03',
      title: 'Immersive Audio',
      description: 'How do depth, width, and movement influence listening in stereo, surround, and object-based spaces?',
      tags: ['Spatial Audio', 'Ambience', 'Mixing']
    },
    {
      id: 'interest-04',
      title: 'Audio Engineering',
      description: 'How can technical decisions support clarity, musicality, and expressive intent without compromising artistic direction?',
      tags: ['Mastering', 'Signal Flow', 'Processing']
    }
  ],
  audioTracks: [
    {
      id: 'bonam-before-mix',
      title: 'Bonam before mix',
      src: '/audio/bonam-before-mix.wav',
      description: 'Reference session before tonal correction and balance shaping.',
      tags: ['Raw mix', 'Pre-processing']
    },
    {
      id: 'bonam-after-mix',
      title: 'Bonam after mix',
      src: '/audio/bonam-after-mix.wav',
      description: 'Edited and balanced version with clearer dynamic structure and articulation.',
      tags: ['Polished mix', 'Balance']
    },
    {
      id: 'pan-estam-am',
      title: 'PaN Estam AM',
      src: '/audio/pan-estam-am.wav',
      description: 'An alternate mix reference focused on tonal character and stereo detail.',
      tags: ['Alternative balance', 'Stereo imaging']
    },
    {
      id: 'pan-estam-bm',
      title: 'PaN EstamBM',
      src: '/audio/pan-estam-bm.wav',
      description: 'A second listening pass exploring motion, texture, and final polish.',
      tags: ['Final pass', 'Mastering reference']
    }
  ],
  researchStages: [
    { number: '01', title: 'Listen', description: 'Identify the emotional core, tonal identity, and musical intention behind the work.', tags: ['Listening', 'Intent'] },
    { number: '02', title: 'Study', description: 'Analyse references, arrangement, and sonic detail across production traditions and genres.', tags: ['Reference', 'Theory'] },
    { number: '03', title: 'Record', description: 'Shape the performance and capture textures, room tone, and artistic nuance.', tags: ['Tracking', 'Performance'] },
    { number: '04', title: 'Mix', description: 'Balance energy, clarity, and emotion through signal processing and arrangement decisions.', tags: ['Balance', 'Processing'] },
    { number: '05', title: 'Master', description: 'Refine the final sonic arc for clarity, loudness, and emotional consistency.', tags: ['Mastering', 'Polish'] },
    { number: '06', title: 'Research', description: 'Develop new questions around sonic identity, immersive listening, and musical expression.', tags: ['Direction', 'Innovation'] }
  ],
  projects: [
    {
      id: 'project-01',
      title: 'Bonam',
      year: '2025',
      domain: 'Before / After Mix Study',
      problem: 'Preserve emotional clarity while identifying tonal imbalance, harshness, and muddy low-end in the raw mix.',
      approach: 'Session analysis, EQ shaping, dynamic control, and tonal balancing to restore clarity without losing expression.',
      result: 'Created a more transparent and impactful reference for further production decisions.',
      description: 'A raw reference mix used to evaluate the material before the final balancing pass.',
      technologies: ['DAW', 'EQ', 'Compression', 'Dynamic control'],
      image: null,
      github: null,
      paper: null,
      demo: null
    },
    {
      id: 'project-02',
      title: 'PaN Estam',
      year: '2025',
      domain: 'Alternate Mix / Stereo Design',
      problem: 'Explore the balance between ambience, detail, and tone in a more experimental listening field.',
      approach: 'Experimentation with tonal sculpting, spatial cues, and dynamic routing to create a distinctive sonic identity.',
      result: 'Built a distinct alternate mix with a more immersive and atmospheric balance.',
      description: 'An alternate mix pass designed to investigate how sonic space and texture alter perception.',
      technologies: ['Spatial mix', 'Sound design', 'Ambience', 'Production'],
      image: null,
      github: null,
      paper: null,
      demo: null
    },
    {
      id: 'project-03',
      title: 'Our Way',
      year: '2025',
      domain: 'Arrangement / Performance',
      problem: 'Keep the emotional arc intact while polishing the arrangement and performance detail.',
      approach: 'Focused arrangement decisions, texture layering, and performance-driven balancing for a stronger narrative flow.',
      result: 'Produced a more convincing and coherent composition with better emotional pacing.',
      description: 'A performance-led production study focused on arrangement and emotional direction.',
      technologies: ['Arrangement', 'Performance', 'Mixing', 'Detail'],
      image: null,
      github: null,
      paper: null,
      demo: null
    },
    {
      id: 'project-04',
      title: 'Bawarchi',
      year: '2025',
      domain: 'Sound Character / Texture',
      problem: 'Shape a distinct tonal identity that feels contemporary while preserving musical warmth and intimacy.',
      approach: 'Layered textures, selective saturation, and controlled dynamic shaping to produce a richer listening identity.',
      result: 'Built a more memorable sonic character with greater depth and personality.',
      description: 'A texture-driven production study focused on character, timbre, and musical warmth.',
      technologies: ['Texture', 'Saturation', 'Character', 'Mix'],
      image: null,
      github: null,
      paper: null,
      demo: null
    },
    {
      id: 'project-05',
      title: 'Ye Gully',
      year: '2025',
      domain: 'Rhythmic Production',
      problem: 'Ensure rhythm, motion, and tonal clarity all support the song’s energy without losing musical nuance.',
      approach: 'Reworked rhythm cues, arrangement emphasis, and sonic focus to improve energy and movement.',
      result: 'Created a more focused and vibrant rhythmic interpretation with stronger musical momentum.',
      description: 'A rhythm-led production pass emphasizing movement, groove, and musical clarity.',
      technologies: ['Rhythm', 'Groove', 'Arrangement', 'Mix'],
      image: null,
      github: null,
      paper: null,
      demo: null
    },
    {
      id: 'project-06',
      title: 'Visarjan',
      year: '2025',
      domain: 'Final Mastering Pass',
      problem: 'Prepare a polished final mix that retains artistic intent while adding clarity, consistency, and lift.',
      approach: 'Final tonal balancing, controlled limiting, and refined dynamic preservation for final presentation.',
      result: 'Refined the final listening experience for clarity, impact, and emotional continuity.',
      description: 'A final mastering and polishing pass designed for a more complete and confident presentation.',
      technologies: ['Mastering', 'Dynamic range', 'Final polish', 'Listening'],
      image: null,
      github: null,
      paper: null,
      demo: null
    }
  ],
  education: [
    {
      degree: 'B.Tech in Electronics & Communication Engineering (ECE)',
      university: 'Engineering Institute',
      location: 'India',
      dates: '2020 — 2024',
      gpa: 'Qualified degree',
      coursework: ['Electronics', 'Signal processing', 'Communication systems', 'Embedded concepts'],
      achievements: ['Combined engineering rigor with a growing focus on music production and sound design.']
    }
  ],
  experience: [
    {
      role: 'Audio Producer / Mix Engineer',
      organization: 'Independent music projects',
      location: 'India',
      dates: '2023 — Present',
      description: 'Create and refine music productions with clear emotional direction, balanced tonality, and polished listening experiences, while applying the disciplined thinking developed through my ECE background.',
      contributions: ['Edited and balanced tracks for clarity and presence.', 'Refined arrangement and tone based on listening tests.', 'Explored production choices across mixing, mastering, and sound design.']
    },
    {
      role: 'Audio & Technical Creative',
      organization: 'Personal studio practice',
      location: 'India',
      dates: '2021 — Present',
      description: 'Use engineering thinking to support musical decisions, from signal flow and processing to arrangement and final tonal consistency, bridging electronics fundamentals with music production practice.',
      contributions: ['Built a disciplined listening workflow.', 'Applied technical understanding to creative production decisions.', 'Developed a sound design approach rooted in emotion and clarity.']
    }
  ],
  achievements: [
    { year: '2025', title: 'Reference mix portfolio', detail: 'Built and compared multiple listening passes to explore production choices and sonic outcomes.' },
    { year: '2025', title: 'Audio experimentation', detail: 'Explored arrangement, spatial balance, and tonal shaping across four production studies.' }
  ],
  research: [
    {
      year: '2025',
      venue: 'Music Production Research',
      title: 'The role of tonal balance in emotional listening',
      abstract: 'Explores how clarity, dynamics, and tonal shaping influence how listeners connect with a performance and how a mix communicates intention.',
      paper: null,
      code: null
    },
    {
      year: '2025',
      venue: 'Sound Design Practice',
      title: 'Spatial texture as a storytelling device',
      abstract: 'Examines how stereo width, depth, and ambience can create a more immersive and emotionally rich production language.',
      paper: null,
      code: null
    },
    {
      year: '2024',
      venue: 'Audio Engineering Studio Work',
      title: 'Mixing as an artistic decision-making process',
      abstract: 'Investigates how technical processing choices can support artistic intent without sacrificing musical identity or emotional truth.',
      paper: null,
      code: null
    }
  ],
  statement: {
    intro: 'Where my musical interest began',
    sections: [
      {
        title: 'Where I started',
        text: 'My connection to music began with listening closely to tone, texture, and performance detail. I wanted to understand how a recording becomes emotionally persuasive and why certain mixes feel immersive while others feel flat.'
      },
      {
        title: 'What I explored',
        text: 'I explored production, recording, arrangement, sound design, and listening practice through practical studio work and iterative mix sessions. The process taught me that the craft is not just technical; it is also interpretive and deeply musical.'
      },
      {
        title: 'What I discovered',
        text: 'I learned that the strongest productions are built through careful listening, informed decisions, and a clear sense of musical intention. Every processing choice should support the emotional and artistic goal rather than overpower it.'
      },
      {
        title: 'What I want to investigate',
        text: 'I want to study how production decisions influence perception, emotional response, and sonic identity in modern music. I am especially curious about the relationship between mixing, spatial audio, and artistic expression.'
      },
      {
        title: 'Why graduate study now',
        text: 'A Master\'s in music production would give me the structured environment to deepen my technical practice, study research-led approaches to audio, and connect artistic experimentation with rigorous critical thinking.'
      },
      {
        title: 'Where I want to go',
        text: 'I aim to develop as a producer, audio engineer, and researcher who can create compelling sound experiences while contributing to the future of music technology and creative production.'
      }
    ]
  },
  bio: {
    text: 'I am drawn to music as both a craft and a form of research. My B.Tech in ECE gave me a structured technical foundation in electronics, signal understanding, and analytical thinking, while my growing love for music pushed me toward sound design, mixing, and emotional storytelling. I enjoy listening with intention, studying how sound moves emotion, and building mixes that support both clarity and artistic identity.'
  }
};
