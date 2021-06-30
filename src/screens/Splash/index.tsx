import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import { setCategories, setProducts } from '~/store/actions/Product';
import { setSession } from '~/store/actions/Authentication';
import Firebase from '~/services';

import { Container } from '~/screens/Splash/styles';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      Firebase.getSession()
        .then(async (userInformation: any) => {
          if (userInformation) {
            try {
              const orders = await Firebase.getOrders(userInformation.uid);
              const categories = await Firebase.getCategories();
              const products = await Firebase.getProducts();

              dispatch(setSession({ ...userInformation, orders }));
              dispatch(setCategories(categories));
              dispatch(setProducts(products));
            } catch (error) {
              // DISPLAY TOAST
            }

            navigation.navigate('AppRoutes');
          } else {
            navigation.navigate('AuthRoutes');
          }
        });
    })();
  }, []);

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Ionicons name="fast-food" size={100} color="#fff" style={{ marginBottom: 25 }} />
    </Container>
  );
};

export default Splash;
