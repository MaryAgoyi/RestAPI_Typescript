"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const PORT = 5000;
app.get("/", (req, res) => {
    5;
    res.send("hello world 5678");
});
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
