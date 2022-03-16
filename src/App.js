import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/Navbar";
import  { Paragraph } from "./components/Paragraph";
import { Input } from "./components/input";
import { Myself } from "./components/Myself";
import { Counter } from "./components/Counter"

function App() {
  return (
    <div className="App">
     <Navbar />
     <Paragraph />
     <Input />
     <Myself name="Perpetual" age={22} gender="female" />
     <Myself name="Abigail" age={21} gender="female" />
     <Myself name="Ato" age={25} gender="male" />
     <Myself name="Pamela" age={20} gender="female" />
     <Myself name="Emmanuel" age={22} gender="male" />
     <Counter />
    </div>
  );
}

export default App;
