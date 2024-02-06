const router = require('express').Router();
const { userController } = require('../controllers');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const upload = multer({ dest: '../images/' })



function authenticateUser(req, res, next) {
    const token = req.headers['jwt-token'];
    console.log(token);
    if(token == null) return res.status(401).json({message : "Not authenticated"});

    jwt.verify(token, 'Zenmonk', (err, user)=> {
        if(err) return res.status(403).json({message : 'No longer valid'});
        res.user = user;
        console.log(user);
        next();
    })
}
// router.get('/', authenticateUser, userController.main)
// router.get('/users', userController.fetch_users)
// router.get('/user', userController.fetch_user)
// router.put('/userUpdate', userController.user_update) 
// router.delete('/dropUser/:id',userController.drop_user)
// router.post('/signup', userController.signup)
// router.post('/login',userController.login)

// router.post('/signup', )

module.exports = router;

router.get('/fetch_user', authenticateUser, userController.fetch_user );
router.get('/fetch_products', userController.fetch_products);

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/add_product', upload.single('avatar'), userController.add_product);

// router.get('/fetch_user',authenticateUser, async function(req, res){
//    console.log(req.user);

// })

// router.post('/signup', async function(req, res){

//     const user_name = req.body.name;
//     const user_email = req.body.email;
//     const user_password = req.body.password;
//     const user_role = req.body.role;
//     console.log(req.body);
  
//     const user = await Users.findOne({email : user_email}).exec();
  
//     if(user)
//     {
//       return res.status(400).json({message :'something went wrong'});
//     }
//     else 
//     {
//       const hash = await bcrypt.hash(user_password, saltRounds);
//       console.log(hash);
//       const new_user = await Users.create({email : user_email, password : hash, name : user_name, role : user_role, cart : []});
//       res.status(200);
//     }
//   })
  
  // router.post('/login', async function(req, res){
  //   console.log(req.body);
  //   const {email, password, role} = req.body;
  
  //   const user = await Users.findOne({email: email}).exec();
  //   console.log(user);
  //   if(user)
  //   {
  //     if(bcrypt.compare(password, user.password)  && (role === user.role))
  //     {
  //       const token = jwt.sign({id : user._id, role : user.role}, 'Zenmonk', {
  //           expiresIn: '4h'
  //       })
  //       return res.status(200).json(token);
  //     }
  //   }
  //   return res.status(400).json({message :'No user found with such credentials'});
    
  // })
  
  // router.post('/add_product', upload.single('avatar'), async function(req, res){
  //   console.log("add_product");
  //   const {name, images, price, quantity, colors, rating, description, retailer_id} = req.body;
  //   const response = await Products.create({name: name, images: images, price : price, quantity: quantity, colors: colors, rating: rating, description: description, retailer_id : retailer_id})
  
  //   console.log(response);
  //   // add the product id to the admin cart
  //   const admin = await Users.findById(retailer_id).exec();
  //   admin.cart = [...admin.cart , response._id];
  //   admin.save();
  //   res.status(200);
  // })
  
  // router.post('/get_products', async function(req, res){
  //   console.log("get products");
  //   const admin = req.body;
  //   console.log(admin); // _id of admin
  //   // const posts = await Products.find({retailer_id : req}).exec();
  //   // console.log(posts);
  
  //   const posts = await Products.find({retailer_id : admin.user_id}).exec();
  //   console.log(posts);
  //   res.status(200).json(posts);
  // })