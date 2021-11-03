const express = require('express');

const app = express();

// Middleware, this will all be included when app is called below. 
app.use((req, res, next) => {
    console.log('First middleware');
    next(); // important when not sending a response
});

app.use('/api/posts', (req, res, next) => {
    const posts = [
        {
            id: "adsfapivnqah",
            title: "First server side post",
            content: "coming from the server"
        },
        {
            id: "899q745190and",
            title: "Here we go again",
            content: "Oh hey there"
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});


// exporting app
module.exports = app;