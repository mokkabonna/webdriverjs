exports.command = function(callback) {

    if (typeof callback === "function") {
        setImmediate(callback);
    }

};
