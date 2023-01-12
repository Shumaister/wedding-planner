"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bluebird_1 = __importDefault(require("bluebird"));
const config_1 = __importDefault(require("../config"));
mongoose_1.default.Promise = bluebird_1.default;
const { mongo: { uri } } = config_1.default;
exports.default = () => mongoose_1.default
    .connect(uri
//, {
// useCreateIndex: true,
//useNewUrlParser: true,
//  useUnifiedTopology: true
// }
)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch(() => {
    console.log("Connection to MongoDB failed");
    process.exit(1);
});
