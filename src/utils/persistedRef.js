import {ref, watch} from "vue";

/**
 * Creates a ref backed by localStorage. The stored value (if any) replaces the default.
 * Storage access is wrapped because it can throw (private windows, blocked site data).
 * @param key localStorage key
 * @param defaultValue value used until something has been stored
 * @returns {Ref}
 */
export function persistedRef(key, defaultValue) {
    let initial = defaultValue;
    try {
        const stored = localStorage.getItem(key);
        if (stored !== null) {
            initial = JSON.parse(stored);
        }
    } catch (e) {
        // fall back to default
    }

    const value = ref(initial);

    watch(value, newValue => {
        try {
            localStorage.setItem(key, JSON.stringify(newValue));
        } catch (e) {
            // persistence is best effort
        }
    }, {deep: true, flush: 'sync'});

    return value;
}

/**
 * Sets a persisted ref back to its default and removes the stored value, so later changes to the default take effect.
 */
export function resetPersistedRef(key, valueRef, defaultValue) {
    valueRef.value = defaultValue;
    try {
        localStorage.removeItem(key);
    } catch (e) {
        // persistence is best effort
    }
}
