import React from 'react';
import styles from '../styles/cssModule.module.css';

// # 2. CSS Module 사용
// - 클래스명 중복 방지
// - 반드시 .module.css 확장자로 작성해야 함
// - CSS Module 파일을 import 후, 객체 형태로 클래스명을 사용

// console.log(styles);

const CssModule = () => {
    return (
        <div className={styles.container}>
            <h1>Module CSS</h1>
            <div className={[styles.box, styles.red].join(' ')}>1</div>
            <div className={styles.yellow}>2</div>
            <div className={styles.blue}>3</div>
        </div>
    );
};

export default CssModule;
