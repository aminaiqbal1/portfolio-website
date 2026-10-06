# Amina Iqbal, AI Engineer portfolio

React 18 + TypeScript + Vite + Tailwind CSS 3 + Ant Design 5 + Framer Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
```

## Where things live

- `src/assets/`      your three photos (portrait.jpeg, workspace.jpeg, community.jpeg). Replace a file to swap a photo.
- `src/data/content.ts`  every word on the site: profile, skills, experience, projects.
- `src/theme.ts`     Ant Design theme tokens (colours, radius, fonts).
- `tailwind.config.js`   colour palette and fonts.
- `src/components/`  side navigation, streaming text, scramble text, agent trace, etc.
- `src/sections/`    Hero, About, Toolkit, Journey, What I build, Community, Contact.

## Motion

- Hero headline streams like an LLM response, the role line types and deletes.
- Section headings decode from scrambled characters as they scroll into view.
- The About paragraph lights up word by word while scrolling.
- The agent trace card loops an illustrative run (thought, tool, result, answer).
- All motion is switched off for visitors who prefer reduced motion.

## WhatsApp

Open `src/data/content.ts` and set `whatsapp` to your number with country code, in any format
(for example `'+92 300 1234567'`). A WhatsApp button then appears in the Contact section and the
side navigation, opening a chat with a pre-filled message (`whatsappMessage`). Set it to `''` to hide it.
