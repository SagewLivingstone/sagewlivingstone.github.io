# Portfolio Project Context

## Tech Stack
- Nuxt 3 static site (Vue 3, Tailwind CSS)
- GitHub Pages hosting from `/dist/public`

## Key Features

### Flickr Photo Gallery (`/img`)
- Server API route (`/server/api/flickr-photos.ts`) fetches photos from Flickr API
- Uses `justified-layout` library for Pinterest-style grid
- Rebuilds daily at 2 AM UTC via GitHub Actions to fetch fresh photos
- Flickr credentials stored as GitHub secrets

### Styling
- Intentionally (almost brutally) simple
- Custom color palette via CSS variables in `app.vue`
- Dark theme with coral pink (#db7692) as primary accent

## Structure
- `/pages` - Route pages (index, about, projects, img, contact)
- `/layouts` - Two layouts: `default` (with sidebar nav) and `blank` (full-screen)
- `/components` - NavBar, ContactForm, ProjectItem
- `/server/api` - Server endpoints for Flickr integration

## Build & Deploy
- `npm run build:pages` - Static build for GitHub Pages
- CI runs on push to `master` + daily schedule
- Contact form uses Web3Forms (third-party service)
