import './App.css';
import Jobs from './components/jobs/Jobs';
import Nav from './components/nav/Nav';
import { useState } from 'react';

function App() {
  const[title,setTitle]=useState('');
  const[type,setType]=useState('All');
  
 return(
  <>
  <Nav/>
  <Jobs title={title} setTitle={setTitle} type={type} setType={setType}/>
  </>
 )
}

export default App;
