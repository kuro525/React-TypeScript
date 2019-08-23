import React from 'react'
import {rows} from "./data"

import Thead from './thead'
import Tbody from './tbody'


const App: React.FC = () => (
  <div>
    <h1>調査</h1>
    <Thead/>
    <Tbody rows={rows}/>
  </div>
)

export default App
