
const app = express();

app.get('/',function(req,res) {
    res.send('h<3>Hello Node On Heroku By Sydney Keeton</h3>');

});


app.get('/about', function(req,res) {
    res.sendFile('/README.md', { root: __dirname });

});


app.listen(process.env.PORT || 3000);