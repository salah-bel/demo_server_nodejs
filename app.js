const http = require('http');
const express = require('express');
const app = express(); // instance express
const path = require('path');
const multer = require('multer');



//ROUTES
const adminRoutes = require('./routes/admin'); // import du routin
const shopRoutes = require('./routes/shop'); // import shop router

//MIDDLEWARES
app.set('view engine', 'ejs');

//CONTROLLER
const errorController = require('./controllers/error')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'multerImages')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer({ storage: storage }).single('image'))

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'));


app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);
app.use(errorController.get404);


const server = http.createServer(app);



server.listen(3002);