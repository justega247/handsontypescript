"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todos = void 0;
var uuid_1 = require("uuid");
exports.todos = [
    {
        id: uuid_1.v4(),
        title: "First todo",
        description: "One world"
    },
    {
        id: uuid_1.v4(),
        title: "Second todo",
        description: "One world dream"
    },
    {
        id: uuid_1.v4(),
        title: "Third todo",
    },
];
