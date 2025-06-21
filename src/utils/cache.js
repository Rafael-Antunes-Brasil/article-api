const cache = new Map();
const CACHE_DURATION_MS = 60 * 1000;

const getFromCache = (key) => {
    const entry = cache.get(key);

    if (entry && (Date.now() - entry.timestamp < CACHE_DURATION_MS)) {
        return entry.data;
    }

    return undefined;
};

const setCache = (key, data) => {
    cache.set(key, { data, timestamp: Date.now() });
};

const clearCache = (key) => {
    if (key) {
        cache.delete(key);
    } else {
        cache.clear();
    }
};

module.exports = {
    getFromCache,
    setCache,
    clearCache
};