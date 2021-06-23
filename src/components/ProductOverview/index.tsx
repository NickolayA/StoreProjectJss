import * as React from 'react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import ISitecoreProduct from '../../models/data/ISitecoreProduct';
import { Text, RichText, Image, DateField } from '@sitecore-jss/sitecore-jss-react';
import { FunctionComponent } from 'react';

export const ProductOverview: FunctionComponent<ISitecoreProps<ISitecoreProduct>> = ({
  fields,
}): JSX.Element => {
  return (
    <>
      <Text field={fields.Title} />
      {/* <Image field={fields.Image} /> [srcset should be used for different screen sizes] */}
      <React.Fragment>
        <RichText field={fields.Description} tag="div" />
      </React.Fragment>
      <DateField field={fields.OfferDate} />
      <Text field={fields.Quantity} />
      <RichText field={fields.Description} tag="span" />
    </>
  );
};
