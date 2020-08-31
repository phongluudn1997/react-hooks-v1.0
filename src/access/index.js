import axios from "axios"

class DataAccess {
    constructor(profile, baseurl, option) {
        this._profile = profile;

        this._manner = axios.create({
            baseURL: baseurl,
            timeout: 30000,
        })
    }

    _request(method, args) {
        return this._manner({
            method,
            ...args
        })
    }
}