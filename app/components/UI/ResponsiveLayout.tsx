import ResponsiveLayoutClient from './ResponsiveLayoutClient';

import type { RouteItem } from '../../lib/getRouteItems';

type ResponsiveLayoutProp = {
  RouteItems: RouteItem[];
};

async function ResponsiveLayout({ RouteItems }: ResponsiveLayoutProp) {
  return <ResponsiveLayoutClient RouteItems={RouteItems} />;
}

export default ResponsiveLayout;
