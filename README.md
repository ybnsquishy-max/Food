# Mise

Kitchen notes, step-by-step methods and a pantry count in one installable app.
It combines the earlier **Bench Notes** and **Pantry** pages.

- **Notes**: snap class notes or pick photos, label them, print them, or convert them to a method with your own Anthropic API key.
- **Method**: numbered docket tickets with temp/time and allergen fields (FSANZ allergen quick-picks), reorder, print.
- **Pantry**: sections colour-coded by chopping-board colour, +/− stock counts, anything at zero is flagged **86**.

Everything is stored on the device (localStorage). Nothing is sent anywhere except photos you choose to convert.

## Install it like a normal app

The app is a Progressive Web App in [`app/`](app). Once it's hosted:

- **Android / Chrome / Edge (desktop too):** open the site and tap **Install** in the top bar (or browser menu → *Install app*).
- **iPhone / iPad:** open it in Safari → **Share** → **Add to Home Screen**.

It gets its own icon, opens full screen, and works offline.

## Hosting (one-time setup)

1. Merge to `main`.
2. In the GitHub repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The `Deploy Mise app` workflow publishes `app/` to `https://<your-username>.github.io/<repo>/`.

## Automatic updates

Every push to `main` that touches `app/` redeploys. The workflow stamps a new build id into `sw.js`, so each installed copy notices the change the next time it's opened (and every 30 minutes while open), downloads it in the background, and reloads itself. If you're in the middle of typing, it waits until you leave the app or tap **Update now**. The current version is shown in **Settings → Updates**.

## Run locally

```sh
npx http-server app -p 8080
```

Then open http://localhost:8080.
