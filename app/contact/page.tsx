import { getRoutePath } from '@/app/lib/getRoutePath';
import { getAvailableRoutes } from '@/app/lib/getAvailableRoutes';
import ResponsiveLayout from '@/app/components/UI/ResponsiveLayout';

export default async function Contact() {
  // You can also pass dynamic data here if you want later
  const routePath = getRoutePath(import.meta.url);

  const routeList = getAvailableRoutes();

  return <ResponsiveLayout routes={routeList} />;
}
