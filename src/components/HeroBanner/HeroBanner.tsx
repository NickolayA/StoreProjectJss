import * as React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';

export const HeroBanner = (props: any) => {
  const x: any = React.createContext(null);

  <div>
    <p>HeroBanner Component</p>
    <Text field={props.fields.heading} />
  </div>;
};
