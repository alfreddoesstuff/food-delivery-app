import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

import Firebase from '~/services';

import { IProduct } from '~/@types';
import { formatToBrazilianCurrency } from '~/utils';

import { closeCartModal, cleanCart } from '~/store/actions/Cart';

import { Card, EmptyList } from '~/components/CartModal/components';
import {
  Container,
  Margin,
  Scroll,
  Header,
  CloseButton,
  Title,
  ClearButton,
  ClearButtonText,
  Button,
  ButtonText,
  LoadingButton,
} from '~/components/CartModal/styles';

const CartModalComponent: React.FC = () => {
  const { cartModal: { isVisibled, items } } = useSelector((state: any) => state.Cart);
  const { userInformation } = useSelector((state: any) => state.Authentication);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleCloseCartModal = () => dispatch(closeCartModal());

  const handleCleanCart = () => {
    dispatch(cleanCart());
    handleCloseCartModal();
  };

  const handleSendOrder = () => {
    setIsLoading(true);

    const products: IProduct[] = items.map(({ name, price, id }: IProduct) => {
      return { name, price, productId: id };
    });

    Firebase.sendOrder(products, userInformation.uid)
      .finally(() => {
        setIsLoading(false);
        handleCleanCart();
      });
  };

  const totalCartValue = useMemo(() => {
    if (items.length !== 0) {
      return items.reduce((total: number, product: IProduct) => total += product.price, 0);
    }

    return 0;
  }, [items]);

  return (
    <Container visible={isVisibled} animationType="slide">
      <Margin>
        <Header>
          <CloseButton onPress={handleCloseCartModal}>
            <Feather name="chevron-down" size={30} color="#333333" />
          </CloseButton>
          <Title>Carrinho</Title>
          <ClearButton onPress={handleCleanCart}>
            <ClearButtonText>Limpar</ClearButtonText>
          </ClearButton>
        </Header>
        <Scroll>
          {items.length !== 0 ? (
            items.map((product: IProduct, index: number) => (
              <Card
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                index={index}
              />
            ))) : <EmptyList />}
          {!isLoading && items.length !== 0 && (
            <Button onPress={handleSendOrder}>
              <ButtonText>Concluir Pedido</ButtonText>
              <ButtonText>
                R$
                {' '}
                {formatToBrazilianCurrency(totalCartValue)}
              </ButtonText>
            </Button>
          )}
          {isLoading && (
            <LoadingButton disabled>
              <ActivityIndicator size="small" color="white" />
            </LoadingButton>
          )}
        </Scroll>
      </Margin>
    </Container>
  );
};

export default CartModalComponent;
