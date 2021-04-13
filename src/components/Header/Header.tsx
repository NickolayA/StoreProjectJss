import React from 'react';
import { Text, Placeholder } from '@sitecore-jss/sitecore-jss-react';
import IHeader from '../../models/data/IHeader';

export const Header = (props: IHeader) => {
  console.log(props);
  return (
    <div>
      <Placeholder name="header" rendering={props.rendering} />
    </div>
  );
};
