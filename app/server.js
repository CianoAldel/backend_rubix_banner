import express from 'express';
import routes from './routes';
import config from './config/constants'

const path = require('path')

const cors = require("cors");

// สร้าง instance express ไว้ในตัวแปร app
const app = express();
app.use(express.json())


global.__basedir = __dirname;

// console.log("global.__basedir: " + global.__basedir);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));


app.use(express.static(path.join(__dirname, 'resources')));

// กำหนด middleware โดยใช้ Path Pattern
// ทุก request จะต้องมี path ที่ขึ้นต้นด้วย ค่าที่เรา config ไว้ในไฟล์ constants


app.use(config.prefix, routes);

// run instance web server โดยใช้ port ที่อยู่ในไฟล์ constants ของเรา
app.listen(config.port, () => {
    console.log(`
    Port: ${config.port}
    Env: ${app.get('env')}
  `);
});