import React, { useContext } from 'react';
import { Text, Image, DateField, isExperienceEditorActive } from '@sitecore-jss/sitecore-jss-react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import ITopProducts from '../../models/data/ITopProducts';
import { Link } from 'react-router-dom';
import { DictionaryContext } from '../../utils/DictionaryContext';

export const TopProducts = ({ fields }: ISitecoreProps<ITopProducts>): JSX.Element => {
  const dictionaryContext = useContext(DictionaryContext);
  const { OfferDate } = dictionaryContext.phrases;

  return (
    <section className="ftco-section" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
            <Text tag="span" className="subheading" field={fields?.Title} />
            <Text field={fields?.Description} tag="h2" />
          </div>
        </div>

        <div className="row">
          {fields?.ListOfProducts.map((product) => {
            return (
              <div className="col-md-3 d-flex" key={product.id}>
                <div className="product ftco-animate fadeInUp ftco-animated">

                  {!isExperienceEditorActive() && (<Link to={product.url}>
                    <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${product.fields?.Image?.value?.src})` }}>
                    </div>
                  </Link>)}

                  {isExperienceEditorActive() &&
                    <Image width="200px" height="350px" field={product.fields?.Image} style={{ objectFit: 'cover' }} />
                  }
                  <div className="text text-center">
                    <Text tag="span" className="seller" field={product.fields?.Quantity} />
                    <Text tag="span" className="category" field={product.fields?.Title} />
                    <Text tag="h2" field={product.fields?.ShortDescription} />
                    {OfferDate} <DateField tag="span" className="price" field={{ ...product.fields?.OfferDate }} render={(date) => (date?.toLocaleDateString())} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
