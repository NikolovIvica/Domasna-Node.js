const expres = require('express');
const router = express.Router();

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)// zema info od url kade ima "name=Kyle" i pechati 'kyle'
    res.send('user list')
});

router.get('/new', (req, res) => {
    res.render('users/new',);
});

router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName });
        res.redirect(`/users/${users.length - 1}`);
    } else {
        console.log('error');
        res.render('users/new', { firstName: req.body.firstName });

    }

});




router.get('/:id', (req, res) => {
    req.params.id // go zemame parametaro 'id' od get request-ot 
    res.send(`get user with id ${req.params.id}`);
});

router.put('/:id', (req, res) => {

    res.send(`update user with id ${req.params.id}`);
});

router.delete('/:id', (req, res) => {

    res.send(`delete user with id ${req.params.id}`);
});


// Skrateno za ova gore
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`get user with id ${req.params.id}`);
    })
    .put((req, res) => {
        res.send(`update user with id ${req.params.id}`);
    })
    .delete((req, res) => {
        res.send(`delete user with id ${req.params.id}`);
    });

const users = [{ name: 'kyle' }, { name: 'sally' }]
router.param('id', (req, res, next, id) => {
    req.user = user[id]
    next();
});

function logger(req, res, next) {
    console.log(req.originaUrl); // 'req.originaURL 'go pechati url shto go vnsuvame vo browser-o 
    next();
}


module.exports = router