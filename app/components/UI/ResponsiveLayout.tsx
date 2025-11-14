import ResponsiveLayoutClient from './ResponsiveLayoutClient';

type ResponsiveLayoutProp = {
  routes: string[];
};

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

async function ResponsiveLayout({ routes }: ResponsiveLayoutProp) {
  return <ResponsiveLayoutClient />;
}

export default ResponsiveLayout;
