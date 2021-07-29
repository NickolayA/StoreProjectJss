import React from 'react'
import { Text, Link, isExperienceEditorActive } from '@sitecore-jss/sitecore-jss-react';
import IUsefulLinks from '../../models/data/IUsefulLinks';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import { Link as RouteLink } from 'react-router-dom';

export const UsefulLinks = ({ fields }: ISitecoreProps<IUsefulLinks>) => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-sm-12 col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <Text field={fields?.Title} tag="h2" className="ftco-heading-2" />
            <ul className="list-unstyled">
              {fields?.Links.map((linkItem, index) => {
                return (
                  <li key={`${index}-${linkItem.id}`}>
                    <span className="fa fa-chevron-right mr-2"></span>
                    {!isExperienceEditorActive() ?
                      [linkItem.fields?.Link.value.linktype === 'internal' ?
                        (<RouteLink to={linkItem.fields.Link.value.href === undefined ? '/' : linkItem.fields.Link.value.href}>{linkItem.fields.Link.value.text}</RouteLink>) :
                        <Link field={{ ...linkItem.fields?.Link }} />] : (<Link field={{ ...linkItem.fields?.Link }} />)
                    }
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
