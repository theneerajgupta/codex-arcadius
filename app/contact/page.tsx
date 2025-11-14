import ResponsiveLayout from '@/components/UI/ResponsiveLayout';
import getRouteItems from '../lib/getRouteItems';

export default async function Contact() {
  const RouteItems = getRouteItems('/contact');
  return <ResponsiveLayout RouteItems={RouteItems} />;
}
