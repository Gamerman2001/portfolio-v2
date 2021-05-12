module.exports = {
  siteTitle: 'Troy Gooden | Software Engineer',
  siteDescription:
    'Troy Gooden is a software developer from NY who has an extensive history with technology. He has worked from building computers physically, to constructing live networks, and even to building software. With a focus on Front-End he looks to bring amazing code and design to the web',
  siteKeywords:
    'Troy Gooden, software engineer, front-end engineer, web developer, javascript',
  siteUrl: 'https://troygood.dev',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-160608777-1',
  googleVerification: '',
  name: 'Troy Gooden',
  location: 'New York | D.C.',
  email: 'fullCodeAlchemist@gmail.com',
  github: 'https://github.com/gamerman2001',
  twitterHandle: '@FlashGooden',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/Gamerman2001',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/troygooden',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/Gamerman2001/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/FlashGooden',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
