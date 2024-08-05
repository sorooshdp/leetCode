"use strict";
function compactObject(obj) {
    function DFS(obj) {
        if (!obj) {
            return false;
        }
        if (typeof obj !== 'object')
            return obj;
        if (Array.isArray(obj)) {
            const newArr = [];
            for (let i = 0; i < obj.length; ++i) {
                const curr = obj[i];
                const subRes = DFS(curr);
                if (subRes) {
                    newArr.push(subRes);
                }
            }
            return newArr;
        }
        const newObj = {};
        for (const key in obj) {
            const subRes = obj[key];
            if (subRes) {
                newObj[key] = subRes;
            }
        }
        return newObj;
    }
    return DFS(obj);
}
;
//------------------- iterative depth-first search ------------------
// const compactObjectIterative = function( obj : Obj ) : Obj { 
//     const stack : [Obj, Obj][] = [[obj, Array.isArray(obj) ? [] : {}]];
//     let newObj : Obj = stack[0][1];
//     while ( stack.length > 0 ) {
//         const [currObj, newCurrObj] = stack.pop()!;
//         for ( const key in currObj ) {
//             const val = currObj[key];
//             if ( !val ) continue
//             if ( typeof val !== 'object' ) {
//                 Array.isArray(newCurrObj) ? newCurrObj.push(val) : newCurrObj[key] = val;
//                 continue 
//             }
//             const newSubObj : Obj = Array.isArray(val) ? [] : {}
//             Array.isArray(newCurrObj) ? newCurrObj.push(newSubObj) : newCurrObj[key] = newSubObj
//             stack.push([val, newSubObj])
//         }
//     }
//     return newObj
// }
