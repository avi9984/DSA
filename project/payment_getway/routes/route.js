const express=require("express");
const app=express();

const https=require('https')
const qs=require('querystring')

const checkSum_lib=require('../Payment/checkSum');
const config=require('../Payment/config')

const parseUrl=express.urlencoded({extended:false})
const parseJson=express.json({extended:false})

app.get("/",(req,res)=>{
    res.render('index');
})

app.post("/paynow",[parseJson,parseUrl],(req,res)=>{

    const paymentDetails={
        amount: req.body.amount,
        customerId: req.body.name.replace(/\s/g,''),
        customerEmail:req.body.email,
        customerPhone:req.body.phone
    }

    if(!paymentDetails.amount || !paymentDetails.customerId || !paymentDetails.customerEmail || !paymentDetails.customerPhone){
        res.status(400).send('Payment failed')
    }else{
        const params={};
        params['MID']=config.PaytmConfig.mid;
        params['WEBSITE']=config.PaytmConfig.webstie;
        params['CHANNEL_ID']='WEB';
        params['INDUSTRY_TYPE_ID']='Retail';
        params['ORDER_ID']='TEST_' +new Date().getTime();
        params['CUST_ID']=paymentDetails.customerId;
        params['TXN_AMOUNT']=paymentDetails.amount;
        params['CALLBACK_URL']='http://localhost:2000/callback';
        params['EMAIL'] =paymentDetails.customerEmail;
        params['MOBILE_NO']=paymentDetails.customerPhone;

        checkSum_lib.genchecksum(params,config.PaytmConfig.key, function(err,checkSum){
            var txt_url="https://securegw-stage.paytm.in/theia/processTransaction";

            var form_fiels="";
            for(var x in params){
                form_fiels +="<input type='text"
            }
        })
    }
})