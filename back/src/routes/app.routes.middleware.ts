/**Challenge 1: Middleware that only allows request to proceed if req has session and it's applicable only to all URLs that start with pub/proxy  and api/proxy*/

import {RequestHandler} from 'express'

export const authenticateUser : RequestHandler = (req, res, next) => { 
    if (req.session.user && req.session.user.email) {
        next();
    } else {
        res.json('NOT Authenticated');
    }
}