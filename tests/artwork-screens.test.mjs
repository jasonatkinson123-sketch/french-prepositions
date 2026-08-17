import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import test from "node:test";

const source = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const artwork = [
  ["map", "map.webp"],
  ["town", "chapter-2-town.webp"],
  ["journey", "chapter-3-journey.webp"],
  ["position", "chapter-4-position.webp"],
  ["time", "chapter-5-time.webp"],
  ["de-a", "chapter-6-de-a.webp"],
  ["verbs", "chapter-7-verbs.webp"],
  ["adjectives", "chapter-8-adjectives.webp"],
  ["activities", "chapter-9-activities.webp"],
];

test("every available chapter has a render branch and packaged artwork", () => {
  for (const [screen, filename] of artwork) {
    assert.match(source, new RegExp(`screen === ["']${screen}["']`));
    assert.match(source, new RegExp(`/notebook-assets/${filename.replaceAll(".", "\\.")}`));

    for (const root of ["public", "dist/client"]) {
      const file = new URL(`../${root}/notebook-assets/${filename}`, import.meta.url);
      assert.equal(existsSync(file), true, `${filename} is missing from ${root}`);
      assert.ok(statSync(file).size > 0, `${filename} is empty in ${root}`);
    }
  }
});

test("the shared artwork page renders a real image layer with a background fallback", () => {
  assert.match(source, /style=\{\{ backgroundImage: `url\("\$\{image\}"\)` \}\}/);
  assert.match(source, /<img className="artwork-image" src=\{image\}/);
});

test("chapters 8 and 9 retain independent progress keys", () => {
  const chapterEightKey = source.match(/ADJECTIVE_MASTERY_KEY = "([^"]+)"/)?.[1];
  const chapterNineKey = source.match(/ACTIVITY_MASTERY_KEY = "([^"]+)"/)?.[1];
  assert.ok(chapterEightKey);
  assert.ok(chapterNineKey);
  assert.notEqual(chapterEightKey, chapterNineKey);
});
