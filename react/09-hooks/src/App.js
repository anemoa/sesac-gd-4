import './App.css';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import ProductFilter from './ProductFilter';
import ShoppingCartApp from './ShoppingCartApp';


function App() {
    return (
        <div className='App'>
			{/* <UseMemoEx /> */}
            {/* <UseCallbackEx /> */}
			{/* <UseCallbackEx2 postId={15}/> */}
			{/* <ProductFilter /> */}
			<ShoppingCartApp />
        </div>
    );
}

export default App;
