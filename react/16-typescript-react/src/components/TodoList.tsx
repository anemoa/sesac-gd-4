import React, { useRef, useState } from 'react';
import TodoItem from './TodoItem';
import { ToDoItem } from '../types/types';
import '../styles/style.scss';

// # 3. TodoList 작성 (초안)

const TodoList = () => {
    // {todo} => {todo: id, text, completed}
    const [todos, setTodos] = useState<ToDoItem[]>([]); // 전체 투두 목록

    // # 4-2. 투두 추가 상태
    const [newTodo, setNewTodo] = useState(''); // 새로 추가될 투두 하나

    /**
     * [
     * 		{id: 1, text: "할 일 1", completed: false}
     * 		{id: 2, text: "할 일 2", completed: false}
     * 		{id: 3, text: "할 일 3", completed: false}
     * ]
     */

    // # 5-1. 포커싱
    const inputRef = useRef<HTMLInputElement>(null);

    /**
     * 초기값 null 설정
     * 초기 렌더링 시에 inputRef가 아직 실제 DOM 요소를 참조하지 않기 때문에 null 시작함을 의미
     *
     * * <HTMLInputElement> : 참조하려는 DOM 요소의 타입을 지정
     */

    // # 4-3. 투두 추가 함수
    const addTodo = () => {
        const updatedTodos = [
            ...todos,
            { id: Date.now(), text: newTodo, completed: false },
        ];
        setTodos(updatedTodos);
        setNewTodo('');
    };

    // # 5-3. 포커싱 함수
    const focusInput = () => {
        inputRef.current?.focus();
    };

    const enterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.nativeEvent.isComposing) {
            return;
        }
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    // # 7-1. 토글 함수
    // - TodoItem 완료 상태 변경 함수
    const toggleComplete = (targetId: number) => {
        const updatedTodos = todos.map((todo) => {
            return todo.id === targetId
                ? { ...todo, completed: !todo.completed }
                : todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h1>TodoList</h1>
            <input
                type='text'
                placeholder='add new todo'
                // # 4-1. 투두 추가
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                // # 5-2. 포커싱 ref 객체 연결
                ref={inputRef}
                // # 6-1. 엔터키 이벤트
                onKeyDown={(e) => enterKeyDown(e)}
            />
            <button onClick={addTodo}>ADD</button>
            <button onClick={focusInput}>FOCUS</button>

            <ul>
                {todos.map((todo) => {
                    return (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
							// # 7-2. 토글 함수 props 전달
                            toggleComplete={toggleComplete}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;
