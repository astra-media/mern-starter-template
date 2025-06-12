const cache = new Map()

const setCache = (key, data, ttlMs) => {    //ttlMs = Time To Live (TTL) in milliseconds
    cache.set(key, {
        value: data,
        expires: Date.now() + ttlMs
    })
    console.log('Weather Chached')
}


const getCache = (x) => {
    const cached = cache.get(x)
    if(!cached) return null
    if(cached.expires < Date.now()){
        cache.delete(key)
        return null
    }
    console.log('Using cached data')
    return cached.value
}

export {setCache, getCache}