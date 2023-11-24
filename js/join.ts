type JSONValue = null | boolean | number | string | JSONValue[] | { [ key : string ] : JSONValue}

const join = function (arr1 : any[], arr2: any[]) : JSONValue[] {
    const combained = arr1.concat(arr2);
    const merged: { [key: number]: any } = {};

    combained.forEach((obj) => {
        const id = obj.id;
        if (!merged[id]) {
            merged[id] = { ...obj };
        } else {
            merged[id] = { ...merged[id], ...obj };
        }
    });

    const joinedArray = Object.values(merged);
    joinedArray.sort((a, b) => a.id - b.id);

    return joinedArray;
};
