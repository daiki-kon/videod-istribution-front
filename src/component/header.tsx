import React, { FC } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Image, Button, Icon, Input } from 'semantic-ui-react'
import headerImage from '../assets/header.png'
import '../styles/component/header.css'

export const Header: FC = (

) => {

  return(
    <header className='header'>
      <Image className='icon' src={headerImage} size='small' />
      <Input className='search' action={{ icon: 'search' }} placeholder='Search...' />
      
      <div className='auth'>
        <Button color='orange'>SIGN IN</Button>
        <Button className='sign-up' basic>SIGN UP</Button>
      </div>
    </header>
  )
}

