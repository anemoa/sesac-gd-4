import './App.css';

function App() {
	let title = 'hello world'
    return (
        <div className='App'>
            <h1>{title}</h1>

			<div>
				<label >아이디: </label> <input type="text" />
			</div>
			<div>
				<label >비밀번호: </label> <input type="password" />
			</div>	
        </div>
    );
}

export default App;