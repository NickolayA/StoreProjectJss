import React, { Fragment } from 'react';
import INavigation from '../../models/data/INavigation';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import { Link } from 'react-router-dom';

export const Navigation = ({ fields: { Pages } }: ISitecoreProps<INavigation>): JSX.Element => {
  return (
    <Fragment>
      {Pages.map((page) => {
        return (
          <Link key={page.id} to={page.url} style={{ marginRight: '10px' }}>
            {page.displayName}
          </Link>
        );
      })}
    </Fragment>
  );
};
