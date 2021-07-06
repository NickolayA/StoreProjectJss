import React, { Fragment } from 'react';
import INavigation from '../../models/data/INavigation';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = ({ fields: { Pages } }: ISitecoreProps<INavigation>): JSX.Element => {

  const location = useLocation();

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">Liquor <span>store</span></Link>
          <div className="order-lg-last btn-group">
            <a href="#" className="btn-cart dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
              aria-haspopup="true" aria-expanded="false">
            </a>
          </div>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>

          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              {Pages.map((page) => {
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
        </div>
      </nav>
    </Fragment>
  );
};
