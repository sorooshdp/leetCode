class TimeLimitedCache {
    constructor() {
        this.cache = new Map();
    }

    set(key, value, duration) {
        const found = this.cache.get(key);
        if (found) {
            clearTimeout(found.timeOut);
        }
        const timeOut = setTimeout(() => this.cache.delete(key), duration)
        this.cache.set(key, {value , timeOut})
        return Boolean(found);
    }

    get(key) {
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    count() {
        return this.cache.size;
    }
}

console.log(new TimeLimitedCache(5, 54, 100, false));
