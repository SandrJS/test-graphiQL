import React from 'react';
import styles from './basicHeader.module.scss'
const BasicHeader = () => {
    return (
        <div className={styles.basic_header}>
            <ul className={styles.header_list}>
                <li className={styles.header_item_active}>
                    <button>&lt;untitled&gt;</button>
                    <button>
                        <svg height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L12.9998 12.9997" stroke="currentColor" stroke-width="1"></path><path d="M13 1L1.00079 13.0003" stroke="currentColor" stroke-width="1"></path>
                        </svg>
                    </button>
                </li>
                <li className={styles.header_item} >
                    <button>&lt;untitled&gt;</button>
                    <button><svg height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L12.9998 12.9997" stroke="currentColor" stroke-width="1"></path><path d="M13 1L1.00079 13.0003" stroke="currentColor" stroke-width="1"></path>
                    </svg>
                    </button>
                </li>
                <li className={styles.header_item}>
                    <button>
                        <svg height="1em" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 9.25V13.5H5.75V9.25L10 9.25V7.75L5.75 7.75V3.5H4.25V7.75L0 7.75V9.25L4.25 9.25Z" fill="currentColor"></path>
                        </svg>
                    </button>
                </li>
            </ul>
            <div className={styles.header_right}>
                <a href="https://github.com/graphql/graphiql" target="_blank">
                    <h2>Graph<em>i</em>QL</h2>
                </a>
            </div>
        </div>
    );
};

export default BasicHeader;