import { FC } from 'react';

import { Text } from 'shared/ui';

const MainPage:FC = () => (
  <div className="page">
    <Text text={{ tKey: 'pageName', ns: 'mainPage' }} Tag="h1" />
  </div>
);

export default MainPage;
