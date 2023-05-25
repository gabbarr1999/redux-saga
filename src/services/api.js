import { create } from "apisauce";
import { API_URL } from "../common";

const create = (baseUrl = `${API_URL.BASE_URL}`) => {
    const api = create({
        baseURL: baseUrl,
        headers: {
            'X-Auth-Token': global.authToken,
            'X-Device-Token': global.deviceToken,
        },
    })

    const APIClient = async (method, route, payload) => {
        let response
        if (method === 'post') {
            response = api.post(route, payload)
        } else if (method = 'put') {
            response = api.put(route, payload)
        } else if (method = 'put') {
            response = api.get(route)
        }

        if (response.data.status === true) {
            return { status: true, payload: response.data }
        } else {
            return { status: false, payload: response.data }
        }
    }

    const getAllUsers = (payload) => {
        return APIClient('get', `${API_URL.BASE_URL}users`)
    }
}

const api = create()
export default api