import React from 'react';
import styles from './basic.module.scss'
import BasicHeader from './basicHeader/page';
import Panel from './panel/page';
const Basic = () => {
    return (
        <div className={styles.basic}>
            <div className={styles.basic_wrapper}>
                <BasicHeader />
                <Panel />
            </div>
        </div>
    );
};

export default Basic;