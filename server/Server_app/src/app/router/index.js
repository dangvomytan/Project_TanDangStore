const userRouter = require('./users.router');
const customerRouter = require('./customers.router');
const categoryRouter = require('./category.router');
const typeRouter = require('./type.router');

function Routers(app)
     {
          app.use('/api/v1/users', userRouter);
          app.use('/api/v1/customers', customerRouter);
          app.use('/api/v1/category',categoryRouter);
          app.use('/api/v1/type',typeRouter);


          app.get('/',(req, res) =>{
               res.json({message:'Welcome to the API'});
          })
     }
     module.exports  = Routers;