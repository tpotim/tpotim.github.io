var Storage = {
    getValue: function (key) {
        return localStorage.getItem(key);
    },
    
    setValue: function (key, val) {
        localStorage.setItem(key, val);
    },

    remove: function (key) {
        localStorage.removeItem(key);
    }
};

