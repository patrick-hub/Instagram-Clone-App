import {Nav, Bio, Gallery} from './components'
import './App.css'
import Modal from './modal';
import { useState } from 'react';
import getPhotoUrl from "get-photo-url"
import { useLiveQuery } from "dexie-react-hooks"
import { db } from "./dexie"

const App =() => {


  return (
    <>
    <div className="container">
      <Nav />
      <Bio />
      <Gallery/>
    </div>
    </>
  );
}

export default App;
