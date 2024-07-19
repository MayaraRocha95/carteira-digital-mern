import Joi from 'joi';

export const CreateUser = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required().min(3),
    password: Joi.string().min(3).required(),
    createdAt: Joi.string(),
    });