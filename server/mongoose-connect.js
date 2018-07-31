var mongo=require('mongodb');
const mongoose=require('mongoose');


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://192.168.33.10:27017/kbs');

module.exports={
    mongoose
}