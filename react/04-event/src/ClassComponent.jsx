// 클래스 컴포넌트에서의 이벤트 사용.
// - 화살표 함수 사용 (ES6)
import React, { Component } from 'react';

export default class ClassComponent extends Component {
    /**
     * 화살표 함수의 'this'는 상위 스코프의 'this'를 참조하므로 바인딩이 필요 없음.
     * = (Lexical this) 렉시컬 스코프의 this 라고도 함.
     * -> 자신만의 this를 가지지 않는다.
     */

    // msg, msg2 : 추가로 전달된 인자
    // evt : 이벤트 객체
    // - 리액트 이벤트 객체 자동으로 첫 번째 인수로 들어가집니다.
    // - 이벤트 객체가 마지막 매개변수로 오는 것이 일반적. (코드 작성 시)
    printConsole = (msg, msg2, evt) => {
        console.log('evt >>> ', evt);
        // console.log('evt.target >>> ', evt.target);
        // console.log('evt.currentTarget >>> ', evt.currentTarget);
        console.log('msg >>> ', msg);
        console.log('msg2 >>> ', msg2);
        console.log('this >>> ', this); // 클래스 인스턴스 참조 (바인딩)
        console.log('------------------');
    };
    render() {
        return (
            <>
                <div>ClassComponent</div>
                {/* 이벤트 객체와 인자 전달 */}
                <button
                    onClick={(e) => {
                        this.printConsole('msg', 'msg2', e);
                    }}
                >
                    printConsole(인자 O)
                </button>

                {/* 이벤트 객체만 전달 */}
                {/* 합성 이벤트는 인자로 따로 넘겨주지 않아도 알아서 자동으로 이벤트 객체 넘어가집니다. */}
                <button onClick={this.printConsole}>
                    printConsole(인자 X)
                </button>
            </>
        );
    }
}
