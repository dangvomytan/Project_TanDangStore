const userRouter = require('./users.router');
const customerRouter = require('./customers.router');
const categoryRouter = require('./category.router');
const typeRouter = require('./type.router');
const brandRouter = require('./brand.router');
const productRouter = require('./product.router');
const versionRouter = require('./version.router');
const overviewRouter = require('./overview.router');
const specificationRouter = require('./specification.router');
const orderRouter = require('./Order.router');
const cartRouter = require('./cart.router');
const cartitemRouter = require('./cartitem.router');

function Routers(app)
     {
          app.use('/api/v1/users', userRouter);
          app.use('/api/v1/customers', customerRouter);
          app.use('/api/v1/category',categoryRouter);
          app.use('/api/v1/type',typeRouter);
          app.use('/api/v1/brand',brandRouter);
          app.use('/api/v1/product',productRouter);
          app.use('/api/v1/version',versionRouter);
          app.use('/api/v1/overview',overviewRouter);
          app.use('/api/v1/specification',specificationRouter);
          app.use('/api/v1/order',orderRouter);
          app.use('/api/v1/cart',cartRouter);
          app.use('/api/v1/cartitem',cartitemRouter);



          app.get('/',(req, res) =>{
               res.json({message:'Welcome to the API'});
          })
     }
     module.exports  = Routers;