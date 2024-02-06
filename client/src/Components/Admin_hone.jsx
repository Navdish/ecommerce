import '../App.css'
import {useState, useEffect} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts , addProduct} from '../Store/Slices/productSlice';
import Cookies from 'js-cookie';
// import ResponsiveAppBar from './Navbar.jsx'

function AdminHome() {
    axios.defaults.headers.common['jwt-token'] = Cookies.get('token');
    // const obj = {
    //     name : String,
    //     images : String,
    //     price : Number,
    //     quantity : Number,
    //     colors : String,
    //     rating : Number,
    //     description : String,
    //     retailer_id : user_id
    // }
    const dispatch = useDispatch();
    
    const data = useSelector((state)=> state.data);
    useEffect(()=> {
            dispatch(fetchProducts());
            console.log("...");
    },[])

    console.log("data",data);




    const[form, setForm] = useState();
    
    function handlechange(e){
        setForm({...form, [e.target.name] : e.target.value});
    }
    // const add_product = async(form) => axios.post('http://localhost:8080/add_product', form);
    // const get_products = async(data)=> axios.get('http://localhost:8080/get_products', {
    //     params : {
    //         ID : data
    //     }
    // });
    
    
    async function handleClick(e) {
        e.preventDefault();
        console.log(form);
        dispatch(addProduct(form));
    }
    return (
        <>
            <form className='post-form' encType="multipart/form-data">
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

            </ul>
        </>
    )
}

export default AdminHome;

