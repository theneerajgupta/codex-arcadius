import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from '@/lib/getRouteItems';

export default async function Blog() {
  const RouteItems = getRouteItems('/blog');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
