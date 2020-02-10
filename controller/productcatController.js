const db = require('../database')

module.exports = {
    getAllproductcat: (req, res) => {
        console.log(req.query)
        let sql = `select p.nama, c.category from products p 
        join productcat pc on p.id=pc.productId join categories c on c.id = pc.categoryId;`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        });
    },
    deleteProductcat: (req, res) => {
        console.log(req.params)
        const query = `DELETE from products where productId=${connection.escape(req.params.idproduct)}`
        db.query(query, (error, results) => {
            if (error) {
                return res.status(500).send(error)
            }
            console.log('Error : ', error)
            console.log('Results : ', results)
            return res.status(200).send(results)
        })
    },
    getproducts: (req, res) => {
        console.log(req.query)
        let sql = `SELECT * FROM products;`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        });
    },
    getcategories: (req, res) => {
        console.log(req.query)
        let sql = `SELECT c.id, c.category 
        FROM categories c 
        LEFT JOIN categories cc ON cc.parentId = c.id
        WHERE cc.id IS NULL;`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        });
    }
    // addProduct: (req, res) => {
    //     console.log(`Query : `, req.query)
    //     console.log(`Body : `, req.body)
    //     const query = `INSERT INTO products (nama,deskripsi,harga) values (${db.escape(req.body.nama)},${db.escape(req.body.deskripsi)},${db.escape(req.body.harga)});`
    //     db.query(query, (error, results) => {
    //         if (error) {
    //             return res.status(500).send(error)
    //         }
    //         console.log('Error : ', error)
    //         console.log('Results : ', results)
    //         return res.status(200).send(results)
    //     })
    // },
    // editProduct: (req, res) => {
    //     console.log(req.params)
    //     const query = `UPDATE products set ? where id=${db.escape(req.params.id)}`
    //     console.log(query)
    //     db.query(query, req.body, (error, results) => { //penambahan req.body hanya digunakan ketika parameter syntax sql pada query menggunakan '?'
    //         if (error) {
    //             return res.status(500).send(error)
    //         }
    //         console.log('Error : ', error)
    //         console.log('Results : ', results)
    //         return res.status(200).send(results)
    //     })
    // }
}