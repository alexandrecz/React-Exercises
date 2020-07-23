import React from 'react';
import './App.css';
import DefaultApp from './Exercises/DefaultApp'
import CreateElement from './Exercises/CreateElement'
import Properties from './Exercises/Properties'
import Composing from './Exercises/Composing'
import RenderList from './Exercises/RenderList'
import RenderListObject from './Exercises/RenderListObject'
import Fragment from './Exercises/Fragment'
import State from './Exercises/State'
import Effect from './Exercises/Effect'
import DependencyArray from './Exercises/DependencyArray';
import FetchingEffect from './Exercises/FetchingEffect';
import Reducer from './Exercises/Reducer';

function App({exerciseNumber}) {  

  const exercises = {
    1 : <CreateElement/>,
    2 : <Properties/>,
    3 : <Composing/>,
    4 : <RenderList/>,
    5 : <RenderListObject/>,
    6 : <Fragment/>,
    7 : <State/>,
    8 : <Effect/>,
    9 : <DependencyArray/>,
    10 : <FetchingEffect/>,
    11 : <Reducer/>,
    default: <DefaultApp/>  
  }; 
  

  return (
    exercises[exerciseNumber] || exercises.default
  )
}

export default App;
