const path = require("path")
const express = require("express")
const webpack = require("webpack")
const webpackMiddleware = require("webpack-dev-middleware")
const webpackConfig = require("./webpack.config")

const app = express()
const publicPath = path.join(__dirname, "public")
const port = process.env.PORT || 9000
const router = express.Router();

app.use(webpackMiddleware(webpack(webpackConfig)))

app.use(express.static("public"));

router.get('/stimulus',function(req,res){
  res.sendFile(path.join(publicPath+'/view/stimulus.html'));
});

router.get('/vanillajs',function(req,res){
  res.sendFile(path.join(publicPath+'/view/vanillajs.html'));
});

//add the router
app.use('/', router);
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})