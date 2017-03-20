import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Welcome from './WelcomeScreen';
import Card from './Card';
import Note from './Note';
import QRcode from './QRcode'
import QRcodeCard from './QRcodeCard'

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene key='welcome'
          component={Welcome}
          title='WelcomeScreen'
          initial
          hideNavBar={true}

        />
        <Scene
          key='card'
          component={Card}
          title='Create a Buisness Card'
          hideNavBar={true}

        />
        <Scene
          key='note'
          component={Note}
          title='Create a note'
          hideNavBar={true}

        />
        <Scene
          key='qrcode'
          component={QRcode}
          title='QR Code'
          hideNavBar={true}
        />
        <Scene
          key='qrcodecard'
          component={QRcodeCard}
          title='QR Code'
          hideNavBar={true}
        />
      </Scene>
    </Router>
  );
}

export default App;