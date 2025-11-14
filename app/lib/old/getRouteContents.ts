import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

type RouteItem = {
  name: string;
  type: 'route' | 'file';
  path: string; // clearer than 'route'

  // Only for files
  fileType?: 'markdown' | 'pdf' | 'graphics' | 'audio' | 'video';
  extension?: string;
  size?: number; // in bytes
  lastModified?: string; // ISO date string

  // Only for routes
  children?: RouteItem[]; // recursive nesting
};

type RouteContent = {
  basePath: string;
  items: RouteItem[];
};

export function getRouteContents(
  metaUrl: string,
  route: string,
): RouteContent | void {
  const __filename = fileURLToPath(metaUrl);
  const __dirname = path.dirname(__filename);
  const currentLocation = path.join(process.cwd(), 'app', route);
  console.log('running getRouteContents...');
  console.log(__filename);
  console.log(__dirname);
  console.log(process.cwd());
  console.log(route);
  console.log(currentLocation);

  const entries = fs.readdirSync(currentLocation, {
    withFileTypes: true,
  });

  console.log(entries);

  const items = [];

  for (const entry of entries) {
    let extension: string | undefined;

    if (entry.isFile()) {
      extension = entry.name.split('.').pop(); // gets last part after "."
    }

    const item = {
      name: entry.name,
      type: entry.isFile() ? 'file' : 'route',
      extension, // only defined for files
    };

    if (extension !== 'tsx') items.push(item);
  }

  console.log(items);
}
