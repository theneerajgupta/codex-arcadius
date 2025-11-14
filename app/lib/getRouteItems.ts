import fs from 'fs';
import path from 'path';

type FileType = 'markdown' | 'pdf' | 'graphics' | 'audio' | 'video' | 'unknown';

export type RouteItem = {
  name: string;
  type: 'route' | 'file' | 'directory';
  path: string; // clearer than 'route'
  // Only for files
  fileType?: FileType;
  extension?: string;
};

function getRouteItems(route: string) {
  return readContent(route);
}

function cleanPath(route: string): string {
  const appDir = path.join(process.cwd(), 'app/');
  const completeDir = path.join(appDir, route);
  const removeFileTag = completeDir.replace('file://', '');
  const normalized = removeFileTag.replace(/\\/g, path.sep);
  return normalized;
}

function directoryType(cwd: string, dirName: string) {
  const completeDir = path.join(cwd, dirName);
  const items = fs.readdirSync(completeDir, { withFileTypes: true });
  const isRoute = items.some(
    (item) => item.isFile() === true && item.name === 'page.tsx',
  );
  return isRoute ? 'route' : 'directory';
}

function fileType(ext: string): FileType {
  switch (ext) {
    case 'md':
    case 'mdx':
      return 'markdown';

    case 'mp3':
      return 'audio';

    case 'mp4':
    case 'avi':
    case 'mkv':
      return 'video';

    case 'jpg':
    case 'jgeg':
    case 'png':
    case 'gif':
    case 'svg':
      return 'graphics';

    case 'pdf':
      return 'pdf';

    default:
      return 'unknown';
  }
}

function readContent(route: string) {
  const cwd = cleanPath(route);
  const items = fs.readdirSync(cwd, { withFileTypes: true });
  const formattedItems: RouteItem[] = items.map((item) => ({
    name: item.name,
    type: item.isDirectory() ? directoryType(cwd, item.name) : 'file',
    path: path.join(cwd, item.name),
    fileType: item.isFile()
      ? fileType(path.extname(item.name).slice(1))
      : undefined,
    extension: item.isFile() ? path.extname(item.name).slice(1) : undefined,
  }));
  return formattedItems;
}

export default getRouteItems;
