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
//Guarda un nuevo registro en la BD
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (err, customer) => {
            if(err) {
                console.log(err);
            }
            console.log(customer);
            res.redirect('/')
        })
    })
}

//Elimina un registro 
controller.delete = (req, res) => {
    const { id } = req.params;
    console.log(id);
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, customer) => {
            if(err) {
                console.log(err);
            }
            res.redirect('/');
        })
    })
}
module.exports = controller;