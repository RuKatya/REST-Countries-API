const data = require('../dataCountry/data.json')

exports.getAllData = (req, res ) => {
    try {
        return res.send(data)
    } catch (error) {
        console.log(error);
    }
}

exports.getByRegion = (req, res) => {
    try {
        const {region} = req.body

        if(region.length == 0) return res.send({massage: "Input can not be empty"})

        const regionFind = data.filter(reg=> reg.region == region)

        return res.send(regionFind)
    } catch (error) {
        console.log(error);
    }
}

exports.getByInput = (req, res) => {
    try {
        const {searchCountry} = req.body

        if(searchCountry.length == 0) return res.send({massage: "Input can not be empty"})

        const country = data.filter(reg=> reg.name.toLowerCase().includes(searchCountry.toLowerCase()))

        return res.send(country)
    } catch (error) {
        
    }
}