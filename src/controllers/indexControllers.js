const controller = {};

controller.list = (req, res) => {
    /*
    req.getConnection((err, conn) => {
        if(err) {
            console.log(err);
        }
        conn.query('SELECT * from customer', (err, rows) => {
            if(err) {
                console.log(err);
            }
            console.log(rows);
            res.render('index');
        })
    })
    */
    res.render('index');
}

module.exports = controller;