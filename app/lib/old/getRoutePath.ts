import path from 'path';
import { fileURLToPath } from 'url';

export function getRoutePath(metaUrl: string): string {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = path.dirname(__filename);

  const appRoot = path.join(process.cwd(), 'app');

  // Handle both dev & build environments
  let normalizedDir = __dirname
    .replace(path.join(process.cwd(), '.next', 'server', 'app'), appRoot)
    .replace(path.join(process.cwd(), '.next', 'app'), appRoot);

  // Compute route path relative to /app
  const relativePath = path.relative(appRoot, normalizedDir);
  const routePath = '/' + relativePath.replace(/\\/g, '/');

  // Root-level routes will appear as "/"
  return routePath === '/page' ? '/' : routePath;
}
