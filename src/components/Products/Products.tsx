import React, { FunctionComponent, Fragment } from 'react';
import { useContext, useState, useEffect } from 'react';
import {
  SitecoreContextReactContext,
  SitecoreContextState,
} from '@sitecore-jss/sitecore-jss-react';
import { getApolloContext } from 'react-apollo';
import ContentSearchProductsQuery from '../../queries/ContentSearchProductsQuery';
import ISitecoreContext from '../../models/generic/ISitecoreContext';
import { ProductOverviewPageTemplate } from '../../Constants';
import ISitecoreItem from '../../models/generic/ISitecoreItem';
import ISitecoreField from '../../models/generic/ISitecoreField';
import IProduct from '../../models/data/IProduct';
import Product from '../../models/data/Product';

// TODO Change ResultItem interface
interface ResultItem {
  item: ISitecoreItem<ISitecoreField<string>>;
}

export const Products: FunctionComponent = (): JSX.Element => {
  const sitecoreContext = useContext<SitecoreContextState<ISitecoreContext>>(
    SitecoreContextReactContext
  ).context;
  const apolloContext = useContext(getApolloContext());

  const [products, setProducts] = useState<Array<IProduct>>([]);

  useEffect(() => {
    apolloContext.client
      ?.query({
        query: ContentSearchProductsQuery(
          sitecoreContext.itemId,
          ProductOverviewPageTemplate,
          sitecoreContext.language
        ),
      })
      .then((result) => {
        const newProducts: Array<IProduct> = [];
        const items: Array<ResultItem> = result.data.search.results.items;

        items.map((item: ResultItem) => {
          const resultItem = item.item;
          const product: IProduct = new Product();

          resultItem.fields.map((field: ISitecoreField<string>) => {
            if (field.name === 'Title') {
              product.Title = field.value;
            } else if (field.name === 'Image') {
              product.Image = field.jss?.value.src;
            } else if (field.name === 'OfferDate') {
              product.OfferDate = field.value;
            }
          });

          newProducts.push(product);
        });

        setProducts(newProducts);
      });
  }, []);

  return (
    <Fragment>
      {products.map((product: IProduct, index: number) => {
        return (
          <ul key={index}>
            <li>{product.Title}</li>
            <li>{product.Image}</li>
            <li>{product.OfferDate}</li>
          </ul>
        );
      })}
      ;
    </Fragment>
  );
};

export default Products;
