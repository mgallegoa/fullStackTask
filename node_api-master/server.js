require('rootpath')();

const express = require('express');
const session = require('express-session');
const router = express.Router();
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs')
const options = {
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Headers": 'Content-Type,x-xsrf-token',
    "Access-Control-Expose-Headers": true,
    "Access-Control-Allow-Methods": 'POST, GET, PUT, DELETE, OPTIONS'
};

app.use(session({ secret: 'test_secret', saveUninitialized: true, resave: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/views'));

app.use(cors(options));

let userSession;
function authenticateUser(req, res, next) {
    if (req.session.email !== undefined) {
        console.log("User is authenticated!");
        next();
    } else {
        console.log("Unauthorised access!");
        res.write('<h3>Please login to access feature.</h3>');
        res.end('<a href=' + '/login' + '>Login</a>');
    }
}

router.get('/', (req, res) => {
    userSession = req.session;
    if (userSession.email) {
        return res.redirect('/api/');
    }
    res.sendFile('index.html');
});


router.post('/login', (req, res) => {
    userSession = req.session;
    userSession.email = req.body.email;
    res.end('done');
});

router.get('/api/*', authenticateUser, (req, res, next) => {
    res.write(`<h1>Hello ${userSession.email} </h1><br>`);
    res.write(`<h1>Open Postman and browse '/save/:id' with post method 
    and pass some Json to store request.</h1><br>`);
    res.end('<a href=' + '/logout' + '>Logout</a>');
    next();
});


router.get('/pub/*', authenticateUser, (req, res, next) => {
    res.write(`<h1>Hello ${userSession.email} </h1><br>`);
    res.write(`<h1>Open Postman and browse '/save/:id' with post method 
    and pass some Json to store file</h1><br>`);
    res.end('<a href=' + '/logout' + '>Logout</a>');
    next();
});
router.get('/data', (req, res, next) => {
    res.write(`<h1>Your are accessing  ${req.url} route</h1><br>`);

});


router.post('/save/:id', function (req, res) {
    if (!fs.existsSync(`${__dirname}/data`)) {
        fs.mkdirSync(`${__dirname}/data`);
    }
    fs.writeFile(`${__dirname}/data/${req.params.id}.json`, JSON.stringify(req.body), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        res.status(201).json('The file has been saved!');
    });
});

router.get('/save/:id', (req, res, next) => {
    let data = fs.readFileSync(`${__dirname}/data/${req.params.id}.json`);
    res.status(200).json(JSON.parse(data));
});

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });

});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log(`App Started on PORT ${process.env.PORT || 3000}`);
});
