var mongoose=require('mongoose');
var modelValidatorStr={
    trim:true,
    minlength:1,
    type:String,
    required:true
};
var modelValidatorNumber={
    required:false,
    type:Number
};

var KBS=mongoose.model('KBS',{
    title:modelValidatorStr,
    url:modelValidatorStr,
    viewCount:modelValidatorNumber,
    ratings:modelValidatorNumber
});

module.exports={
    KBS
};