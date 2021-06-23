import {
  SitecoreContextReactContext,
  SitecoreContextState,
} from '@sitecore-jss/sitecore-jss-react';
import React, { useContext, FunctionComponent, useState, useEffect } from 'react';
import { getApolloContext } from 'react-apollo';
import IIntro from '../../models/data/IIntro';
import ISitecoreContext from '../../models/generic/ISitecoreContext';
import ISitecoreField from '../../models/generic/ISitecoreField';
import ISitecoreItem from '../../models/generic/ISitecoreItem';
import IntroQuery from '../../queries/IntroQuery';

export const Intro: FunctionComponent = (): JSX.Element => {
  const sitecoreContext = useContext<SitecoreContextState<ISitecoreContext>>(
    SitecoreContextReactContext
  ).context;
  const apolloContext = useContext(getApolloContext());

  const [introFieldValues, setIntroFieldValues] = useState<IIntro>({
    Title: '',
    Description: '',
  });

  useEffect(() => {
    apolloContext.client
      ?.query({
        query: IntroQuery(sitecoreContext.itemId, sitecoreContext.language),
      })
      .then((result) => {
        const item: ISitecoreItem<ISitecoreField<string>> = result.data.item;

        if (item !== null) {
          item.fields.map((field: ISitecoreField<string>) => {
            if (field.name === 'Title') {
              introFieldValues.Title = field.value;
            }
            if (field.name === 'Description') {
              introFieldValues.Description = field.value;
            }
          });

          setIntroFieldValues({ ...introFieldValues });
        }
      });
  }, []);

  return (
    <React.Fragment>
      <h1>{introFieldValues.Title}</h1>
      <h2>{introFieldValues.Description}</h2>
    </React.Fragment>
  );
};
