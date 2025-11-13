// app/lib/getAvailableRoutes.ts
import fs from 'fs';
import path from 'path';

export function getAvailableRoutes(
  baseDir = path.join(process.cwd(), 'app'),
): string[] {
  const routes: string[] = [];

  function scan(dir: string, prefix = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    const hasPage = entries.some(
      (entry) => entry.isFile() && /^page\.(tsx|ts|js|jsx)$/.test(entry.name),
    );

    if (hasPage) {
      routes.push(prefix || '/');
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subPath = path.join(dir, entry.name);
        const subPrefix = prefix + '/' + entry.name;
        scan(subPath, subPrefix);
      }
    }
  }

  scan(baseDir);
  return routes.sort();
}
