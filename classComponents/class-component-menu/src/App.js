import logo from './logo.svg';
import './App.css';
import MenuItem from './components/MenuItem';

function App() {
  return (
    <div className="App">
      <h1>Hello Everybody, welcome to the MERN (grass fed, gluten free, free range) restruarant</h1>
      <MenuItem name= {"Calamari"} price= {12.50} desc = {"Its grass fed tho"} likes = {0}>
          <p>*Gluten Free</p>
          <p>Contains Nuts</p>

      </MenuItem>

      <MenuItem name= {"Basil Salmon Salad"} price= {200.00} desc = {"The basil comes from the deep trenches of Java, its grass fed, and its data type is FreeRange"} likes = {0}></MenuItem>
      <MenuItem name= {"Nepali Treats from my fam"} price= {12.00} desc = {"rob be alvin an the chipmunks in week 3 after eating this"} likes = {10}/>
    </div>
  );
}

export default App;
