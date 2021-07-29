import React, { useContext } from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom'
import { DictionaryContext } from '../../utils/DictionaryContext';
import ILayout from '../../models/data/ILayout';

export const Header = (props: ILayout): JSX.Element => {
  const dictionaryContext = useContext(DictionaryContext);
  const { SiteLogoText } = dictionaryContext.phrases;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">{SiteLogoText}</Link>
        <div className="order-lg-last btn-group">
          <a href="#" className="btn-cart dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
          </a>
        </div>
        <Placeholder name="store-header" rendering={props.rendering} />
      </div>
    </nav>
  );
};
