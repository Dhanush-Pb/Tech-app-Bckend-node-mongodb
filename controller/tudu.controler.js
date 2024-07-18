const Todoservice = require('../services/tudu.services');

exports.createtudo = async (req, res, next) => {
    try {
        const { userid, title, desc } = req.body;
        let todo = await Todoservice.createtudo(userid, title, desc);
        res.json({ status: true, success: todo });
    } catch (e) {
        console.log(e);
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
}

exports.getUsertudo = async (req, res, next) => {
    try {
        const { userid } = req.query;
        console.log(`Fetching todo items for userid: ${userid}`); // Debug log
        let todos = await Todoservice.getTududata(userid);
        console.log(`Returned todos: ${todos}`); // Debug log
        res.json({ status: true, success: todos });
    } catch (e) {
        console.log(`Error fetching todos: ${e}`); // Debug log
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
}

