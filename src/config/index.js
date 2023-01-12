"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mongo: {
        uri: process.env.MONGO_URI || "mongodb://localhost:27017/test"
    },
    port: process.env.PORT || 9042
};
