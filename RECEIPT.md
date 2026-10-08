# RECEIPT

**Overall grade: FAIL**

Checked 8 October 2026 from public pages only. No account was signed in. No bot was created, no plan was purchased, and nothing was posted.

The live product does not pass. The draft in this repo is a simulation of an honest “no browser client” answer plus a phone-app next step. **Draft simulation, does not clear the fail.**

## Desk scope

| Check | Result |
| --- | --- |
| (a) A public page plainly answers “Can I use Grok Bot from a browser?”, with a working URL and the plans it covers, or an honest “not available” plus a no-install-on-this-machine alternative | **FAIL.** No page asks or answers that question. Client lists name desktop and phone apps and never say the browser client is unavailable. |
| (b) A Cursor-plan user in the Grok web app sees their bots, or a clear message with a working next step | **UNVERIFIED** for a signed-in Cursor-plan user. Unsigned `https://grok.com/?product=grok-bot` is Grok chat (“What should we explore?”) with Sign in / Sign up and no bot explanation. |
| (c) Docs and the web app agree | **FAIL.** Help says the Grok app is a different product. The Grok Bot page sends existing plan holders to that app, and the app’s public screen does not mention bots. |
| (d) A second operator can confirm this from public pages and the web app alone | The FAIL on (a) and (c), and the unsigned grok.com screen, can be rechecked without an account. The signed-in bot list cannot. |

PASS required (a), (b), (c), and (d) together. They do not all hold.

## Case table

| # | Failure case | Grade | Evidence |
| --- | --- | --- | --- |
| 1 | No public answer to “Can I use Grok Bot in a browser?”; only X replies or staff DMs | **FAIL** | The FAQ question does not exist. The closest official lines list desktop and mobile and do not mention a browser client. A staff forum reply says “web client” and gives no URL. |
| 2 | Docs say browser access exists, but the link 404s, needs the desktop app, or only works on one plan without saying so | **PASS** | No doc states that a browser client exists. `https://grok.com/?product=grok-bot` returns HTTP 200. It is the wrong product, which is case 6, not a 404. Plan pages name Cursor and SuperGrok for Grok Bot access in general. |
| 3 | A Cursor-plan user opens the Grok web app and sees an empty bot list or unrelated Grok chat, with no explanation or next step | **UNVERIFIED** | Needs a signed-in Cursor-plan session. Unsigned grok.com is unrelated Grok chat with no explanation. That signed-in screen was not opened. |
| 4 | The web app tells a Cursor-plan user that buying SuperGrok is the only path, when their plan already covers Grok Bot | **UNVERIFIED** | Needs that signed-in screen. Public docs say a Cursor plan already includes Grok Bot. The unsigned grok.com page shows no SuperGrok paywall for bots. |
| 5 | The “supported alternative” still requires installing the desktop app on the same machine | **PASS** | Mobile docs tell an existing Cursor account to sign in on the phone. That path does not install the desktop app on the work laptop. Computer reset remains desktop-only, on some other machine. |
| 6 | The docs and the web app give conflicting answers | **FAIL** | Help: Grok chat and Grok Bot are different apps, and devices are desktop plus phone. `https://x.ai/bot` tells existing users to “Sign in with your plan” at `https://grok.com/?product=grok-bot`. That URL’s public screen is the Grok chat composer and does not mention bots. |
| 7 | The “fix” changes new-user access, account-link recovery, or installers instead | **PASS** | No browser-access fix is published. Get-started is still “install the desktop app.” Sign-in pages are still account auth. Those pages were not rewritten into a fake browser answer. |

## Quotes

### Where people are told to talk to a bot

