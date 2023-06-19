"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
const router = (0, _express.Router)();
router.get("/api", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello!"
  });
});
var _default = router;
exports.default = _default;