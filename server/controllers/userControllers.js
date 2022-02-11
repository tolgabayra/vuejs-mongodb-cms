const User = require("../models/User")
const nodemailer = require("nodemailer");


const createUser = async (req,res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            developerstatus: req.body.developerstatus
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

const deleteUser = async (req,res) => {
    if(req.params.id){
        try {
            try {
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("user has been deleted.!!")
            } catch (err) {
                res.status(500).json(err)
            }
        } catch (err) {
            res.status(500).json("User not found !")
        }
    }else{
        res.status(401).json("you can delete only your account !")
    }
}

const getUser = async (req,res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
}

const getAllUser = async (req,res) => {
    try {
        const users = await User.find().limit(10)
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json(err)
    }
}

const sendEmail = async () => {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }



module.exports = {
    createUser,
    deleteUser,
    getUser,
    getAllUser,
    sendEmail
}