const Joi = require("joi")

const addToFavoriteSchema = Joi.object({
    user: Joi.string().required(),
    title: Joi.string().required(),
    byteSize: Joi.number().required(),
    imageUrl: Joi.string().uri().required()
})

module.exports = { addToFavoriteSchema }