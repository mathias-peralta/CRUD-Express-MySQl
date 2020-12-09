const controller = {};

controller.list = (req, res) => {

    req.getConnection((err, conn) => {
        if(err) {
            console.log(err);
        }
        conn.query('SELECT * from customer', (err, rows) => {
            if(err) {
                console.log(err);
            }
            console.log(rows);
            res.render('index', {
                data: rows
            });
        })
    })
    
}

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer ?', [data], (err, customer) => {
            if(customer) {
                console.log(customer);
            }
            res.send('OK!');
        })
    })
}

module.exports = controller;