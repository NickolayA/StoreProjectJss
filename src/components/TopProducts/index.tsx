import React, { FunctionComponent } from 'react';
import { Text, Image, DateField, isExperienceEditorActive } from '@sitecore-jss/sitecore-jss-react';
import ISitecoreProduct from '../../models/data/ISitecoreProduct';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import ITopProducts from '../../models/data/ITopProducts';
import { Link } from 'react-router-dom';

export const TopProducts = (props: ISitecoreProps<ITopProducts>): JSX.Element => {
  return (
    <React.Fragment>
      <section className="ftco-section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <Text tag="span" className="subheading" field={props.fields.Title} />
              <Text field={props.fields.Description} tag="h2" />
            </div>
          </div>

          <div className="row">
            {props.fields.ListOfProducts.map((product) => {
              return (
                <div className="col-md-3 d-flex" key={product.id}>
                  <div className="product ftco-animate fadeInUp ftco-animated">
                    <Link to={product.url}>
                      {!isExperienceEditorActive() && <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: `url(${product.fields.Image?.value?.src})` }}>
                      </div>}
                    </Link>
                    {isExperienceEditorActive() && <div className="img d-flex align-items-center justify-content-center">
                      <Image width="200px" height="350px" field={product.fields.Image} style={{ objectFit: 'cover' }} />
                    </div>}
                    <div className="text text-center">
                      <Text tag="span" className="category" field={product.fields.Title} />
                      <Text tag="h2" field={product.fields.ShortDescription} />
                      <Text tag="span" className="price" field={product.fields.Quantity} />
                      {/* TODO use dictionary for quantity */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
