import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import INavigation from '../../models/data/INavigation';

export const Navigation = (props: INavigation) => {
  console.log('Navigation Component', props);
  return (
    <div>
      <p>Navigation Component</p>
    </div>
  );
};
