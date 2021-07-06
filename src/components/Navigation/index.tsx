import React, { Fragment } from 'react';
import INavigation from '../../models/data/INavigation';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = (props: ISitecoreProps<INavigation>): JSX.Element => {
  const location = useLocation();

  return (
    <Fragment>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
      </button>

      <div className="collapse navbar-collapse" id="ftco-nav">
        <ul className="navbar-nav ml-auto">
          {props.fields && props.fields.Pages && props.fields.Pages.map((page) => {
            return (
              <li key={page.id} className={`nav-item ${location.pathname === page.url ? 'active' : ''}`}>
                <Link to={page.url} className="nav-link">
                  {page.displayName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};
