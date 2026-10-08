# Grok Bot browser access — live grade and draft

Public-page grade of whether an existing Grok Bot user on a Cursor plan can reach their bots from a browser without installing the app.

**Live grade: FAIL.** The demo is a draft simulation. It does not clear that fail.

## Read this

- [RECEIPT.md](RECEIPT.md) — overall grade, case table, quotes, and what was not tested
- [drafts/SPEC.md](drafts/SPEC.md) — the unpublished answer both surfaces would share
- [drafts/faq-browser-access.md](drafts/faq-browser-access.md) — FAQ entry
- [drafts/web-app-empty-state.md](drafts/web-app-empty-state.md) — grok.com empty-state copy

## Public demo

https://agentmindcloud.github.io/grok-bot-browser-access-demo/ (no sign-in). The page is [index.html](index.html), also at [demo/index.html](demo/index.html). One self-contained HTML file: no network calls, no secrets. The banner states the live grade: FAIL. It is a draft simulation and does not clear the fail.

```bash
node scripts/verify-simulation.mjs
```

`npm run verify` runs the same script. To serve it locally instead: `python3 -m http.server 8000` then open http://127.0.0.1:8000/demo/.
