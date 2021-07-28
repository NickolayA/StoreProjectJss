const config = require('../temp/config');

import React, { FunctionComponent, useEffect, useState, useRef } from 'react';
import StoreDictionaryService from './StoreDictionaryService'
import { DictionaryPhrases, useSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import ISitecoreContext from '../models/generic/ISitecoreContext';

interface IDictionaryContext {
    phrases: DictionaryPhrases;
}

export const DictionaryContext = React.createContext<IDictionaryContext>({ phrases: {} });

export const DictionaryContextProvider: FunctionComponent = ({ children }) => {

    const { sitecoreContext } = useSitecoreContext<ISitecoreContext>();

    const dictionaryService = useRef<StoreDictionaryService>(new StoreDictionaryService(config.sitecoreApiHost, sitecoreContext.site.name, config.sitecoreApiKey));

    const [phrases, setPhrases] = useState<DictionaryPhrases>({});

    useEffect(() => {
        if (sitecoreContext) {
            dictionaryService.current.fetchDictionaryData(sitecoreContext.language).then((result) => {
                setPhrases(result);
            })
        }
    }, [sitecoreContext]);

    return (<DictionaryContext.Provider value={{ phrases }}>{children}</DictionaryContext.Provider>);
}
