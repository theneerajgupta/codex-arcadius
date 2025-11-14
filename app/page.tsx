import { getRoutePath } from '@/lib/getRoutePath';
import { getAvailableRoutes } from '@/lib/getAvailableRoutes';
import { getRouteContents } from '@/lib/getRouteContents';
import ResponsiveLayout from '@/components/UI/ResponsiveLayout';

export default async function Home() {
  // You can also pass dynamic data here if you want later
  const routePath = getRoutePath(import.meta.url);

  const routeList = getAvailableRoutes();

  getRouteContents(import.meta.url, '/');

  return <ResponsiveLayout routes={routeList} />;
}
