import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [allStudents, setAllStudents] = useState([])


  return (
    <div className="App">
      <Form allStudents = {allStudents} setAllStudents={setAllStudents}></Form>
      <Display allStudents={allStudents} setAllStudents={setAllStudents}></Display>
    </div>
  );
}

export default App;
