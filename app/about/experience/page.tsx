import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from '../../lib/getRouteItems';

export default async function Experince() {
  const RouteItems = getRouteItems('/about/experience');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
