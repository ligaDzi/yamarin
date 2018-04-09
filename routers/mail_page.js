// Отправка письма от клиента
exports.get = async function(ctx, next) {  

    const nodemailer  = require('nodemailer');

    const smtpTransport = nodemailer.createTransport({
      service: "Gmail",
      auth: {
          user: "adyamain123456789@gmail.com",  
          pass: "LIGAGAGAGA"
      }
    });

    let mailOptions = {
      from: ctx.request.body.username,
      to: 'adyamain123456789@gmail.com',
      subject: 'Yamarin Заказ',
      text: 'Заказ с сайта',
      html: `<b>${ctx.request.body.username}</b><br/><br/>
             <span>Моя почта: </span><b>${ctx.request.body.email}</b><br/>
             <span>Мой телефон: </span><b>${ctx.request.body.phone}</b><br/><br/>
             <p>${ctx.request.body.mess}</p>`
    };

    let transportResponse = await smtpTransport.sendMail(mailOptions);
    ctx.redirect('/');

    console.log(transportResponse);
       
  };