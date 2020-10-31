import React from 'react';
import { Auth } from './pages/auth'
import Amplify from '@aws-amplify/core';
import awsmobile from './aws-exports';
import { Header } from './component/header';
import { PlayVideoPage } from './pages/playVideo'
import './styles/App.css'

Amplify.configure(awsmobile);
function App() {
  return (
    <>
      <Header className='header'/>
      <PlayVideoPage/>
    </>
  );
}

export default App;