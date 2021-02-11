const Joi = require('@hapi/joi');

const registerValidation = data => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required(),
        type: Joi.string().min(3).required(),
        contact: Joi.string().min(6).required(),
        main_doc_name: Joi.string().min(6).required(),
        latitude: Joi.string().min(6).required(),
        
        xyz: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
    
}

const loginValidation = data => {
    const schema = {
        
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
    
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;