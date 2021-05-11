import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import { colors } from '../../../infrastructure/theme/colors';

export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.jpg'),
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ddd;
  opacity: 0.9;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[ 4 ]};
  margin-top: ${(props) => props.theme.space[ 2 ]};
  width: 80%;
  justify-content: center;
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[ 2 ]};
  align-items: center;
`;

export const BackButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[ 2 ]};
  max-width: 300px;
  align-items: center;
  align-self: center;
`;

export const AuthInput = styled(TextInput)`
  width: auto;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[ 2 ]};
  margin-bottom: ${(props) => props.theme.space[ 2 ]};
`;