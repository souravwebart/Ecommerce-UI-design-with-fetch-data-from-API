import React from 'react'
import styles from './card.module.scss';
import cx from 'classnames';
import Link from 'next/link'


function card({ datacard }) {
    console.log('datacard', datacard)
    return (
        <>
            <Link href={`/product/${datacard.slug}`}>
                <a><div className={cx(styles.card)}>
                    <div className={cx(styles.div1)}>
                        <div className="col-3 mt-2"> <button className={cx(styles.discBtn, styles.textwhite, "btn p-1 p-md-2")}>{datacard.brand}</button>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <img className={cx(styles.cardimage)} src={`/images/${datacard.image}`} height="400px" width="100%" alt=""></img>
                        </div>
                    </div>
                    <div className="py-2">
                        <h5 className={cx(styles.cardtitile)}>{datacard.name}</h5>
                        <div className={cx(styles.cardbutton, "d-flex")}>
                            <div>
                                <h5 className="align-self-center">Rs. {datacard.price}</h5>
                                <p className={cx(styles.available)}>Stock Availability : {datacard.countInStock}</p>
                            </div>
                            <div>
                                <button className={cx(styles.buttoncard, "buy d-flex ml-auto font-weight-bold pl-4 pr-5 py-2 border-0")}> Add to Cart </button>
                            </div>
                        </div>
                    </div>
                </div></a>
            </Link>

        </>
    )
}

export default card