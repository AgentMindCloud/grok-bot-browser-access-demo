import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const htmlPath = path.join(root, "demo", "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

const section = (name) => {
  const pattern = new RegExp(
    `<section[^>]*data-scenario="${name}"[\\s\\S]*?</section>`
  );
  const match = html.match(pattern);
  assert.ok(match, `missing scenario section ${name}`);
  return match[0];
};

const faq = (() => {
  const match = html.match(/<article id="browser-access"[\s\S]*?<\/article>/);
  assert.ok(match, "missing #browser-access article");
  return match[0];
})();

function test(name, fn) {
  try {
    fn();
    console.log(`ok  ${name}`);
  } catch (error) {
    console.error(`not ok  ${name}`);
    throw error;
  }
}

test("banner shows the live FAIL and that the draft does not clear it", () => {
  assert.match(html, /data-live-grade="FAIL"/);
  assert.match(html, /LIVE GRADE:\s*FAIL/);
  assert.match(html, /draft simulation, does not clear the fail/);
});

test("page makes no network calls", () => {
  assert.doesNotMatch(html, /fetch\s*\(/);
  assert.doesNotMatch(html, /XMLHttpRequest/);
  assert.doesNotMatch(html, /EventSource/);
  assert.doesNotMatch(html, /WebSocket/);
  assert.doesNotMatch(html, /<script[^>]+src=/i);
  assert.doesNotMatch(html, /<link[^>]+href=["']https?:/i);
  assert.doesNotMatch(html, /<img[^>]+src=["']https?:/i);
});

test("FAQ says there is no browser client and names both plan families", () => {
  assert.match(faq, /Can I use Grok Bot from a browser without installing the app\?/);
  assert.match(faq, /There is no Grok Bot browser client today/);
  assert.match(faq, /grok\.com is Grok chat, a different product, and it does not list your bots/);
  assert.match(faq, /Cursor Pro/);
  assert.match(faq, /Pro\+/);
  assert.match(faq, /Ultra/);
  assert.match(faq, /Teams/);
  assert.match(faq, /SuperGrok/);
  assert.match(faq, /SuperGrok Plus/);
  assert.match(faq, /SuperGrok Heavy/);
  assert.match(faq, /Buying SuperGrok is not required/);
});

test("FAQ alternative is the phone app and does not install the desktop app here", () => {
  assert.match(faq, /Use the Grok Bot app on your phone and sign in with the same Cursor account/);
  assert.match(faq, /That does not install anything on this computer/);
  assert.match(faq, /href="https:\/\/cursor\.com\/help\/grok-bot\/mobile"/);
  assert.match(faq, /href="https:\/\/docs\.x\.ai\/grok-bot\/mobile"/);
  assert.match(faq, /href="https:\/\/apps\.apple\.com\/app\/id6794501026"/);
  assert.match(faq, /href="https:\/\/play\.google\.com\/store\/apps\/details\?id=ai\.x\.grok\.bot"/);
  assert.match(faq, /Updating, recovering, or resetting the bot computer is still desktop-only/);
  assert.doesNotMatch(
    faq,
    /install the desktop app on this computer to reach your bots/i
  );
});

test("Cursor-plan empty state explains the screen and shares the FAQ", () => {
  const cursor = section("cursor-plan");
  assert.match(cursor, /data-empty-list="false"/);
  assert.match(cursor, /data-buy-supergrok-only="false"/);
  assert.match(cursor, /Your bots are not in this chat/);
  assert.match(cursor, /There is no Grok Bot browser client today/);
  assert.match(cursor, /Your Cursor plan already includes Grok Bot/);
  assert.match(cursor, /Buying SuperGrok is not required/);
  assert.match(cursor, /href="#browser-access"/);
  assert.match(cursor, /does not install anything on this computer/);
  assert.doesNotMatch(cursor, /only (?:path|way).{0,40}SuperGrok/i);
  assert.doesNotMatch(cursor, /Buy SuperGrok/i);
  assert.doesNotMatch(cursor, /No bots yet/i);
});

test("SuperGrok empty state explains the screen and shares the FAQ", () => {
  const grok = section("supergrok");
  assert.match(grok, /data-empty-list="false"/);
  assert.match(grok, /data-buy-cursor-only="false"/);
  assert.match(grok, /Your bots are not in this chat/);
  assert.match(grok, /There is no Grok Bot browser client today/);
  assert.match(grok, /Your linked SuperGrok plan already includes Grok Bot/);
  assert.match(grok, /href="#browser-access"/);
  assert.match(grok, /does not install anything on this computer/);
  assert.doesNotMatch(grok, /No bots yet/i);
  assert.doesNotMatch(grok, /Buy Cursor/i);
});

test("docs FAQ and both web-app states use one answer", () => {
  const cursor = section("cursor-plan");
  const grok = section("supergrok");
  const shared = "There is no Grok Bot browser client today. grok.com is Grok chat, a different product, and it does not list your bots.";
  const next = "Use the Grok Bot app on your phone and sign in with the same Cursor account. That does not install anything on this computer.";
  for (const block of [faq, cursor, grok]) {
    assert.ok(block.includes(shared), "shared sentence missing");
    assert.ok(block.includes(next), "shared next step missing");
  }
  assert.equal((html.match(/id="browser-access"/g) || []).length, 1);
  assert.equal((html.match(/href="#browser-access"/g) || []).length, 2);
});

console.log("simulation scenarios passed");
