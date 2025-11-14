import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from '../../lib/getRouteItems';

export default async function Bio() {
  const RouteItems = getRouteItems('/about/bio');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
