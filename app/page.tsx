import ResponsiveLayout from '@/components/UI/ResponsiveLayout';

import { getRoutePath } from '@/lib/old/getRoutePath';
import { getAvailableRoutes } from '@/lib/old/getAvailableRoutes';
import { getRouteContents } from '@/lib/old/getRouteContents';
// You can also pass dynamic data here if you want later
// // const routePath = getRoutePath(import.meta.url);
// const routeList = getAvailableRoutes();
// getRouteContents(import.meta.url, '/');

export default async function Home() {
  return <ResponsiveLayout />;
}
