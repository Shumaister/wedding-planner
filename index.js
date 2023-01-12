"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = __importDefault(require("./src/init/express"));
const mongo_1 = __importDefault(require("./src/init/mongo"));
const config_1 = __importDefault(require("./src/config"));
const app = (0, express_1.default)();
const { port } = config_1.default;
(0, express_2.default)(app);
(0, mongo_1.default)().then(() => app.listen(port, () => console.log("Listening in port", port)));
