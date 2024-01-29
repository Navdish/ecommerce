import '../App.css'
import {useState, useEffect} from 'react';
import axios from 'axios'
// import ResponsiveAppBar from './Navbar.jsx'

function AdminHome({user_id}) {
    const obj = {
        name : String,
        images : String,
        price : Number,
        quantity : Number,
        colors : String,
        rating : Number,
        description : String,
        retailer_id : user_id
    }
    const[admin_products, setAdmin_products] = useState([]);
    const[form, setForm] = useState(obj);
    // const [flag, setFlag]  = useState(false);
    // useEffect(()=>{
    //     const fetch_posts = async() => await get_products({user_id});
    //     setAdmin_products(fetch_posts);
    //     console.log(admin_products);
    //     setFlag(true);
    // }, [])

    function handlechange(e){
        setForm({...form, [e.target.name] : e.target.value});
    }
    const add_product = async(form) => axios.post('http://localhost:8080/add_product', form);
    const get_products = async(data)=> axios.post('http://localhost:8080/get_products', data);
    
    async function handleClick(e) {
        console.log(form);
        const response = await add_product(form);
    }
    return (
        <>
            <form className='post-form' enCtype="multipart/form-data">
                <h1>Admin Home page</h1>
                <input type="text" placeholder='name' name="name" onChange={(e)=>handlechange(e)}/>
                <input type="file" placeholder="image " name="uploaded_file" onChange={(e)=>handlechange(e)}/>
                <input type="Number" placeholder = 'price' name="price" onChange={(e)=>handlechange(e)}/>
                <input type="text" placeholder = 'quantity' name="quantity" onChange={(e)=>handlechange(e)}/>
                <input type="text" placeholder = 'colors' name="colors" onChange={(e)=>handlechange(e)}/>
                <input type="Number" placeholder = 'rating' name="rating" onChange={(e)=>handlechange(e)}/>
                <input type="text" placeholder='description' name="description" onChange={(e)=>handlechange(e)}/>
                <button onClick={(e)=>handleClick(e)}>Submit</button>
            </form>

            <ul>
                {/* { flag && admin_products.map((x)=> {
                    return <li>{x.name}</li>
                })} */}
            </ul>
        </>
    )
}

export default AdminHome;

