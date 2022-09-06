function fetchlogdata() {
    fetch('http://localhost/order')
    .then(response => {
        return response.json();
    })
    .then(info => paymentdata(info))
}

function paymentdata(info) {
    const main_cont = document.getElementById('main-container1');
    const details = document.getElementById('details1');
    const amount = document.getElementById('pd_amount');
    var options = {
        "key": "rzp_test_pOKJLduw5Dr3Z6",
        "name": "Atarmart",
        "description": "Secure with razorpay",
        "image": "http://localhost/Atarmart-Logo",
        "order_id": info.id, 
        "callback_url": "/payment_successfull",
        "theme": {
            "color": "#FFA500"
        },
        "prefill": {
            "email": "atar@gmail.com",          
        },
    };
    var rzp1 = new Razorpay(options);
    document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
    }
    
}

fetchlogdata()