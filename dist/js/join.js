"use strict";
const join = function (arr1, arr2) {
    const combained = arr1.concat(arr2);
    const merged = {};
    combained.forEach((obj) => {
        const id = obj.id;
        if (!merged[id]) {
            merged[id] = Object.assign({}, obj);
        }
        else {
            merged[id] = Object.assign(Object.assign({}, merged[id]), obj);
        }
    });
    const joinedArray = Object.values(merged);
    joinedArray.sort((a, b) => a.id - b.id);
    return joinedArray;
};
