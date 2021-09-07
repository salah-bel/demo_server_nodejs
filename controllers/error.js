const path = require('path');
exports.get404 = (req, res) => {
    //res.status(404).send('<h1> 404 Not Found</h1>')
    res.status(404).render('404')
}