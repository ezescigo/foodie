import React from 'react';

import { Spacer } from '../../../components/spacer/spacer.component';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from '../components/account.styles';

export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>FooDy</Title>
      <AccountContainer>
        <AuthButton
          icon='lock-open-outline'
          title='login'
          mode='contained'
          onPress={ () => navigation.navigate('login') }
        >
          Login
        </AuthButton>
        <Spacer size='large'>
          <AuthButton
            icon='email'
            title='register'
            mode='contained'
            onPress={ () => navigation.navigate('register') }
          >
            Sign Up
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  )
};