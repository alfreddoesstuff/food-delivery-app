import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { IProduct } from '~/@types';

import { Header, CategoriesList, ProductsList } from '~/components';

import { Container, Margin } from '~/screens/Menu/styles';

const Menu: React.FC = () => {
  const { categories, typeOfCategory, products } = useSelector((state: any) => state.Menu);

  const productsFiltered = useMemo(() => {
    return products.filter((product: IProduct) => product.category === typeOfCategory);
  }, [typeOfCategory]);

  return (
    <Container>
      <Margin>
        <Header title="Cardápio" hasHeaderRight />
      </Margin>
      <CategoriesList data={categories} />
      <Margin flexGrow={1}>
        <ProductsList
          data={productsFiltered}
          title={typeOfCategory}
          length={productsFiltered.length}
        />
      </Margin>
    </Container>
  );
};

export default Menu;
