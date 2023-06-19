"use strict";

var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _index = _interopRequireDefault(require("./routes/index.route"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const port = process.env.PORT || 3000;
const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (req, res) => {
  res.send('Welcome');
});
app.use('/', _index.default);
app.listen(port, () => {
  console.log('http://localhost:', port);
});