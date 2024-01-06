import React from 'react';
import styles from './panel.module.scss'
const Panel = () => {
    return (
        <div className={styles.panel}>
            <div className={styles.editors}>
                <div className={styles.editor_wrapp}>
                    <div className={styles.editor}>
                        <div className={styles.editor_inner}>
                            <textarea className={styles.textarea} rows={10}
                                cols={46}></textarea>
                        </div>
                        <div className={styles.vscrollbar}>
                            <div></div>
                        </div>
                        <div className={styles.hscrollbar}>
                            <div></div>
                        </div>

                    </div>
                    <div className={styles.toolbar}>
                        <button type="button" className={styles.execute_button}>
                            <svg height="2em" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.32226e-07 1.6609C7.22332e-08 0.907329 0.801887 0.424528 1.46789 0.777117L15.3306 8.11621C16.0401 8.49182 16.0401 9.50818 15.3306 9.88379L1.46789 17.2229C0.801886 17.5755 1.36076e-06 17.0927 1.30077e-06 16.3391L1.32226e-07 1.6609Z" fill="currentColor"></path>
                            </svg>
                        </button>
                        <button type="button" className={styles.toolbar_button} >
                            <svg height="2em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10.2852 24.0745L13.7139 18.0742" stroke="currentColor" stroke-width="1.5625"></path><path d="M14.5742 24.0749L17.1457 19.7891" stroke="currentColor" stroke-width="1.5625"></path><path d="M19.4868 24.0735L20.7229 21.7523C21.3259 20.6143 21.5457 19.3122 21.3496 18.0394C21.1535 16.7666 20.5519 15.591 19.6342 14.6874L23.7984 6.87853C24.0123 6.47728 24.0581 6.00748 23.9256 5.57249C23.7932 5.1375 23.4933 4.77294 23.0921 4.55901C22.6908 4.34509 22.221 4.29932 21.7861 4.43178C21.3511 4.56424 20.9865 4.86408 20.7726 5.26533L16.6084 13.0742C15.3474 12.8142 14.0362 12.9683 12.8699 13.5135C11.7035 14.0586 10.7443 14.9658 10.135 16.1L6 24.0735" stroke="currentColor" stroke-width="1.5625"></path><path d="M4 15L5 13L7 12L5 11L4 9L3 11L1 12L3 13L4 15Z" stroke="currentColor" stroke-width="1.5625" stroke-linejoin="round"></path><path d="M11.5 8L12.6662 5.6662L15 4.5L12.6662 3.3338L11.5 1L10.3338 3.3338L8 4.5L10.3338 5.6662L11.5 8Z" stroke="currentColor" stroke-width="1.5625" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <button type="button" className={styles.toolbar_button}>
                            <svg height="2em" viewBox="-2 -2 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M17.2492 6V2.9569C17.2492 1.73806 16.2611 0.75 15.0423 0.75L2.9569 0.75C1.73806 0.75 0.75 1.73806 0.75 2.9569L0.75 6" stroke="currentColor" stroke-width="1.5"></path><path d="M0.749873 12V15.0431C0.749873 16.2619 1.73794 17.25 2.95677 17.25H15.0421C16.261 17.25 17.249 16.2619 17.249 15.0431V12" stroke="currentColor" stroke-width="1.5"></path><path d="M6 4.5L9 7.5L12 4.5" stroke="currentColor" stroke-width="1.5"></path><path d="M12 13.5L9 10.5L6 13.5" stroke="currentColor" stroke-width="1.5"></path>
                            </svg>
                        </button>
                        <button type="button" className={styles.toolbar_button}>
                            <svg height="2em" viewBox="-2 -2 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M11.25 14.2105V15.235C11.25 16.3479 10.3479 17.25 9.23501 17.25H2.76499C1.65214 17.25 0.75 16.3479 0.75 15.235L0.75 8.76499C0.75 7.65214 1.65214 6.75 2.76499 6.75L3.78947 6.75" stroke="currentColor" stroke-width="1.5"></path><rect x="6.75" y="0.75" width="10.5" height="10.5" rx="2.2069" stroke="currentColor" stroke-width="1.5"></rect>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.tools}>
                    <button type="button">Variables</button>
                    <button type="button">Headers</button>
                    <button className={styles.editor_tools} type="button" aria-label="Show editor tools" >
                        <svg height="1em" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 8L7 2L1 8" stroke="currentColor" stroke-width="1.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default Panel;