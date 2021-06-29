import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

export const Margin = styled.ScrollView.attrs({
  paddingRight: 15,
  paddingLeft: 15,
  justifyContent: 'center',
})`
  flex: 1;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const LogoContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 25px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #333333;
  font-weight: 400;
`;

export const Input = styled.TextInput`
  background: transparent;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #2D9CDB;
  color: #333333;
  font-weight: 400;
`;

export const Redirect = styled.TouchableOpacity``;

export const RedirectText = styled.Text`
  font-size: 16px;
  color: #333333;
  text-align: center;
  font-weight: 400;
`;

export const Strong = styled.Text`
  color: #2D9CDB;
  font-weight: 500;
`;
