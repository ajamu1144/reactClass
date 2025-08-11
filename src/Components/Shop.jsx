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
    // const addItem = (e, item) =>{
    //     e.preventDefault()
    // }
    const [product, setproduct] = useState({
        image: null,
        name: '',
        price: '',
        desc: '',
    })

    const handleChange = (e) => {
        setproduct({...product, [e.target.name]: e.target.value})
    }

    const handleImageChange = (e) => {
        const allFiles = e.target.files
        const [img] = allFiles
        const fileUrl = URL.createObjectURL(img)
        setproduct({...product, [e.target.name]: fileUrl})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // setItems([...items, item])
        setShowForm(false)
        setItems([...items, product])
        setproduct({
            image: null,
            title: '',
            price: '',
            desc: '',
        })
    }




    return (
        <>
            <button onClick={formShow}>{!showForm ? 'Add Item' : 'Remove Form'}</button>
            {showForm &&
                <form className='form' onSubmit={handleSubmit}>
                    <br/>
                    <label htmlFor="productName">Product Name</label> <br/>
                    <input value={product.name} required onChange={handleChange} name="name" type="text" placeholder="Enter Your Product's Name"/> <br/>
                    <label htmlFor="productName">Product Price</label> <br/>
                    <input value={product.price} required onChange={handleChange} name="price" type="number" placeholder="Enter Your Product's Price"/> <br/>
                    <label htmlFor="productName">Product Description</label> <br/>
                    <textarea value={product.desc} required onChange={handleChange} name="desc" placeholder="Enter Your Product's Description"/> <br/>
                    <label htmlFor="productName">Product Preview</label> <br/>
                    <img src={product.image} className='previewImage' alt=""/>
                    <input onChange={handleImageChange} name="image" type="file" placeholder="Enter Your Product's Image"/> <br/>
                    <button type="submit">Add To Cart</button>
                    <br/>
                </form>
            }

            { items.length !== 0 ?
                <div className='allItems'>
                    { items.map((item, id) =>(
                            <Itemprerview
                                key={id}
                                itemImage={item.image}
                                productPrice={item.price}
                                productName= {item.name}
                                productDescription={item.desc}
                            />
                        ))
                    }
                </div>
                :
                <div className='noItems'>
                    <h1>Your shopping cart is empty</h1><br/> <br/>
                    <img src={noItems} alt="You have Items" width={400}/>
                </div>
            }
        </>
    )
}
export default Shop

//
// import React, { useState } from 'react'
// import logo from '../assets/react.svg'
// import '../cssFiles/shop.css'
//
// const Shop = () => {
//     const [allProducts, setAllProducts] = useState([])
//     const [showForm, setShowForm] = useState(false)
//     const [product, setProduct] = useState({
//         image: logo,
//         title: '',
//         price: '',
//         desc: '',
//     })
//
//     const handleChange = (e) => {
//         // const {name, value} = e.target
//         setProduct({...product, [e.target.name]: e.target.value})
//     }
//
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         setAllProducts([...allProducts, product])
//         setProduct({
//             image: logo,
//             title: '',
//             price: '',
//             desc: '',
//         })
//         console.log(allProducts)
//     }
//
//     return (
//         <div >
//             <button className='addproduct' onClick={() => setShowForm(!showForm)}>
//                 ADD PRODUCT
//             </button>
//
//
//             {/* ADD PRODUCT FORM */}
//             {
//                 showForm &&
//                 <form onSubmit={handleSubmit}>
//                     <div className='inputs'>
//                         <label htmlFor="title">name</label>
//                         <input type="text" id='title' name='title' value={product.title} onChange={handleChange} required />
//                     </div>
//                     <div className='inputs'>
//                         <label htmlFor="price">Price</label>
//                         <input type="number" id='price' name='price'  value={product.price} onChange={handleChange}  required />
//                     </div>
//                     <div className='inputs'>
//                         <label htmlFor="desc">Description</label>
//                         <textarea className='desc' name="desc" value={product.desc} onChange={handleChange} id="desc"></textarea>
//                     </div>
//                     <div className='inputs'>
//                         <label>Preview</label>
//                         <img src={logo} className='prodImage' alt="imagePreview" />
//                     </div>
//                     <div className='inputs'>
//                         <label htmlFor="file">Picture Image</label>
//                         <input type="file" id='file' />
//                     </div>
//
//                     <button className='add'>
//                         ADD PRODUCT
//                     </button>
//                 </form>
//             }
//
//             <div className='gallery'>
//                 {
//                     allProducts.map((prod, index) => (
//                         <div className='product' key={index}>
//                             <img src={logo} alt="" className='prodImage' />
//                             <p className='prodTitle'>{prod.title} </p>
//                             <div className='side'>
//                                 <p>${prod.price}</p>
//                                 <button>Add to Cart</button>
//                             </div>
//                             <div className='prodDesc'>
//                                 {prod.desc}
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// }
//
// export default Shop