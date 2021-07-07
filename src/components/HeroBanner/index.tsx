import * as React from 'react';
import { Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import IHeroBanner from '../../models/data/IHeroBanner';

export const HeroBanner = (props: ISitecoreProps<IHeroBanner>): JSX.Element => {
  return (
    <React.Fragment>
      <div className="hero-wrap" style={{ backgroundImage: `url(${props?.fields?.Image?.value?.src} )` }} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center justify-content-center">
            <div className="col-md-8 ftco-animate d-flex align-items-end fadeInUp ftco-animated">
              <div className="text w-100 text-center">
                <h1 className="mb-4"><RichText field={props.fields.Text} /></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
};
