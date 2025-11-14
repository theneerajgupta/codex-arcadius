import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from './lib/getRouteItems';

export default async function Home() {
  const RouteItems = getRouteItems('/');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
