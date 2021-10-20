import {RequestHandler} from 'express';
import fs from 'fs';
import User from '../models/User'

export const logIn : RequestHandler = (req, res) => {
    const user:User = new User();
    user.email = req.body.email;
    req.session.user = user;
    res.json('Logged In')
}

export const logOut : RequestHandler = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.json('Logged Out')
    });
}

export const pub : RequestHandler = (req, res) => { 
    res.json('Pub')
}

export const api : RequestHandler = (req, res) => {
    res.json('api')
}

/**Challenge 2: That is using middleware from previous question. For post /save/:id writes contents of request body that is JSON to file named id.json and on get reads file Id and serves back as JSON.*/

export const saveData : RequestHandler = (req, res) => { 
    if (!fs.existsSync(`${__dirname}/../../data`)) {
        fs.mkdirSync(`${__dirname}/../../data`);
    }
    fs.writeFile(`${__dirname}/../../data/${req.params.id}.json`, JSON.stringify(req.body), (err) => {
        if (err) throw err;
        res.json('The file has been saved!')
    });
}

export const getData : RequestHandler = (req, res) => { 
    let data = fs.readFileSync(`${__dirname}/../../data/${req.params.id}.json`);
    res.status(200).json(JSON.parse(data.toString()));
}