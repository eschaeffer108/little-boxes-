import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import style from './styles/app.scss'

import Wrapper from './components/Wrapper';
import Picture from './components/Picture';
import List from './components/List';
import Numbers from './components/Numbers';
import Box from './components/Box';

let wrapperParagraph = "This following program is dedicated to the city and people of San Francisco, who may not know it but they are beautiful and so Is their city this is a very personal song, so if the viewer Cannot understand it particularly those of you who are European Residents save up all your brand and fly trans love airways to San Francisco U.S.A., then maybe you'll understand the song, it Will be worth it, if not for the sake of this song but for the Sake of your own peace of mind."


ReactDOM.render(
  <div>
    <Box
      boxClass='wrapper'
      header ="I am the Walrus! Goo Goo G'joob!"
      paragraph={wrapperParagraph}
    />
  </div>,
  document.getElementById('app')
);
