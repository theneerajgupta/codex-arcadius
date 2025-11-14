import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from '../lib/getRouteItems';

export default async function Tools() {
  const RouteItems = getRouteItems('/about');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
