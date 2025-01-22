import React from 'react';
import { ToDoItem } from '../types/types';

// # 2. TodoItem 작성 (초안 작성)

// TodoItem의 Props 타입 정의
// {todo} => {todo: id, text, completed}
interface TodoItemProps {
    todo: ToDoItem;
    toggleComplete(id: number): void;
}

const TodoItem = ({ todo, toggleComplete }: TodoItemProps) => {
    return (
        <>
		{/* # 8. CSS 추가 */}
            <li className={todo.completed ? 'completed' : ''}>
                <label htmlFor='todoItem'>{todo.text}</label>
                <input
                    type='checkbox'
                    id='todoItem'
                    defaultChecked={todo.completed}
					// # 7-3. 토글 실행 이벤트 핸들러
					onChange={() => toggleComplete(todo.id)}
                />
            </li>
        </>
    );
};

export default TodoItem;
