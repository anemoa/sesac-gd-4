import './App.css';
import ColorHandler from './component/ex/ColorHandler';
import DissapearHandler from './component/ex/DissapearHandler';
import HandlerEx from './component/ex/HandlerEx';
import ClassComponent from './ClassComponent';
import TotalEventHandler from './component/ex/TotalEventHandler';
import {FuncComponent} from './FuncComponent';
import SyntheticEvent from './SyntheticEvent';

function App() {
  return (
    <div className="App">
		{/* <SyntheticEvent /> */}
		{/* <FuncComponent /> */}
		<ClassComponent />
		{/* <HandlerEx /> */}
		{/* <ColorHandler /> */}
		{/* <DissapearHandler /> */}
		<TotalEventHandler />
    </div>
  );
}

export default App;
