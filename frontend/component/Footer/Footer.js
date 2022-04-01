import React from 'react'
import styles from './Footer.module.scss';
import cx from 'classnames';

function Footer() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className={cx(styles.footer)}>
                        <p>Copyright @2022 | Design & Developed by Sourav Gupta</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer