import * as React from 'react';
import { Text, Link } from '@sitecore-jss/sitecore-jss-react';
import IUsefulLinks from '../../models/data/IUsefulLinks';
import { ISitecoreProps } from '../../models/generic/ISitecoreProps';

export const UsefulLinks = (props: ISitecoreProps<IUsefulLinks>) => {
  console.log(props);

  return (
    <React.Fragment>
      <ul>
        {props.fields.Links.map((linkItem, index) => {
          console.log(linkItem.fields);
          return (
            <li key={`${index}-${linkItem.id}`}>
              <Link field={linkItem.fields.Link} />
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};
