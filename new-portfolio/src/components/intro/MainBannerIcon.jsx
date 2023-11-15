import React from 'react';
import styles from './MainBannerIcon.module.css';
import { BsGithub, BsDiscord, BsEnvelopeAt } from 'react-icons/bs';
import { SiBloglovin } from 'react-icons/si';

function MainBannerIcon() {
    return (
        <div className={styles.header}>
            <div className={styles.circle}>
                <a href="/">
                    <BsGithub className={styles.github} size="40" />
                </a>
            </div>
            <div className={styles.circle}>
                <a href="/">
                    <SiBloglovin className={styles.blog} size="30" />
                </a>
            </div>
            <div className={styles.circle}>
                <a href="/">
                    <BsDiscord className={styles.discord} size="40" />
                </a>
            </div>
            <div className={styles.circle}>
                <a href="/">
                    <BsEnvelopeAt className={styles.email} size="35" />
                </a>
            </div>
        </div>
    );
}

export default MainBannerIcon;
