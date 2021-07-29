import React, { FunctionComponent } from 'react';
import { useContext, useState, useEffect } from 'react';
import {
  useSitecoreContext,
  DateField
} from '@sitecore-jss/sitecore-jss-react';
import { getApolloContext } from 'react-apollo';
import ContentSearchProductsQuery from '../../queries/ContentSearchProductsQuery';
import ISitecoreContext from '../../models/generic/ISitecoreContext';
import { ProductOverviewPageTemplate } from '../../Constants';
import IProduct from '../../models/data/IProduct';
import { Link } from 'react-router-dom'
import { DictionaryContext } from '../../utils/DictionaryContext';

export const Products: FunctionComponent = (): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext<ISitecoreContext>();
  const apolloContext = useContext(getApolloContext());
  const [products, setProducts] = useState<Array<IProduct>>([]);

  const dictionaryContext = useContext(DictionaryContext);
  const { OfferDate } = dictionaryContext.phrases;

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
        let productItems: IProduct[] = result.data.search.results.items.map((item: any) => item.item);
        productItems = productItems.map((item: any) => ({ Title: item.Title.jss, Image: item.Image.jss, OfferDate: item.OfferDate.jss, Url: item.url }));

        setProducts(productItems);
      });
  }, []);

  return (
    <section className="ftco-section" style={{ backgroundColor: 'white' }}>
      <div className="row">
        {products.map((product: IProduct, index: number) => {
          return (
            <div className="col-md-4 d-flex" key={`product-${index}`}>
              <div className="product ftco-animate fadeInUp ftco-animated">
                <Link to={product.Url}>
                  <div className="img d-flex align-items-center justify-content-center" style={{ backgroundImage: `url("${product.Image.value.src}")` }}>
                  </div>
                </Link>
                <div className="text text-center">
                  <h2>{product.Title.value}</h2>
                  <span className="price">{OfferDate} <DateField field={product.OfferDate} render={date => (date?.toLocaleDateString())} /></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
