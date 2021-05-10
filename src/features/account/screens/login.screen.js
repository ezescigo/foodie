import React, { useContext, useState } from 'react';
import { Text } from 'react-native';

import { Spacer } from '../../../components/spacer/spacer.component';
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput } from '../components/account.styles';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const LoginScreen = () => {

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
            secure
            value={ passwd }
            onChangeText={ p => setPasswd(p) }
          />
        </Spacer>
        <Spacer size='large'>
          <AuthButton
            icon='lock-open-outline'
            title='login'
            mode='contained'
            onPress={ () => onLogin(email, passwd) }
          >
            Login
        </AuthButton>
        </Spacer>
        { isLoading && <Text>please wait...</Text> }
        { error && (<Text>{ error }</Text>) }
      </AccountContainer>
    </AccountBackground>
  )
};