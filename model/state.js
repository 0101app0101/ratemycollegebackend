const state = new mongoose.Schema(
{
    id: {
        type:String
    },
    code:{
        type:String
    },
    name: {
        type:String
    }
}
)
module.exports = mongoose.model('state',state)