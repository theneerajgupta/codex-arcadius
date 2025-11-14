import ResponsiveLayout from '@/components/UI/ResponsiveLayout';

import getRouteItems from '@/lib/getRouteItems';
import type { RouteItem } from '@/lib/getRouteItems';

export default async function About() {
  const items = getRouteItems('/');
  const itemNames = items.map((item) => item.name);

  console.log(items);

  return <ResponsiveLayout />;
}
