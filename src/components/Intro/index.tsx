import {
  SitecoreContextReactContext,
  SitecoreContextState,
} from '@sitecore-jss/sitecore-jss-react';
import React, { useContext, FunctionComponent, useState, useEffect } from 'react';
import { getApolloContext } from 'react-apollo';
import IIntro from '../../models/data/IIntro';
import ISitecoreContext from '../../models/generic/ISitecoreContext';
import IntroQuery from '../../queries/IntroQuery';

export const Intro: FunctionComponent = (): JSX.Element => {
  const sitecoreContext = useContext<SitecoreContextState<ISitecoreContext>>(
    SitecoreContextReactContext
  ).context;
  const apolloContext = useContext(getApolloContext());

  const [introFieldValues, setIntroFieldValues] = useState<IIntro>({
    Title: {
      value: ''
    },
    Description: {
      value: ''
    }
  });

  useEffect(() => {
    apolloContext.client
      ?.query({
        query: IntroQuery(sitecoreContext.itemId, sitecoreContext.language),
      })
      .then((result) => {
        const item: any = result.data.item;

        if (item !== null) {
          setIntroFieldValues({ Title: item.Title.jss, Description: item.Description.jss });
        }
      });
  }, []);

  return (
    <section className="ftco-intro">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-12 d-flex">
            <div className="intro color-2 w-100 ftco-animate fadeInUp ftco-animated">
              <div className="text">
                <h2 style={{ textAlign: 'center' }}>{introFieldValues.Title.value}</h2>
                <p style={{ textAlign: 'center' }}>{introFieldValues.Description.value}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
