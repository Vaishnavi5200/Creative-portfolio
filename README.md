# Vaishnavi Dwivedi — Creative Portfolio

A client-focused React/Vite portfolio for video editing and thumbnail design.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Choose your strongest work

No projects were removed automatically. You control curation in:

- `src/data/videos.js`
- `src/data/thumbnails.js`

Each item includes a `featured` field. Set it to `true` for work you want to prioritise, or remove an item from the array when you do not want it displayed.

## Add WhatsApp

Open `src/data/site.js` and add the number in international format without `+` or spaces:

```js
whatsappNumber: "919876543210"
```

The WhatsApp button remains hidden while the value is empty, avoiding a broken or fake CTA.

## Add testimonials

Real testimonials can be added to the `testimonials` array in `src/data/site.js`:

```js
{
  quote: "The feedback text.",
  name: "Client name",
  role: "Creator / Brand"
}
```

The testimonials section remains hidden until real feedback is added.

## Media optimisation

- Original PNG thumbnails were converted to WebP.
- Videos were transcoded to web-optimised H.264 MP4 files with fast-start metadata.
- Custom WebP poster frames are used for every video.
- Images use lazy loading and videos avoid eager downloads where possible.
- `node_modules`, `dist`, environment files and logs are excluded through `.gitignore`.

## Deployment

For Vercel, import the repository and keep the default Vite settings:

- Build command: `npm run build`
- Output directory: `dist`
