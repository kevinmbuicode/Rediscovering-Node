const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3500;
const app = express();

// 
app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/new-page(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'new-page.html'))
})

app.get('/old-page(.html)?', (req, res) => {
    //Status code 301 means Moved Permanently. Browser redirects to the new URL and search engines update their links to the resource
    res.redirect(301, 'new-page.html')
})

//Route handlers
const one = (req, res, next) => {
    console.log('one');
    next();
}

const two = (req, res, next) => {
    console.log('two');
    next();
}

const three = (req, res) => {
    console.log('Finished');
    res.send('Finished');
}

app.get('/chain(.html)?', [one, two, three])

// For pages that don't exist
app.get('/*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))