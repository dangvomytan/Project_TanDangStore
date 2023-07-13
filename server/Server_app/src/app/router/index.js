const userRouter = require('./users.router');
const customerRouter = require('./customers.router');
const categoryRouter = require('./category.router');
const typeRouter = require('./type.router');
const brandRouter = require('./brand.router');
const productRouter = require('./product.router');
const versionRouter = require('./version.router');
const overviewRouter = require('./overview.router');
const specificationRouter = require('./specification.router.js')


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



          app.get('/',(req, res) =>{
               res.json({message:'Welcome to the API'});
          })
     }
     module.exports  = Routers;