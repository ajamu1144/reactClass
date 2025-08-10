import {React, useState} from 'react'
import Itemprerview from "./Itemprerview.jsx";
import noItems from '../assets/noFiles.jpg'
import '../cssFiles/shop.css'


const Shop = () => {
    const [items, setItems] = useState([])
    const [showForm, setShowForm] = useState(false)
    const [btnText, setBtnText] = useState(true)
    const formShow = ()=> {
        setShowForm(!showForm)
        setBtnText(!btnText)
    }
    const addItem = (e, item) =>{
        e.preventDefault()
        setItems([...items, item])
    }
    const [product, setProduct] = useState({
        image: null,
        title: '',
        price: '',
        desc: '',
    })

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setItems([...items, product])
        setProduct({
            image: null,
            title: '',
            price: '',
            desc: '',
        })
    }


    return (
        <>
            <button onClick={formShow}>{btnText ? 'Add Item' : 'Remove Form'}</button>
            {showForm &&
                <form className='form' onSubmit={handleSubmit}>
                <br/>
                <label htmlFor="productName">Product Name</label> <br/>
                <input required onChange={handleChange} name="name" type="text" placeholder="Enter Your Product's Name"/> <br/>
                <label htmlFor="productName">Product Price</label> <br/>
                <input required onChange={handleChange} name="price" type="text" placeholder="Enter Your Product's Price"/> <br/>
                <label htmlFor="productName">Product Description</label> <br/>
                <input required onChange={handleChange} name="description" type="text" placeholder="Enter Your Product's Description"/> <br/>
                <label htmlFor="productName">Product Preview</label> <br/>
                <input onChange={handleChange} name="image" type="file" placeholder="Enter Your Product's Image"/> <br/>
                <button type="submit" onClick={addItem}>Add To Cart</button>
                <br/>
            </form>
            }

            { items.length !== 0 ?
                <div className='allItems'>
                    { items.map((item, id) =>(
                            <Itemprerview
                                key={id}
                                itemImage={product.image}
                                productPrice={product.price}
                                productName= {product.name}
                                productDescription={product.description}
                            />
                        ))
                    }
                </div>
                :
                <div className='noItems'>
                    <h1>Your shopping cart is empty</h1>
                    <img src={noItems} alt="You have Items" width={400}/>
                </div>
            }
        </>
    )
}
export default Shop
