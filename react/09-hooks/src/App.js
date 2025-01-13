import './App.css';
import Faq from './components/Faq';
import {ThemeMiddle} from './components/ThemeMiddle';
import {ThemeProvider} from './components/ThemeProvider';
import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemoEx from './components/UseMemoEx';
import UseReducerEx from './components/UseReducerEx';
import useTitle from './hooks/useTitle';
import ProductFilter from './ProductFilter';
import ShoppingCartApp from './ShoppingCartApp';


function App() {
    return (
        <div className='App'>
			{/* <UseMemoEx /> */}
            {/* <UseCallbackEx /> */}
			{/* <UseCallbackEx2 postId={15}/> */}
			{/* <ProductFilter /> */}
			{/* <ShoppingCartApp /> */}
			{/* <UseReducerEx /> */}
			<ThemeProvider>
				<ThemeMiddle></ThemeMiddle>
			</ThemeProvider>
			{/* <Faq /> */}
        </div>
    );
}

export default App;
