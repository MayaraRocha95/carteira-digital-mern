import Joi from 'joi';

export const AuthUser = Joi.object({
    email: Joi.string().email().required().min(3),
    password: Joi.string().min(3).required(),
    });