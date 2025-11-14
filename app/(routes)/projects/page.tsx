import { getRoutePath } from '@/lib/getRoutePath';
import { getAvailableRoutes } from '@/lib/getAvailableRoutes';
import ResponsiveLayout from '@/components/UI/ResponsiveLayout';

export default async function Projects() {
  // You can also pass dynamic data here if you want later
  const routePath = getRoutePath(import.meta.url);

  const routeList = getAvailableRoutes();

  return <ResponsiveLayout routes={routeList} />;
}
