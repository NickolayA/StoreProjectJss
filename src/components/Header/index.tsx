import React, { Fragment } from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import { Link } from 'react-router-dom'

export const Header = (props: ISitecoreProps): JSX.Element => {
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
          <Placeholder name="header" rendering={props.rendering} />
        </div>
      </nav>
    </Fragment>
  );
};
