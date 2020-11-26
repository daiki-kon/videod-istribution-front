import React, { FC } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Image, Button, Icon, Input } from 'semantic-ui-react';
import headerImage from '../assets/header.png';
import styled from 'styled-components';

export type headerProps = {
}

export const Header: FC<headerProps> = (
  props: headerProps
) => {

  return(
    <Wrapper>
      <Image src={headerImage} size='small' />
      <Search action={{ icon: 'search' }} placeholder='Search...' />
      <AuthButtonGroup>
        <Button color='orange'>SIGN IN</Button>
        <Button className='sign-up' basic>SIGN UP</Button>
      </AuthButtonGroup>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #eeeeee;
  height: 8%;
`;

const Search = styled(Input)`
  margin: auto 0 ;
  width: 30%;
`;

const AuthButtonGroup = styled.div`
  margin: 0 0 0 auto;
  padding: 2vh ;
`;
