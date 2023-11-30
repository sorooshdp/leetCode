"use strict";
// type JSONValue =
//     | null
//     | boolean
//     | number
//     | string
//     | JSONValue[]
//     | { [key: string]: JSONValue };
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
// -------------------- method 2 ---------------
const joinWithMap = function (arr1, arr2) {
    const map = new Map();
    for (const obj of arr1) {
        map.set(obj.id, obj);
    }
    for (const obj of arr2) {
        if (!map.has(obj.id)) {
            map.set(obj.id, obj);
        }
        else {
            const prevObj = map.get(obj.id);
            for (const key of Object.keys(obj)) {
                prevObj[key] = obj[key];
            }
        }
    }
    const res = [];
    for (const key of map.keys()) {
        res.push(map.get(key));
    }
    return res.sort((a, b) => a.id - b.id);
};
//-------------------------- method 3 ----------------------------
const joinWithTwoPointers = function (arr1, arr2) {
    arr1.sort((a, b) => a.id - b.id);
    arr2.sort((a, b) => a.id - b.id);
    let joinedArray = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i].id < arr2[j].id) {
            joinedArray.push(arr1[i]);
            i++;
        }
        else if (arr1[i].id > arr2[j].id) {
            joinedArray.push(arr2[j]);
            j++;
        }
        else {
            joinedArray.push(Object.assign(Object.assign({}, arr1[i]), arr2[j]));
            j++;
            i++;
        }
    }
    while (i < arr1.length) {
        joinedArray.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        joinedArray.push(arr2[j]);
        j++;
    }
    return joinedArray;
};
