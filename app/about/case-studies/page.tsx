import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from '../../lib/getRouteItems';

export default async function CaseStudies() {
  const RouteItems = getRouteItems('/about/case-studies');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
