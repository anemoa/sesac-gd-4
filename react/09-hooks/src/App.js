import './App.css';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';


function App() {
    return (
        <div className='App'>
			{/* <UseMemoEx /> */}
            {/* <UseCallbackEx /> */}
			<UseCallbackEx2 postId={15}/>
        </div>
    );
}

export default App;
