import React from 'react';
import First from './components/First';
import Parents from './components/Parents';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import GnTodoList from './components/GnTodoList';

function App() {
	
    return (
        <div className='App'>
            {/* <First title={'오늘 배울 내용이란?'}>
                <p>hi hello annnyeong?</p>
            </First>
			<Parents /> */}
			{/* <TodoList /> */}
			<GnTodoList />
        </div>
    );
}

export default App;
