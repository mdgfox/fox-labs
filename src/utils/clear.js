const clearObject = (obj) => {
    for (const key in obj) {
        if (!obj[key] || typeof obj[key] !== 'object') {
            continue;
        }
        obj[key] = clearObject(obj[key]);
        if (Object.keys(obj[key]).length === 0) {
            delete obj[key];
        }
    }
    return obj;
};

const clearArray = (arr) => {
    return arr.filter(Boolean);
};

export { clearObject, clearArray } from 'clear';
