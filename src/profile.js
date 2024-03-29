// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Satyam",
};
const background = {
  // Options: Snow or Particle
  type: "Particle",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "I am a Computer Science senior at the University of California San Diego interested in Web-Development and Machine Learning. Over time, I have gained relevant skills and experiences in both these fields by developing my website, creating my RESTful API, and training my models to generate lo-fi songs and captions for images. Other than programming, my hobbies include working out, cooking, and playing video games.",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "React",
    // svg: '',
    faClass: 'fab fa-react'
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  // {
  //   name: "SASS",
  //   // svg: '',
  //   faClass: "fab fa-sass",
  // },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  // {
  //   name: "PHP",
  //   // svg: '',
  //   faClass: "fab fa-php",
  // },
  // {
  //   name: "Database",
  //   // svg: '',
  //   faClass: "fas fa-database",
  // },
  // {
  //   name: "AWS",
  //   // svg: '',
  //   faClass: "fab fa-aws",
  // },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  // {
  //   // Add image in './styles/images.css' in #project1
  //   id: "project1",
  //   name: "Project 1",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
  // {
  //   // Add image in './styles/images.css' in #project6
  //   id: "project6",
  //   name: "Project 6",
  //   skills: ["HTML, CSS, JS"],
  //   url: "https://github.com/kaustubhai",
  // },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Experiences";
const miscellaneous = [
  {
   id: "f5",
   name: "Software Engineer @ F5",
   url: "https://www.f5.com/",
   skills: ["Communication, Problem Solving, Debugging"],
   tech_skills: ["C, gdb, cmd"],
  },
  {
    // Add image in './styles/images.css' in #misc1
    id: "sigfig",
    name: "SWE Intern @ SigFig",
    url: "https://www.sigfig.com/site/#/home/am",
    skills: ["Teamwork, Problem Solving, Adaptability"],
    tech_skills: ["Python, JavaScript, React, Django"],
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "ucsd",
    name: "CSE Tutor @ UCSD",
    url: "https://ucsd.edu/",
    skills: ["Communication, Empathy, Active Listening"],
    tech_skills: ["JavaScript, HTML5, CSS3"],
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "acmai",
    name: "Event Lead @ ACM-AI",
    url: "https://ai.acmucsd.com/about",
    skills: ["Confidence, Collaboration, Mentorship, Public Speaking"],
    tech_skills: ["Python, Tensorflow, Deep Learning, Reinforcement Learning"],
  },
  {
    id: "tbp",
    name: "Tech Lead @ Tau Beta Pi",
    url: "https://tbp.ucsd.edu/",
    skills: ["Website Management, Leadership, Decision Making, Organization"],
    tech_skills: ["JavaScript, React, SQL, PHP"]
  },
  {
    id: "sctc",
    name: "Logistics Director @ Sixth College Tech Comm",
    url: "https://wintergamefest.org",
    skills: ["Management Skills, Goal Setting, Delegation"],
  }
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Get in Touch";
const contact = {
  pitch:
    "Fill this form out to reach out to me about opportunities or just to get in touch. Here are my other social/professional links. If you think that our interests match, hit me up and we could definitely set up a time to talk about tech, anime, movies, music, or anything you would like!!",
  copyright: "",
  contactUrl: "https://formspree.io/f/mvodywrb",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/satyam19946",
  facebook: "https://facebook.com/satyam119946",
  twitter: "https://twitter.com/satyam19946",
  instagram: "https://instagram.com/satyam19946",
  linkedin: "https://linkedin.com/in/satyam19946",
  resume: "https://sagupta.tech/resume.pdf",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
