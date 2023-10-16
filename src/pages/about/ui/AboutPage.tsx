import { FC } from 'react';

import { Text } from 'shared/ui';

const AboutPage: FC = () => (
  <div className="page">
    <Text text={{ tKey: 'pageName', ns: 'aboutPage' }} Tag="h1" />
  </div>
);

export default AboutPage;
