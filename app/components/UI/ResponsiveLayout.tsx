import ResponsiveLayoutClient from './ResponsiveLayoutClient';

type ResponsiveLayoutProp = {
  routes: string[];
};

async function ResponsiveLayout({ routes }: ResponsiveLayoutProp) {
  return <ResponsiveLayoutClient routes={routes} />;
}

export default ResponsiveLayout;
