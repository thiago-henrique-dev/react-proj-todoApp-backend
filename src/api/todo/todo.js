const restfull = require('node-restfull')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description:{ type: String, required: true},
    done: { type: Boolean, required: true, default: false},
    createdAt: { type: Date, default: Date.now}

})

module.exports = restfull.model('Todo', todoSchema)