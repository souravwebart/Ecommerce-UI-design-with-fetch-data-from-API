import React from 'react';
import styles from './Header.module.scss';
import cx from 'classnames';
import Link from 'next/link'


function Header() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link href="/">
                            <a className={cx(styles.logo, "navbar-brand")}>ShopHub</a>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={cx(styles.navdesign, "collapse navbar-collapse")} id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link href="/">
                                        <a className="nav-link" >Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/product">
                                        <a className="nav-link" >Product</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cart</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Register</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header