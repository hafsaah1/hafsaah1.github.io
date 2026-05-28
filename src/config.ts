// Edit these to make the site yours.
export const SITE = {
  name: 'Hafsa',                       // TODO: your display name
  title: "Hafsa's site",
  description:
    'A digital planner: my projects, writing, and the things I like — ' +
    'robotics, ML, and embedded systems.',
  emails: ['hafsahmed1122@gmail.com', 'hafsaah@bu.edu'],
  // Guestbook backend: a free Supabase database (instant, no moderation).
  // One-time setup is in GUESTBOOK_SETUP.md. After it, paste your
  // Project URL + anon (public) key here and the guestbook turns on.
  supabase: { url: '', anonKey: '' },
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
