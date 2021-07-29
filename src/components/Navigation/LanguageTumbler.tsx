import React from 'react'
import { useSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import { Link } from 'react-router-dom';
import ISitecoreContext from '../../models/generic/ISitecoreContext';

const LanguageTumbler = (): JSX.Element => {
    const { sitecoreContext } = useSitecoreContext<ISitecoreContext>();

    const { language } = sitecoreContext;
    const { availableLanguages } = sitecoreContext.site;

    return (
        <>
            {availableLanguages.map(lang => {
                if (lang !== language) {
                    return <li key={lang} className="nav-item"><Link className="nav-link" to={`/${lang}`}>{lang}</Link></li>
                }
            })}
        </>
    )
}

export default LanguageTumbler;
