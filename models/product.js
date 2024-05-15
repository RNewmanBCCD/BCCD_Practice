const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename), 
    'data', 
    'products.json'
);
// const products = [];

const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(fileContent));
        }
    });
}

module.exports = class Product {
    constructor(productTitle, imageUrl, price, description) {
        this.title = productTitle;
        this.image = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        // products.push(this);  ---- for array storage
        this.id = Math.random().toString();
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        getProductsFromFile(callback);
        // return products;   --- for array storage
    }

    static findById(id, callback) {
        getProductsFromFile((products) => {
            const product = products.find((p) => {
                if (p.id === id) {
                    return p;
                }
            });
            callback(product);
        });
    }
};