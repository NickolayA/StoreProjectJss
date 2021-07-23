import * as React from 'react';
import { Image, RichText } from '@sitecore-jss/sitecore-jss-react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import IHeroBanner from '../../models/data/IHeroBanner';
import styles from './HeroBanner.module.css'

import { getMediaSizeParams, MediaSize } from '../../utils/MediaSizeParams';

export const HeroBanner = (props: ISitecoreProps<IHeroBanner>): JSX.Element => {
  return (
    <React.Fragment>
      <div className="hero-wrap">
        <Image field={props.fields.Image} className={styles.hero_image} srcSet={[{ ...getMediaSizeParams(MediaSize.Small) }, { ...getMediaSizeParams(MediaSize.Medium) }, { ...getMediaSizeParams(MediaSize.Large) }, { ...getMediaSizeParams(MediaSize.Big) }]} />
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
