# surendrallam.com

Source of **[surendrallam.com](https://surendrallam.com)**, the portfolio of Surendra Allam, Senior AI Engineer in Bengaluru. I build AI agents, knowledge assistants and voice agents into products that already have users, then measure them: accuracy, cost per answer, latency.

**Visit the site:** [surendrallam.com](https://surendrallam.com) · **Book a 20-minute call:** [Google Calendar](https://calendar.google.com/calendar/appointments/schedules/AcZssZ1lDLonmlSD4WkQvxzphlgUtDpD4FfhvhfchgGJ8QPG_4ccwFnVYOuC0g2WVFX9Sg1m1wL8wJJI)

## Projects shown on the site

| Project | What it shows |
|---|---|
| [ask-your-data-agent](https://github.com/surendrallam/ask-your-data-agent) | A Claude agent that answers business questions with read-only SQL and shows the query behind every number. |
| [grounded-rag-assistant](https://github.com/surendrallam/grounded-rag-assistant) | A support assistant that answers only from your documents and cites every answer. |
| [refund-triage-agent](https://github.com/surendrallam/refund-triage-agent) | A refund-email agent: Claude reads and writes, code decides eligibility, amounts and limits. |

Each repository publishes its benchmark, method and raw results.

## How the site is built

- One static page, `index.html`: plain HTML and CSS with a little JavaScript. No framework and no build step.
- Light and dark themes follow the visitor's system setting. Colours and fonts come from CSS variables at the top of the `<style>` block.
- The SA logo is a single SVG symbol in `index.html`; `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` and `img/og.png` (the link-preview image) are generated from it.

| Path | What it is |
|---|---|
| `index.html` | The page |
| `img/` | Screenshot, logo mark and link-preview image |
| `favicon.svg`, `favicon.ico`, `apple-touch-icon.png` | Browser and home-screen icons |
| `CNAME` | Custom domain for GitHub Pages |
| `.github/workflows/pages.yml` | Deploys `main` to GitHub Pages |

## Run it locally

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Every push to `main` deploys through GitHub Pages to surendrallam.com.
