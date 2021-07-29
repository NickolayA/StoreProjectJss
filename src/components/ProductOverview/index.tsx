import React from 'react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import ISitecoreProduct from '../../models/data/ISitecoreProduct';
import { Text, RichText, Image, DateField } from '@sitecore-jss/sitecore-jss-react';
import { useContext } from 'react';
import { DictionaryContext } from '../../utils/DictionaryContext';
import { getMediaSizeParams, MediaSize } from '../../utils/MediaSizeParams';

export const ProductOverview = (
  props: ISitecoreProps<ISitecoreProduct>
): JSX.Element => {
  const dictionaryContext = useContext(DictionaryContext);
  const { Quantity, OfferDate } = dictionaryContext.phrases;

  return (
    <section className="ftco-section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 ftco-animate fadeInUp ftco-animated">
            <Image field={props.fields?.Image} className="img-fluid" srcSet={[{ ...getMediaSizeParams(MediaSize.Small) }, { ...getMediaSizeParams(MediaSize.Medium) }]} />
          </div>
          <div className="col-lg-6 product-details pl-md-5 ftco-animate fadeInUp ftco-animated">
            <Text field={props.fields?.ShortDescription} tag="h3" />

            <p className="price"><span>{Quantity}</span> <Text field={props.fields?.Quantity} tag="span" /></p>
            <p className="price"><span>{OfferDate} <DateField field={{ ...props.fields?.OfferDate }} render={date => (date?.toLocaleDateString())} /></span></p>
            <RichText field={props.fields?.Description} tag="div" />
            <div className="row mt-4">
              <div className="w-100"></div>
              <div className="col-md-12">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
