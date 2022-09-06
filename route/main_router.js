const express = require('express')
const routers = express.Router();
const path = require('path');
const bodyparser = require('body-parser')
const fs = require('fs');
const product = require('../models/product');
const askme = require('../models/Askme');
const nodemailer = require('nodemailer');
const popupS = require('popups')

//body-parser
routers.use(express.urlencoded({extended: false}));

routers.get('/', (req, res) =>{
    res.status(200).render('home');

    // const userpass = req.user.password;

    // loginuser.findOne({ pass: userpass })
    // .then(user => {
    //     res.status(200).render('home', {
    //         name: user !== undefined ? user.username : ""
    //     });
    // }).catch(console.error("error"))
});


routers.get('/About', (req, res) =>{
    res.status(200).render('about');
});

routers.get('/Shop', (req, res) =>{
    res.status(200).render('shop');
});

routers.get('/Track-My-Order', (req, res) =>{
    res.status(200).render('track-my-order');
});

routers.get('/Contact-Us', (req, res) =>{
    res.status(200).render('contact');
});

routers.get('/search_results', (req, res, next) =>{
    const username = req.query.title;
    product.find({ title: {$regex: username,$options:"$i"}}).then(data => {
        let filterusersstring = JSON.stringify(data);
        fs.writeFileSync('filterdata.json', filterusersstring) 
        res.status(200).render('search-results');
    });
});

routers.get('/search_res', (req, res, next) =>{
    const username = req.query.title;
    product.find({ title: {$regex: username,$options:"$i"}}).then(data => {
        let filterusersstring = JSON.stringify(data);
        fs.writeFileSync('filterdata.json', filterusersstring) 
        res.status(200).render('search-results');
    });

});

//Save form data in atlas for queries
routers.post('/Askme', (req, res) =>{    
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    let full_date = date + "/" +  month + "/" + year;
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    let full_time = hours + ":" + minutes;
    let final_date_with_time = full_date + "(" + full_time + ")"
    const askme_details = new askme({
            full_name: req.body.full_name,
            e_mail: req.body.e_mail,
            message: req.body.msg_contact,
            date_time: final_date_with_time
     })
    askme_details.save();
    popupS.alert({
        content: 'Data Saved'
    });
    res.status(200).render('contact');
})

module.exports = routers;