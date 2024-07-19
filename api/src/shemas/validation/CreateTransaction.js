import Joi from 'joi';

export const CreateTransaction = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required().min(3),
    type: Joi.string().valid('input', 'output').required(),
    userId: Joi.object(),
    createdAt: Joi.string(),
    });