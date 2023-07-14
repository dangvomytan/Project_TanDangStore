const Customer = require('../models/customers.model');
const Cart = require('../models/cart.model');
const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.config');
const bcrypt = require('bcryptjs');

class CustomersController {
   // register customers
   async handelRegister(req, res) {
      // console.log(req.body);
      const { email, password } = req.body;
      try {
         // check email
         const checkEmail = await Customer.findOne({ where: { email } });
         if (checkEmail) {
            return res.status(400).send('email already exists');
         }
         if(password.length<6) 
         {
            return res.status(401).send('password must be at least 6 characters');
         }
         // ma hoa password
         const salt = await bcrypt.genSalt(10);
         const hashPassword = await bcrypt.hash(password, salt);
         // console.log(">>>>>>>",{...req.body, password: hashPassword});
         // Tao khach hang moi
         const result = await Customer.create({ ...req.body, password: hashPassword });
         await Cart.create({"id_customer":result.id});
         res.status(200).json({ message: 'create success !', dsta: result });
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error});
      }
   }
   //login customer
   async handleLogin(req, res) {
      console.log(req.body);
      const { email, password } = req.body;
      try {
         const user = await Customer.findOne({ where: { email } });
         if (user) {
            const comparPassword = await bcrypt.compare(password, user.password);
          //   console.log('>>>>>>>>>>>>>>', comparPassword);
            if (comparPassword) {
               const accessToken = jwt.sign(user.dataValues, sceretKey);
               res.status(200).json({
                  data: user,
                  accessToken: accessToken,
               });
            } else {
     res.status(401).send('password incorrect');
            }
         } else {
            res.status(404).send('email not found');
         }
      } catch (error) {
         console.error(error);
         res.status(500).json({ message: error});
      }
   }
}
module.exports = new CustomersController();
