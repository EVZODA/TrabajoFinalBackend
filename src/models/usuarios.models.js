const {model, Schema} = require ('mongoose')

const BreakingSchema = new Schema ({
name: {
    type: String,
    required: [true, "Ingrese su usuario"],
    unique: true
},
lastName: {
    type: String,
    required: [true, "Ingrese su apellido"],
},

ocupattion: {
    type: String,
    required: [true, "Ingrese su profesion"]
},

email: {
    type:String,
    required: [false, "Ingrese su email"]
},
created_at: {type:Date, default: new Date()}

})

const BreakingModel = model ("breaking", BreakingSchema);

module.exports = BreakingModel;