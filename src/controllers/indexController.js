const { validationResult } = require('express-validator')

let controller = {
    index: (req, res) => {
        
        res.render('index')
    },
    store: (req, res) => {

        let { name, color, email, edad} = req.body

        let errors = validationResult(req);

        if(errors.isEmpty()) {

            req.session.user = {
                email,
                color,
            }

            if(req.body.remember){
                const TIME_IN_MILISECONDS = 600000
                res.cookie("color", req.session.user, {
                    expires: new Date(Date.now() + TIME_IN_MILISECONDS),
                    httpOnly: true,
                    secure: true
                })
            }

            res.locals.user = req.session.user;

            res.render('success', {
                name,
                color,
                email,
                edad
            })
        } else {
            res.render('index', {
                errors: errors.mapped(),
                old: req.body
            })
        }
    }
}

module.exports = controller