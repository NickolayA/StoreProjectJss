import React from 'react';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';
import ScriptTag from 'react-script-tag';
import {DictionaryContextProvider} from './utils/DictionaryContext';

import './assets/css/animate.css';
import './assets/css/owl.carousel.min.css';
import './assets/css/owl.theme.default.min.css';
import './assets/css/magnific-popup.css';
import './assets/css/flaticon.css';
import './assets/css/style.css';

const Layout = ({ route }) => (
	<React.Fragment>
		<DictionaryContextProvider>
			<Placeholder name="jss-main" rendering={route} />
		</DictionaryContextProvider>
		{/* <ScriptTag type="text/javascript" src="./assets/js/jquery.min.js" /> */}
	</React.Fragment>
);

export default Layout;
