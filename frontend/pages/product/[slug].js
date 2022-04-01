import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'




function ProductDetails(data) {
    console.log("details", data.data)
    const router = useRouter();
    const { slug } = router.query;
    const product = data.data.find((a) => a.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>;
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className="productdetailspage">
                        <div className='imagesection'>
                            <Image
                                src={`/images/${product.image}`}
                                className="product-image-detail"
                                alt={product.name}
                                // layout='fill'
                                // objectFit='contain'
                                height={500}
                                width={360}
                            />
                        </div>
                        <div className='contentsection'>
                            <h1>{product.name}</h1>
                            <h2>Brand : {product.brand}</h2>
                            <p>{product.description}</p>
                            <h5>Price : INR {product.price}</h5>
                            <h6>Stock Available {product.countInStock}</h6>
                            <div className="quantity">
                                <button className="plus-btn" type="button" name="button">
                                    <p className="plus">+</p>
                                </button>
                                <input type="text" name="name" value="1"></input>
                                <button className="minus-btn" type="button" name="button">
                                    <p className="minus">-</p>
                                </button>
                            </div>
                            <button className="buynow">Buy Now</button>
                        </div>

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
export default ProductDetails