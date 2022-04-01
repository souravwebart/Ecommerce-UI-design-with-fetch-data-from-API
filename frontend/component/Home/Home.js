import React from 'react'
import Slider from '../Layout/Slider';
import data from '../../data/data';
import styles from './Home.module.scss';
import cx from 'classnames';
import Card from '../../Subcomponent/card/card';

function Home({ datahome }) {
    console.log('data', datahome)
    return (
        <>
            <div className={cx(styles.sliderhome, "container-fluid")}>
                <div className='row'>
                    <Slider data={data.banner} />
                </div>
                <div className={cx(styles.mainhome, "container")}>
                    {datahome.map((carddata, idx) => {
                        return (
                            <Card
                                key={idx}
                                datacard={carddata} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Home