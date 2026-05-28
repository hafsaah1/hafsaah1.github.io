// Edit these to make the site yours.
export const SITE = {
  name: 'Hafsa',                       // TODO: your display name
  title: "Hafsa's site",
  description:
    'A digital planner: my projects, writing, and the things I like — ' +
    'robotics, ML, and embedded systems.',
  emails: ['hafsaah@bu.edu', 'hafsahmed1122@gmail.com'],
  // Guestbook backend: a free Supabase database (instant, no moderation).
  // One-time setup is in GUESTBOOK_SETUP.md. After it, paste your
  // Project URL + anon (public) key here and the guestbook turns on.
  supabase: {
    url: 'https://wvmsumpisqevhacprtzk.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind2bXN1bXBpc3FldmhhY3BydHprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk5Mjc1MjgsImV4cCI6MjA5NTUwMzUyOH0.RwoG1PHrwCql3hAvrJv3V_2ACv9rmiAoxCnFTKu2-y4',
  },
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
