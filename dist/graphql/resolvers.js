"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolver = void 0;
const mockData_1 = require("../database/mockData");
var strings = (0, mockData_1.mockData)();
//console.log(numr)
const resolver = () => {
    return {
        Query: {
            strings: () => strings,
        },
    };
};
exports.resolver = resolver;
