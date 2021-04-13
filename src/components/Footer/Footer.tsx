import React from 'react';
import { Placeholder, Text } from '@sitecore-jss/sitecore-jss-react';
import IFooter from '../../models/data/IFooter';

export const Footer = (props: IFooter) => {
  return (
    <div>
      <Placeholder name="footer" rendering={props.rendering} />
    </div>
  );
};
