function Hash(){
    var _hash = {};
    var pre = '__' + (new Date()).getTime();

    function put(key, value){
        _hash[pre + key] = value;
        return this;
    }

    function get(key){
        return _hash[pre + key];
    }

    function remove(key){
        delete _hash[pre + key];
    }

    return {
        'put': put,
        'get': get,
        'remove': remove
    }
}