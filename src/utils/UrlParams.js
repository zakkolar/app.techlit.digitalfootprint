/**
 * Gets the current value of a parameter from a map of parameters. Returns default value if not found.
 * @param paramName
 * @param type
 * @param defaultValue
 */
export const getParam = function (paramName, type, defaultValue) {
    const params = hashToParams();

    let param = params.get(paramName);
    if(param){
        switch(type){
            case PARAM_TYPES.BOOLEAN:
                param = !(param.toLowerCase() === "false");
                break;
            case PARAM_TYPES.INTEGER:
                param = parseInt(param);
                break;
            case PARAM_TYPES.ARRAY:
                param = decodeURIComponent(param).split(",");
                break;
            default:
                param = decodeURIComponent(param);
        }
    }
    else{
        param = defaultValue;
    }
    return param;
}

export const PARAM_TYPES  = Object.freeze({
    INTEGER: 'INTEGER',
    BOOLEAN: 'BOOLEAN',
    STRING: 'STRING',
    ARRAY: 'ARRAY',
    DATE: 'DATE'
})

/**
 * Converts url hash in the format #key1=value1&key2=value2 to a map of key/value pairs.
 * @returns {Map<any, any>}
 */
export const hashToParams = function() {
    const hash = window.location.hash.substring(1);
    const params = new Map();
    hash.split("&").forEach(item => {
        const parts = item.split("=");
        if(parts.length === 2){
            params.set(parts[0], parts[1]);
        }
    })
    return params;
}

/**
 * Returns value of provided key from LocalStorage or default if no entry exists.
 * @param key
 * @param defaultValue
 * @returns {any}
 */
const localOrDefault = (key, defaultValue) => JSON.parse(localStorage.getItem(key)) || defaultValue;

/**
 * Retrieves a parameter from the URL hash and caches its value in LocalStorage. Returns cached value if param doesn't exist or default value if param isn't cached. Does not cache value if it matches the default.
 * @param paramName
 * @param type
 * @param defaultValue
 * @returns {*}
 */
export const paramCache = (paramName, type, defaultValue) => {
    const value = getParam(paramName, type, localOrDefault(paramName, defaultValue));
    if (value !== defaultValue) {
        localStorage.setItem(paramName, JSON.stringify(value));
    }
    return value;
}