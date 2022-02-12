const mongoose = require('mongoose')

const plasmaSchema = new mongoose.Schema({
    'Name': {
        type: String
    },
    'Contributor': {
        type: String
    },
    'Phone': {
        type: String,
        unique: true
    },
    'City': {
        type: String
    },
    'Area': {
        type: String
    },
    'Description': {
        type: String
    },
    'Status': {
        type: String
    },
    'Timestamp': {
        type: Number
    }
})

plasmaSchema.methods.toJSON = function () {
    const service = this
    const serviceObject = service.toObject()
    delete serviceObject._id
    delete serviceObject.Contributor
    return serviceObject
}

mongoose.model('plasma', plasmaSchema)