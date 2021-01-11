const js = {
    each: (arr, fn) => {
        for (let i = 0; i < arr.length; i++) {
            fn(arr[i], i, arr);
        }
    },
    filter: (arr, fn) => {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
    map: (arr, fn) => {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(fn(arr[i]));
        }
        return newArr;
    },
    find: (arr, fn) => {
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                return arr[i];
            }
        }
    },
    findIndex: (arr, fn) => {
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                return i;
            }
        }
    },
    contain: (arr, value) => {
        if (arr.indexOf(value) !== -1) {
            return true;
        } else {
            return false;
        }
    },
    pluck: (arr, propertyName) => {
        const newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i][propertyName]);
        }
        return newArr;
    },
    without: (arr, ...values) => {
        for (let i = 0; i < values.length; i++) {
            let j = 0;
            while (j < arr.length) {
                if (arr[j] === values[i]) {
                    arr.splice(j, 1);
                } else {
                    ++j;
                }
            }
        }
        return arr;
    }
};