[docs.x.ai/grok-bot/faq](https://docs.x.ai/grok-bot/faq), “Where do I talk to Grok Bot?”:

> Use the Grok Bot desktop app on macOS, Windows, or Linux, or the companion app on iOS or Android. The same Bots and conversations sync across your signed-in devices.

Same page, “Which platforms are supported?” lists macOS, Windows, Linux, iPhone on iOS 18 or later, and Android 9 or later. A browser client is not in the list.

[docs.x.ai/grok-bot/overview](https://docs.x.ai/grok-bot/overview):

> The same Bot is reachable from the desktop app and the mobile app.

> The desktop app runs on macOS (Apple silicon and Intel), Windows (x64 and Arm64), and Linux (x64 and Arm64), and the mobile app runs on iPhone, iPad, and Android.

[cursor.com/help/grok-bot/faqs](https://cursor.com/help/grok-bot/faqs), “Which devices work?”:

> The desktop app runs on Mac, Windows, and Linux. The phone app runs on iPhone and Android. Get the desktop app from the Grok Bot page at cursor.com/dashboard/bot.

The short URL [cursor.com/help/grok-bot](https://cursor.com/help/grok-bot) responded **307** to `/help` on 8 Oct 2026. The FAQ that loads is `/help/grok-bot/faqs`.

[x.ai/bot](https://x.ai/bot) FAQ, “Where do I talk to Grok Bot?” (rendered page, HTTP 200):

> Work with Grok Bot from your desktop (macOS or Windows) or your phone with the iOS app.

That marketing FAQ omits Linux and Android, which the docs include. It still does not answer the browser question.

### Plans, and the statement that the Grok app is a different product

[cursor.com/help/grok-bot/faqs](https://cursor.com/help/grok-bot/faqs):

> No. Grok Bot comes with Cursor Pro, Pro+, Ultra, and self-serve Teams. You can also link an individual SuperGrok, SuperGrok Plus, SuperGrok Heavy, or X Premium+ account.

> No. Grok (the chat app from xAI) and Grok Bot are two different apps. A paywall or a Weekly SuperGrok Limit in the Grok app is not about Grok Bot. Grok Bot signs in with your Cursor account.

[docs.x.ai/grok-bot/overview](https://docs.x.ai/grok-bot/overview):

> Grok Bot runs on macOS, Windows, Linux, iOS, and Android, and is included with every paid individual Cursor plan and with the Cursor Teams plan. You can also link an individual SuperGrok, SuperGrok Plus, or SuperGrok Heavy subscription.

[x.ai/bot](https://x.ai/bot):

> Already on an eligible Cursor, SuperGrok, or Teams plan? Grok Bot is included.

The control on that line is **Sign in with your plan**, linking to [https://grok.com/?product=grok-bot](https://grok.com/?product=grok-bot).

### Phone app as a real client that does not install on the work laptop

[cursor.com/help/grok-bot/mobile](https://cursor.com/help/grok-bot/mobile):

> Use Grok Bot on your phone with the same account and cloud computer as desktop. Grok Bot is available on iOS and Android.

> No. Grok Bot access carries into mobile when you sign in with the same Cursor account.

The included list there names Cursor Ultra, Pro+, Pro, self-serve Teams, SuperGrok, SuperGrok Plus, SuperGrok Heavy, and X Premium+.

> Computer updates are not available on mobile. Use desktop Grok Bot to update, recover, or reset the computer.

[docs.x.ai/grok-bot/mobile](https://docs.x.ai/grok-bot/mobile) gives store links that returned HTTP 200 on 8 Oct 2026:

- [https://apps.apple.com/app/id6794501026](https://apps.apple.com/app/id6794501026) (landed on `https://apps.apple.com/us/app/grok-bot/id6794501026`)
- [https://play.google.com/store/apps/details?id=ai.x.grok.bot](https://play.google.com/store/apps/details?id=ai.x.grok.bot)

Get started still requires a desktop install for that path: [docs.x.ai/grok-bot/get-started](https://docs.x.ai/grok-bot/get-started) says “The Grok Bot desktop app for macOS, Windows, or Linux” and “Open the Grok Bot downloads page” at `https://x.ai/bot`.

### Unsigned Grok web app

Rendered [https://grok.com/](https://grok.com/) on 8 Oct 2026, HTTP 200, title “Grok”, canonical `https://grok.com/`. Visible text:

> Imagine Sign in Sign up What should we explore? Type / to use slash commands Fast By messaging Grok, you agree to our Terms and Privacy Policy.

Rendered [https://grok.com/?product=grok-bot](https://grok.com/?product=grok-bot), HTTP 200, loaded URL unchanged, title “Grok”, canonical `https://grok.com/`. Visible text is the same composer. No bot list, no “your plan already includes Grok Bot,” and no link to the phone app or the FAQ.

Page description on grok.com: “Grok is an AI assistant built by SpaceXAI. Chat, create images, write code, and get real-time answers from the web and X.”

### Changelog

[x.ai/changelog/bot](https://x.ai/changelog/bot), rendered HTTP 200. Header: “Latest v0.68.1 · Oct 7, 2026” and “Download for Windows.” The fetched text contains no “web client.” The “Open in Web” line is about a Cloud Agent card, not a Grok Bot client:

> A Cloud Agent's open button lets you choose Open in Web or Open in Cursor, and remembers your choice.

### Forum staff

[forum.cursor.com/t/still-cant-get-into-grok-bot-on-computer-or-app/169184](https://forum.cursor.com/t/still-cant-get-into-grok-bot-on-computer-or-app/169184), staff post by @mohitjain:

> The computer that runs your Grok Bot on our side had gotten into a stuck state, which is why the app (and the web client) couldn’t get past the setup screen.

The thread does not give a URL for that web client. The original report (“Same failure in the web client”) does not either.

Launch post [forum.cursor.com/t/introducing-grok-bot/168053](https://forum.cursor.com/t/introducing-grok-bot/168053) says to “pick the thread back up from desktop or iOS” and limits the beta to SuperGrok Heavy, Cursor Ultra, and Cursor Teams Premium. Current help is broader (Cursor Pro and the other paid plans above). The launch post is not the current access matrix, and it does not answer the browser question.

Sign-in help mentions [x.ai/bot](https://x.ai/bot) as a desktop auth retry (“On desktop, also try signing in at x.ai/bot”), not as a place to chat with bots. A plain curl from this host got Cloudflare **403** on `x.ai`; a rendered fetch of `https://x.ai/bot` and `https://x.ai/changelog/bot` returned **200**.

## What was not tested, and why

- **Signed-in grok.com as a Cursor-plan user.** The instructions forbid signing in. Cases 3 and 4 stay UNVERIFIED. The unsigned screen is recorded above.
- **Signed-in grok.com as a SuperGrok user.** Same reason.
- **Whether an unlisted “web client” URL works.** Staff used the words “web client” and published no address. Guessing URLs or signing in was out of bounds.
- **Replies on the X post** `https://x.com/ewillisseck/status/2108161655519482217`. The X API client on this host is forbidden (`client-not-enrolled`). Nothing was posted. The grade uses official pages, not replies.
- **Installing or opening the phone app.** Store and doc URLs were checked for HTTP 200 only.
- **Bot sync, computer reset, usage meters, account linking, new-user signup, and desktop installers.** Out of scope, and they need an account.

## Draft

`drafts/SPEC.md`, `drafts/faq-browser-access.md`, and `drafts/web-app-empty-state.md` are the unpublished 1b answer: no browser client, phone app as the no-install-on-this-computer alternative, same sentences in the docs and in the web-app empty state for a Cursor-plan user and a SuperGrok user. `demo/index.html` simulates that draft and keeps the live grade on screen.
