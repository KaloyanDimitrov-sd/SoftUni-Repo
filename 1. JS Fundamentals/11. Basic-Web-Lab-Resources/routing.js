const phonebookController = require('./controllers/phonebook-controller');
// const router = require('express').Router();


// router.get('/', phonebookController.index);
// router.post('/add', phonebookController.addPhonebookPost);


// module.exports = router;

module.exports = (app) => {
    app.get('/', phonebookController.index);
    app.post('/add', phonebookController.addPhonebookPost);
}