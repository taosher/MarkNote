/**
 * @author paoloo1995
 */
let Util = {

    setStorage: (key,value) => {
        return localStorage.setItem(key,value);
    },

    getStorage: (key) => {
        return localStorage.getItem(key)
    },

    getAllStorage: () => {
        return localStorage;
    },

    removeStorage: (key) => {
        return localStorage.removeItem(key);
    },

    cleanStorage: () => {
        return localStorage.clear();
    }

};

export default Util;