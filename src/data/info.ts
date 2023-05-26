export const info = {
  baseUrl: "https://astro-portfolio-uzair.vercel.app",
  name: "Paul Pellekoorne",
  jobDescription: "Web Developer",
  about: `I'm a project manager based in Munich, Germany.
   I feel at home in the field of mobility. I love teamwork, programming, automation and creativity.
   I am grateful that after graduating I was able to experience, accompany, support and help steer the development of TTS Europe from the very beginning.
   Afterwards, I was able to gain experience as a project manager at Accenture, where I took responsibility for three projects.
   Since June 2023 I'm driving the IT transformation of Allane SE.
  `,

  experience: [
    {
      name: "Allane SE",
      location: "Pullach, Germany",
      startDate: "Jun 2023",
      endDate: "Present",
      description: [
        "✓ Program Manager of the IT Modernization Program",
        "✓ Coordination of modernization projects and design of objectives and processes",
      ],
    },

    {
      name: "Accenture",
      location: "Munich, Germany",
      startDate: "May 2021",
      endDate: "May 2023",
      description: [
        "✓ Multi-project management of agile software development projects in the automotive industry",
        "✓ Project lead of the content management of an eShop",
        "✓ Measured increase in customer satisfaction, employee satisfaction, product quality and revenue",
        "✓ Trainer of courses on project management, teamwork and motivation",
      ],
    },

    {
      name: "Traffic Technology Services Europe",
      location: "Munich, Germany & Portland, OR",
      startDate: "Jan 2016",
      endDate: "Apr 2021",
      description: [
        "✓ Product Owner and Project Manager for emulation-based traffic light phase forecasts",
        "✓ Realization of the first commercial V2I service in Germany",
        "✓ Development of a traffic light phase forecast with emulators for German ECUs",
        "✓ Conceptual Design, Development, Testing, Deployment, Customer Relations and IT/Operations",
        "✓ R&D projects, patent holder"
      ],
    },

    {
      name: "German University of Technology",
      location: "Muscat, Oman",
      startDate: "Sep 2014",
      endDate: "Feb 2015",
      description: [
        "✓ Teaching Higher Mathematics for Engineers",
        "✓ Management of the e-learning platform",
        "✓ 3D printing of three-dimensional functions"
      ],
    },
  ],

  education: [
    {
      name: "M.Sc. Environmental Engineering (1.4)",
      location: "Technical University of Munich",
      startDate: "2009",
      endDate: "2015",
      description: [
        "✓ Master thesis: Predictive Impact Evaluation on Urban Traffic Guidance Measures (1.3)",
        "✓ Study project at DriveNow on dynamic pricing systems for free-floating car sharing services (1.0)",
        "✓ Bachelor Thesis: Building Information Modeling (1.0)",
        "✓ Since 2011 Tutor of Higher Mathematics I and II"
      ],
    },
    {
      name: "Additional commitment",
      location: "Worldwide",
      startDate: "2010",
      endDate: "2015",
      description: [
        "✓ Reviewers in over 30 accreditation and evaluation procedures",
        "✓ Expert committee member of the accreditation agency ASIIN e.V.",
        "✓ Organizer and assessor in aptitude assessment procedures",
        "✓ Member of appeal committees"
      ],
    },
    {
      name: "Baccalaureate / Abitur (2.4)",
      location: "Munich, Germany",
      startDate: "2000",
      endDate: "2009",
      description: [
        "✓ Piano lessons, from 2006 excellence class",
        "✓ Additional commitment as a tutor and mediator",
        "✓ Advanced Courses Mathematics and Music",
      ],
    },
  ],

  socialMedia: {
    facebook: "https://www.facebook.com/paul.pellekoorne",
    email: "mailto:paul@pellekoorne.de",
    linkedin: "https://www.linkedin.com/in/paulpellekoorne/",
  },

  projects: [
    {
      title: "Multimodal Mobility App",
      isFeatured: true,
      //display ratio 3:2
      thumbnail: "/assets/images/Urby_Frame2.jpg",
      githubUrl: "",
      liveUrl: "https://www.accenture.com/us-en/industries/automotive-index?c=acn_glb_foundationalbaleader_13582181&n=smc_0423#block-bmw-groups-urby-mobility",
    },

    {
      title: "Traffic light prediction",
      isFeatured: true,
      thumbnail: "/assets/images/AudiTLI4.jpg",
      githubUrl: "",
      liveUrl: "https://www.instagram.com/reel/CfGFbKJF0Kp/",
    },

    {
      title: "Dynamic Pricing in Car-Sharing",
      isFeatured: false,
      thumbnail: "/assets/images/drivenow.png",
      githubUrl: "",
      liveUrl: "https://www.iphone-ticker.de/driven-save-drivenow-optimiert-app-fuer-neues-tarifmodell-78977/",
    },
  ],
};
