const db = require('../database')

module.exports = {
    getAllcategories: (req, res) => {
        console.log(req.query)
        let sql = `select c.id, c.category as categorychild, c.parentID, ca.category as categoryparent
        from categories c
        left join categories ca
        on c.parentId = ca.id;`
        db.query(sql, (err, results) => {
            if (err) {
                res.status(500).send(err)
            }
            res.status(200).send(results)
        });
    },
    addCategory: (req, res) => {
        console.log(`Query : `, req.query)
        console.log(`Body : `, req.body)
        const query = `INSERT INTO categories (category,parentID) values (${db.escape(req.body.category)},${db.escape(req.body.parentId)});`
        db.query(query, (error, results) => {
            if (error) {
                return res.status(500).send(error)
            }
            console.log('Error : ', error)
            console.log('Results : ', results)
            return res.status(200).send(results)
        })
    },
    deleteCategory: (req, res) => {
        console.log(req.params)
        const query = `DELETE from categories where id=${connection.escape(req.params.id)}`
        db.query(query, (error, results) => {
            if (error) {
                return res.status(500).send(error)
            }
            console.log('Error : ', error)
            console.log('Results : ', results)
            return res.status(200).send(results)
        })
    },
    editCategory: (req, res) => {
        console.log(req.params)
        const query = `UPDATE categories set ? where id=${db.escape(req.params.id)}`
        console.log(query)
        db.query(query, req.body, (error, results) => { //penambahan req.body hanya digunakan ketika parameter syntax sql pada query menggunakan '?'
            if (error) {
                return res.status(500).send(error)
            }
            console.log('Error : ', error)
            console.log('Results : ', results)
            return res.status(200).send(results)
        })
    }
}