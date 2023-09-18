class TimeLimitedCache {

    constructor(key, value, duration){
        this.key = key;
        this.value = value;
        this.duration = duration;
        this.isExpired = false;
    }

    set(key, value, duration) {

    }

    get(key) {

    }

    count() {

    }
}


console.log(new TimeLimitedCache(5,54,100, false))