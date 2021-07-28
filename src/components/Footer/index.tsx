import React, { useContext } from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { DictionaryContext } from '../../utils/DictionaryContext';
import ILayout from '../../models/data/ILayout';

export const Footer = (props: ILayout): JSX.Element => {

  const dictionaryContext = useContext(DictionaryContext);

  const { AllRightReserved, Copyright } = dictionaryContext.phrases;

  return (
    <footer className="ftco-footer">
      <Placeholder name="footer" rendering={props.rendering} />
      <div className="container-fluid px-0 py-5 bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0" style={{ color: 'rgba(255, 255, 255, .5)' }}>
                {Copyright} {new Date().getFullYear()} {AllRightReserved}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
