let axios=require('axios')
const { json } = require('express')

const getCovidApi= async (req,res)=>{
    try {
        let body=json.parse(req);
        let data=[];
        for(let i=0; i<body.stateWise.length; i++){
            data.push({
                "State":body.stateWise[i].State,
                "Confirmed":body.stateWise[i].Confirmed,
                "Active":body.stateWise[i].Active,
                "Recovered":body.stateWise[i].Recovered,
                "Death":body.stateWise[i].Death,
                "TotalCase":body.stateWise[i].TotalCase

            })
        }

    } catch (error) {
        console.log(error)
        res.status(500).send({status:false, msg:error.massage})
    }
}

module.exports={getCovidApi}