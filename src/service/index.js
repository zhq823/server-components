import iHttp from './http'

const request = new iHttp({
    baseURL: 'http://py-xapi-dev.eventworld.cn'
}).api;

export default class Service {

    constructor() {}

    queryCacheData(params) {
        return request.post(`/api/queryCacheData`, { params });
    }

    get(params) {
        return request.get(`xxx`, { params });
    }

    post(params) {
        return request.post(`xxx`, params);
    }

}