import '../App.css'
import {useState, useEffect} from 'react';
import axios from 'axios'
// import ResponsiveAppBar from './Navbar.jsx'

function AdminHome() {
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
    const[form, setForm] = useState();
    const [post_data, setPost_data] = useState([]);
    useEffect(()=>{
        async function Posts(){
            const admin_products = await get_products();
            const data_products = admin_products.data;
            setPost_data(data_products);
            console.log(post_data);
        }
        Posts();
    }, []);
    function handlechange(e){
        setForm({...form, [e.target.name] : e.target.value});
    }
    const add_product = async(form) => axios.post('http://localhost:8080/add_product', form);
    const get_products = async(data)=> axios.get('http://localhost:8080/get_products', {
        params : {
            ID : data
        }
    });
    
    
    async function handleClick(e) {
        e.preventDefault();
        console.log(form);
        const response = await add_product(form);
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
                {post_data.length !== 0&&post_data.map((x, _id)=> {
                    return (
                        <li>{x.name}</li>
                    )
                })}
            </ul>
        </>
    )
}

export default AdminHome;

