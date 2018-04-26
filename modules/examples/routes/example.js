'use strict';

const system  = require('../../../helpers/system');

module.exports = [
    {
        method: "GET",
        path: "/",
        handler: (req, res) => {
            return res.response({foo: "bar"}).code(200)
        }
    },
    {
        method: "GET",
        path: "/hello/{name}",
        handler: (req, res) => `Hello, ${req.params.name}`
    },
    {
        method: "GET", 
        path: "/system", 
        handler: (req, res) => {
            const data = system.infos();
            return res.response(data).code(200);
        }
    }
]