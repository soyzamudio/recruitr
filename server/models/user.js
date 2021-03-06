'use strict';

var bcrypt = require('bcrypt');
var mongoose = require('mongoose');
var jwt = require('jwt-simple');
var moment = require('moment');
var User;

var userSchema = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String},
    role: {type: String, default: 'normal'},
    createdAt: {type: Date, default: Date.now, required: true}
});

userSchema.methods.token = function() {
  var payload = {
    sub: this._id,
    iat: moment().unix(),
    exp: moment().add(10, 'days').unix()
  };

  return jwt.encode(payload, process.env.TOKEN_SECRET);
};

userSchema.statics.register = function(o, cb){
  var self = o;
  User.findOne({email: self.email}, function(err, u) {
    if (u) { return cb(true); }
    var user = new User(self);
    user.password = bcrypt.hashSync(self.password, 8);
    user.save(cb);
  });
};

userSchema.methods.hashPass = function(pass) {
  return bcrypt.hashSync(pass, 8);
};

userSchema.statics.authenticate = function(o, cb){
  User.findOne({email:o.email}, function(err, user){
    if (!user) {return cb(true);}

    let isGood = bcrypt.compareSync(o.password, user.password);
    if (!isGood) {return cb(true);}

    cb(null, user);
  });
};

User = mongoose.model('User', userSchema);
module.exports = User;
