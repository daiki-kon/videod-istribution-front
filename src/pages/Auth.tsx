import React, { FC } from 'react'
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify from '@aws-amplify/core';
import awsmobile from '../aws-exports';

export const Auth: FC = (

) => {
  return(
    <AmplifyAuthenticator>
        <AmplifySignOut />
    </AmplifyAuthenticator>
  )
}

