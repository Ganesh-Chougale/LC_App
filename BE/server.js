const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/calculate', (req, res) => {
    const { userName, partnerName } = req.body;

    // Validate input for user name
    if (!isValidName(userName)) {
        return res.status(400).send('Please enter a valid name for yourself.');
    }

    // Validate input for partner name
    if (!isValidName(partnerName)) {
        return res.status(400).send('Please enter a valid name for your partner.');
    }

    // Simulate generating a random percentage between 50 and 100
    const lovePercentage = Math.floor(Math.random() * (100 - 50 + 1)) + 50;

    // Sending email using Nodemailer
    const transporter = nodemailer.createTransport({
        // Configure your email provider here (e.g., Gmail)
        service: 'gmail',
        auth: {
            user: 'srax32jr@gmail.com',
            pass: 'srax32jr@gmail'
        }
    });

    const mailOptions = {
        from: 'srax32jr@gmail.com',
        to: 'srax32jr@gmail.com',
        subject: 'Love Bond Calculation Result',
        text: `User: ${userName}\nPartner: ${partnerName}\nLove Percentage: ${lovePercentage}%`
    };

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Love bond calculated and email sent successfully');
        }
    });
});

// Function to validate name
function isValidName(name) {
    // Regular expression to match only alphabetic characters
    const alphaRegex = /^[a-zA-Z]+$/;
    return name.match(alphaRegex);
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
