// Edit these to make the site yours.
export const SITE = {
  name: 'Hafsa',                       // TODO: your display name
  title: "Hafsa's site",
  description:
    'A digital planner: my projects, writing, and the things I like — ' +
    'robotics, ML, and embedded systems.',
  emails: ['hafsahmed1122@gmail.com', 'hafsaah@bu.edu'],
  // Open guestbook via Cusdis (free, no login for visitors).
  // Get an App ID: sign up at https://cusdis.com → "Add Website" → copy the
  // "App ID" → paste it below. The guestbook turns on automatically once set.
  guestbook: { cusdisAppId: '0037c318-0b58-4d9c-94c0-38c24120362a' },
  // shown bottom-left on the planner page (sheep uses song lyrics here)
  quote: [
    'building little machines that understand words,',
    'one weekend project at a time.',
  ],
  // shown bottom-right above the calendar
  songQuote: { title: 'now playing', author: '—— your song here' },
  links: [
    { label: 'github', href: 'https://github.com/hafsaah1' },
    // { label: 'linkedin', href: '...' },
  ],
};

// Seven nav entries = the seven days of the planner week (Mon–Sun).
export const NAV = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT ME', href: '/about' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'BLOG', href: '/blog' },
  { label: 'TAGS', href: '/tags' },
  { label: 'GUESTBOOK', href: '/guestbook' },
  { label: 'LINKS', href: '/links' },
];
