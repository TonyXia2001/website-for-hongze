import fs from "node:fs/promises";
import path from "node:path";
import convert from "heic-convert";

const root = process.cwd();
const inPath = path.join(root, "public", "photos", "IMG_5562.HEIC");
const outPath = path.join(root, "public", "photos", "IMG_5562.jpg");

const inputBuffer = await fs.readFile(inPath);
const outputBuffer = await convert({
  buffer: inputBuffer,
  format: "JPEG",
  quality: 0.92,
});

await fs.writeFile(outPath, outputBuffer);
console.log(`Wrote ${outPath}`);

