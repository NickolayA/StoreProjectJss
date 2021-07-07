import * as React from 'react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import ISitecoreProduct from '../../models/data/ISitecoreProduct';
import { Text, RichText, Image, DateField } from '@sitecore-jss/sitecore-jss-react';
import { Fragment, FunctionComponent } from 'react';

export const ProductOverview = (
  props: ISitecoreProps<ISitecoreProduct>
): JSX.Element => {
  return (
    <Fragment>
      <section className="ftco-section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
              <a href={props.fields.Image.value?.src} className="image-popup prod-img-bg"><Image field={props.fields.Image} className="img-fluid" /></a>
              {/* {TODO srcset} */}
            </div>
            <div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
              <Text field={props.fields.ShortDescription} tag="h3" />

              <p className="price"><Text field={props.fields.Quantity} tag="span" /></p>
              <p className="price"><DateField field={props.fields.OfferDate} tag="span" /></p>
              <RichText field={props.fields.Description} tag="div" />
              <div className="row mt-4">
                <div className="w-100"></div>
                <div className="col-md-12">
                  <p style={{ color: '#000' }}>80 piece available</p>
                  {/* {TODO use dictionary} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment >
  );
};
