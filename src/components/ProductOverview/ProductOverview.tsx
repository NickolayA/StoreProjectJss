import * as React from 'react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import ISitecoreProduct from '../../models/data/ISitecoreProduct';
import { Text, RichText, Image, DateField } from '@sitecore-jss/sitecore-jss-react';

export class ProductOverview extends React.Component<ISitecoreProps<ISitecoreProduct>> {
  constructor(props: ISitecoreProps<ISitecoreProduct>) {
    super(props);
    console.log(props, 'PROduct OVerview');
  }

  render() {
    return (
      <div>
        <Text field={this.props.fields.Title} />
        <RichText field={this.props.fields.Description} />
        <Image field={this.props.fields.Image} />
        <DateField field={this.props.fields.OfferDate} />
        <Text field={this.props.fields.Quantity} />
      </div>
    );
  }
}
