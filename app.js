const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport')
const favicon = require('serve-favicon');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const main_routers = require('./route/main_router');
const searchdata = require('./search_data');
const product_route = require('./route/product');
const port = 80;

//initialize express 
const app = express();

//serve favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


//use middleware for static files
app.use(express.static(path.join(__dirname , 'public')));

//passport config
// require('./config/passport')(passport)

//db config
const db = require('./config/dbkeys').mongoURI;

//connect mongo
mongoose.connect(db, { useNewUrlParser : true, useUnifiedTopology: true})
.then(() =>{
    console.log("Connected to database");
})
.catch((err) =>{
    console.log(err);
})

//serve json file
app.get('/filterdata.json', (req, res) =>{
    res.status(200).sendFile(path.resolve(__dirname) + '/filterdata.json')
});

app.get('/p_info.json', (req, res) => {
    res.sendFile(path.resolve(__dirname) + "/p_info.json")
})

//serve js file
app.get('/public/pdsearch.js', (req, res) =>{
    res.sendFile(path.resolve(__dirname) + '/public/pdsearch.js');
});

app.get('/public/index.js', (req, res) =>{
    res.sendFile(path.resolve(__dirname) + '/public/index.js');
})


//serve img
app.get('/Atarmart-Logo', (req, res) => {
    res.sendFile(path.resolve(__dirname) + '/public/image/atarmart_logo_razorpay.png');
})

//set template engine
app.set('view engine', 'ejs');

//body-parser middleware
app.use(express.urlencoded({extended: false}));

// //express session middleware
// app.use(
//     session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true
//     })
// )

// //passport middleware
// app.use(passport.initialize());
// app.use(passport.session());


//add flash middleware
// app.use(flash());

//add gloabal variable to show success and err msg
// app.use((req, res, next) => {
//     res.locals.success_mesg = req.flash('success_mesg');
//     res.locals.error_mesg = req.flash('error_mesg');
//     res.locals.error = req.flash('error');
//     next();
// });

//use for mainrouter file access
app.use(main_routers);

//use for user routes file access
// app.use(user_routes);

//use for payments routes file access
// app.use(payments_routes)

//use for product routes
app.use(product_route);

app.listen(port, () =>{
    console.log(`server is listen on ${port}`);
});