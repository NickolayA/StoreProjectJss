import React, { useContext } from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import { DictionaryContext } from '../../utils/DictionaryContext';

export const Footer = (props: any) => {

  const dictionaryContext = useContext(DictionaryContext);

  const { AllRightReserved, Copyright } = dictionaryContext.phrases;

  return (
    <footer className={`${props.rendering.placeholders.footer.length > 0 ? 'ftco-footer' : ''}`}>
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
