import * as React from 'react';
import { Text, Image } from '@sitecore-jss/sitecore-jss-react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import IHeroBanner from '../../models/data/IHeroBanner';

export const HeroBanner = (props: ISitecoreProps<IHeroBanner>): JSX.Element => {
  return (
    <React.Fragment>
      <Text field={props.fields.Text} tag="p" />
      <Image field={props.fields.Image} />
    </React.Fragment>
  );
};
