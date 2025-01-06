import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';
import Compo2 from './Compo2';
import NewCompo from './NewCompo';
import Book from './Book';
import Button from './Button';
import MultiChild from './MultiChild';

function App() {
    return (
        <div className='App'>
            {/* <ClassComponent />
            <hr />
            <ClassComponent place='강동 5층' />
			<hr />

			<Compo2 text='hihi' valid='콘솔 띄워!' />
			<hr />
			<Compo2 /> */}
			{/* <hr />
			<FunctionComponent />
			<hr />
			<FunctionComponent name="yves" age={30} /> */}
			{/* <NewCompo food='분식' />
			<hr />
			<NewCompo /> */}
			{/* <Book title='이것은 책' author='정아무개' price={13500} type='소설' /> */}
			<Button link='https://www.naver.com'>
				NAVER
			</Button>
			<Button />

			<MultiChild>
				<b>다중자식</b>
				<p>다중요소</p>
				<div>재미지다</div>
			</MultiChild>
        </div>
    );
}

export default App;
