import './App.css';
import ClassCompo from './ClassCompo';
import CounterClass from './CounterClass';
import { CounterFunction } from './CounterFunction';
import FuncCompo from './FuncCompo';
import { SayFunction } from './SayFunction';

function App() {
  return (
    <div className="App">
		{/* <CounterClass /> */}
		{/* <CounterFunction value={'plus 1'} /> */}
		{/* <SayFunction /> */}
		{/* <ClassCompo /> */}
		<FuncCompo />
    </div>
  );
}

export default App;
