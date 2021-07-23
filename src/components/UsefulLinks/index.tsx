import * as React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import IUsefulLinks from '../../models/data/IUsefulLinks';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';

export const UsefulLinks = ({ fields }: ISitecoreProps<IUsefulLinks>) => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-sm-12 col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <Text field={fields.Title} tag="h2" className="ftco-heading-2" />
            <ul className="list-unstyled">
              {fields.Links.map((linkItem, index) => {
                return (
                  <li key={`${index}-${linkItem.id}`}>
                    <span className="fa fa-chevron-right mr-2"></span>
                    <Link field={linkItem.fields.Link} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
