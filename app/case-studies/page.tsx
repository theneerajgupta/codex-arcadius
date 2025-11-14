import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from '../lib/getRouteItems';

export default async function CaseStudies() {
  const RouteItems = getRouteItems('/case-studies');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
