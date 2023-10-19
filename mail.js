exports.init = function() {
try{
nodemailer = require('nodemailer');
transporter = nodemailer.createTransport({

  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'j.....@gmail.com',
    pass: 'n... ... ... ...',
  },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
});


transporter.verify().then(console.log).catch(console.error);
}catch(err){console.log(err)}
}

exports.action = function(data){

transporter.sendMail({
  from: data.mailfrom, // sender address
  to: data.mailto, // list of receivers
  subject: data.subject, // Subject line
  text: data.mailtext, // plain text body
  
            attachments: [{   // stream as an attachment
            filename: data.filename,
            path : data.mailpath,
            cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
        }]
}).then(info => {
  console.log({info});
}).catch(console.error);




}