# Draft spec: browser access answer

Status: draft only. The live product grade is **FAIL**. Shipping this spec in a demo does not clear that fail.

## Decision

Option 1b. There is no browser client to document. The public answer says that plainly and points at the phone app, which uses the same account and does not install software on the work computer.

A new web client is out of scope for this draft.

## One answer, two surfaces

| Surface | Where the answer lives |
| --- | --- |
| Docs / FAQ | Question “Can I use Grok Bot from a browser without installing the app?” with anchor `#browser-access` |
| Grok web app | Empty state for a signed-in Cursor-plan user and for a signed-in SuperGrok user, each linking to `#browser-access` |

The sentence both surfaces use:

> There is no Grok Bot browser client today. grok.com is Grok chat, a different product, and it does not list your bots.

The next step both surfaces use:

> Use the Grok Bot app on your phone and sign in with the same Cursor account. That does not install anything on this computer.

## Plans the answer names

- Cursor: Pro, Pro+, Ultra, self-serve Teams
- SuperGrok: SuperGrok, SuperGrok Plus, SuperGrok Heavy

A Cursor plan already includes Grok Bot. The web app must not tell that user to buy SuperGrok. A linked SuperGrok plan already includes Grok Bot. The web app must not tell that user to buy a Cursor plan as the only way in.

## What the phone alternative covers

Works: the same bots, conversations, routines, and cloud computer; messaging, dictation, voice chat, and approvals.

Does not work: a bot list inside grok.com. Updating, recovering, or resetting the bot computer remains desktop-only and is done on a machine where that install is allowed.

## Links (HTTP 200 on 8 Oct 2026)

- https://cursor.com/help/grok-bot/mobile
- https://docs.x.ai/grok-bot/mobile
- https://apps.apple.com/app/id6794501026
- https://play.google.com/store/apps/details?id=ai.x.grok.bot

## Out of scope

New-user signup, account-link recovery, desktop installers, usage meters.

## Contract the demo must keep

1. The page banner shows live grade `FAIL` and the words `draft simulation, does not clear the fail`.
2. The FAQ states that no browser client exists, names Cursor and SuperGrok, and offers the phone app.
3. The phone alternative does not require installing the desktop app on this computer.
4. The Cursor-plan panel explains the empty screen and links to `#browser-access`. It does not say buying SuperGrok is required.
5. The SuperGrok panel explains the empty screen and links to the same `#browser-access`.
6. Neither panel is an empty bot list with no explanation.
7. The page makes no network calls.

`scripts/verify-simulation.mjs` checks these against `demo/index.html`.
