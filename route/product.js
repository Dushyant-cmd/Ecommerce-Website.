const express = require('express');
const router = require('express').Router();
const bodyparser = require('body-parser');
const product = require('../models/product');
const fs = require('fs')

//body-parser
router.use(express.urlencoded({extended: false}))

router.get('/royal_enfield_re44', (req, res, done) => {
    product.findOne({title: "royal_enfield_re44"}).then(data =>{        
        res.render('order-process-details',{
            name: req.user !== undefined ? req.user.full_name : "",
            heading: data.heading,
            img_src: data.img_src,
            price: data.price,
            currency: data.currency
        })
        let currentpd = JSON.stringify(data);
        fs.writeFileSync("current_product.json", (currentpd));
    })
})

// router.get('/copper%wire', (req, res, done) => {
//     product.findOne({title: "copper wire"}).then(data =>{        
//         res.render('order-process-details',{
//             name: req.user !== undefined ? req.user.full_name : "",
//             heading: data.heading,
//             img_src: data.img_src,
//             price: data.price,
//             currency: data.currency
//         })
//         let currentpd = JSON.stringify(data);
//         fs.writeFileSync("current_product.json", (currentpd));
//     })
// })

module.exports = router;