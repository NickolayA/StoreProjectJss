import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

export const Header = (props: any) => {
  return (
    <div>
      <Placeholder name="header" rendering={props.rendering} />
    </div>
  );
};
