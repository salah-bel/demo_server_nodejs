// CLASSSSSSSSSSSSSSSSS
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json'
);

const getProductsFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Product {
    constructor(title, price, imgUrl, desc) {
        this.title = title;
        this.price = price;
        this.imgUrl = imgUrl;
        this.desc = desc;
    }

    save() {
        this.id = uuidv4();
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        getProductsFromFile(cb);
    }

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(product => product.id === id);
            cb(product);
        });
    }
};