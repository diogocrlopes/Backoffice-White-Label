const express = require('express')
	, app = express()
    , multer = require('multer')
    , path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        
        cb(null, 'arquivos/');
    },
    filename: function(req,file,cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });
const type = upload.single('file');
//app.use(express.static('public'));

app.get('/post', (req, res) => res.send('ok'))

app.post('/arquivo', type ,
    (req,res) => res.status(200))

app.listen(3000, () => console.log('App na porta 3000'));