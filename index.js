import React from 'react';
//import ReactDom from 'react-dom';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist.js';
import data from './src/api.json'
//const container = document.getElementById('app')
//const hola = <h1>Mira mama sin manos! tets</h1>;

//ReactDom.render(<Media />, app);
render(<Playlist data={data} />, app);