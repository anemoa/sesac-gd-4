import React, { Component } from 'react';
import CycleChild from './CycleChild';

export default class LifeCycleClass extends Component {
    state = {
        number: 0,
        visible: true,
    };

    changeNum = () => {
        return this.setState({
            number: this.state.number + 1,
        });
    };

    changeVisibleState = () => {
        return this.setState({ visible: !this.state.visible });
    };
    render() {
        return (
            <div>
                부모 컴포넌트
                <button onClick={this.changeNum}> Plus</button>
                <button onClick={this.changeVisibleState}>on / off</button>
                {this.state.visible && (
                    <CycleChild number={this.state.number} />
                )}
            </div>
        );
    }
}

/**
 * * 단축평가 *
 * - 불필요한 평가를 건너뛰고 결과를 바로 반환하는 방법
 * 
 * A && B // 논리곱 -  두 값 모두 "참"일때 "참"을 반환
 * - A가 참이면 B반환
 * - A가 거짓이면 B평가 안 함 -> A 출력
 * 
 *  A || B // 논리합 - 두 값 중 하나라도 참이면 참을 반환
 * - A가 참이면 B 평가 안함 -> A 출력
 * - A가 거짓이면 B 반환
 * 
 * true && anything // anything // 논리곱
 * false && anything // false
 * 
 * true || anything // true
 * false || anything // anything
 */