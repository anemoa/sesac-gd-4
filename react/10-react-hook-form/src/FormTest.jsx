import React from 'react';
import { useForm } from 'react-hook-form';

const FormTest = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        console.log('폼 성공 >>', data);
    };

    const onError = (err) => {
        if (err.username?.message) {
            alert(err.username.message);
        } else if (err.age?.message) {
            console.log(err.age.message);
        } else {
            return;
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <label htmlFor='username'>이름: </label>
                <input
                    type='text'
                    id='username'
                    {...register('username', {
                        required: '이름은 필수야',
                        minLength: {
                            value: 5,
                            message: '이름은 5글자 이상!',
                        },
                    })}
                />
                <br />
                <label htmlFor='age'>나이: </label>
                <input
                    type='text'
                    id='age'
                    {...register('age', {
                        required: '나이는 0 이상이야',
                        minLength: {
                            value: 1,
                            message: '비었어!',
                        },
                        validate: {
                            numCheck: (val) => !isNaN(val) || '숫자만 적어',
                            integerCheck: (val) =>
                                Number.isInteger(Number(val)) || '정수만 적어',
                            posiCheck: (val) => val >= 0 || '양수만 입력해',
                        },
                    })}
                />

                <br />
                <button type='submit'>제출</button>
            </form>

            <p>{errors.usernae}</p>
        </div>
    );
};

export default FormTest;
