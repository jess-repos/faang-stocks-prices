import fs from "fs";
import path from "path";

export default function getSlugs() {
  const dataDirectory = path.join(process.cwd(), "src", "data");
  const dataFilenames = fs.readdirSync(dataDirectory);
  return dataFilenames.map((fileName) => fileName.replace(/\.json$/, ""));
}
