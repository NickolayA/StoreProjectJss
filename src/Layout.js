import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const Layout = ({ route }) => (
  <React.Fragment>
    <div className="container">
      <Placeholder name="jss-main" rendering={route} />
    </div>
  </React.Fragment>
);

export default Layout;
