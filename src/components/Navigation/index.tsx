import React, { useContext } from 'react';
import INavigation from '../../models/data/INavigation';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';
import { Link, useLocation } from 'react-router-dom';
import { DictionaryContext } from '../../utils/DictionaryContext';
import LanguageTumbler from './LanguageTumbler';

export const Navigation = (props: ISitecoreProps<INavigation>): JSX.Element => {
  const dictionaryContext = useContext(DictionaryContext);
  const { MobileMenuLabel } = dictionaryContext.phrases;

  const location = useLocation();
  console.log(props);

  return (
    <>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> {MobileMenuLabel}
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
          <LanguageTumbler />
        </ul>
      </div>
    </>
  );
};
