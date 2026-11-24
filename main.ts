import { writeFileSync } from "node:fs";

const entry =
  "That thud in my tray? That's me, dropping hints since 2 a.m.";

// Gate: 1-200 characters, one line, not only whitespace, no leading/trailing
// whitespace, no control characters, no trailing newline in the output.
if (
  !/^[^\n]{1,200}$/.test(entry) ||
  entry.trim().length === 0 ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error("entry fails gate: must be 1-200 chars, single line, no surrounding whitespace");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
writeFileSync(out, entry, "utf8");
