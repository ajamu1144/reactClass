import React from 'react'

const Itemprerview = ({itemImage, productPrice, productDescription, productName}) => {
    return (
        <div className='itemDiv'>
            <div className = 'ProductImage'>
                <img src={itemImage} />
            </div>
            <h3>{productName}</h3>
            <div>
                <h4>{productPrice}</h4>
            </div>
            <div>
                <p>{productDescription}</p>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}
export default Itemprerview