import React, { useContext, useState } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

import { Text } from '../../../components/typography/text.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  BackButton,
  AuthInput,
  ErrorContainer,
} from '../components/account.styles';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const LoginScreen = ({ navigation }) => {

  const [ email, setEmail ] = useState('');
  const [ passwd, setPasswd ] = useState('');
  const { isLoading, error, onLogin } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={ email }
          onChangeText={ e => setEmail(e) }
        />
        <Spacer size='large'>
          <AuthInput
            label="Password"
            textContentType="password"
            autoCapitalize="none"
            secureTextEntry
            value={ passwd }
            onChangeText={ p => setPasswd(p) }
          />
        </Spacer>
        <Spacer size='large'>
          { !isLoading ? (
            <AuthButton
              icon='lock-open-outline'
              title='login'
              mode='contained'
              onPress={ () => onLogin(email, passwd) }
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={ true } color={ Colors.blue300 } />
          ) }
        </Spacer>
        { error &&
          <ErrorContainer>
            <Text variant='error'>{ error }</Text>
          </ErrorContainer>
        }
      </AccountContainer>
      <Spacer size='large'>
        <BackButton
          title='back'
          mode='contained'
          onPress={ () => navigation.goBack() }
        >
          Back
          </BackButton>
      </Spacer>
    </AccountBackground>
  )
};