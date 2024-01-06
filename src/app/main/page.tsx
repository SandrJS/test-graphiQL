import React from 'react';
import styles from './main.module.scss'
import Sidebar from './sidebar/page';
import Basic from './basic/page';
const MainPage = () => {
    return (
        <div className={styles.root}>
            <Sidebar />
            <Basic />
        </div>
    );
};

export default MainPage;