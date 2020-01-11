const User = require('../models/user');

module.exports = {
    postRegister(req, res, next) {
        User.register(new User({ username: req.body.username }), req.body.password, (err) => {
            if (err) {
                console.log('error while user register!', err);
                return next(err);
            }

            console.log('user registered!');

            res.redirect('/');
        });
    }
}