import React from 'react';
import styles from './MainBanner.module.css';
import MainBannerIcon from './MainBannerIcon';

function MainBanner() {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <h1>"웹 개발자"</h1>
                <h1>류재준의 Portfolio</h1>
            </div>
            <div className={styles.icon}>
                <MainBannerIcon />
            </div>
        </div>
    );
}

export default MainBanner;
