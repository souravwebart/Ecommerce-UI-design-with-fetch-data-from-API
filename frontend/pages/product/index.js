import React from 'react'
import Card from '../../Subcomponent/card/card'

function index({ data }) {
    return (
        <>
            <div className='container productall'>
                <div className='row'>
                    <div className='productallcard'>
                        {data.map((carddata, idx) => {
                            return (
                                <Card
                                    key={idx}
                                    datacard={carddata} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export async function getServerSideProps() {
    const res = await fetch(`http://localhost:5000/getdata/`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default index