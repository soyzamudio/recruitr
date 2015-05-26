var mandrill = require('node-mandrill')(process.env.MANDRILL_KEY);

function email(user, cb) {
  var message = generateEmail(user);
  mandrill('/messages/send', {
    message: {
      to: [{email: user.email, name: user.firstName + " " + user.lastName}],
      from_email: 'no-reply@agilelabs.com',
      subject: "Thank you for registering",
      text: message
    }
  }, cb);
}

function generateEmail(user) {
  return "Thank you for registering to Agile Labs. <br> We have generated a unique password for you; you can modify this password whenever you want once you log in. <br><br> Email: " + user.email + "<br>Password: " + user.random + "<br><br>Thank you!";
}

module.exports = { email:email };
