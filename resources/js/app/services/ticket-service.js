import axios from "axios";


export function update_ticket_status_service(data) {
    try {
        const res = axios.put("/api/update_ticket_status/"+data.ticket_id, data);
        return res;
    } catch (error) {
        return error;
    }
}

export function create_ticket_service(data) {
    try {
        const res = axios.post("/api/ticket", data);
        return res;
    } catch (error) {
        return error;
    }
}

export function get_ticket_service(data) {
    try {
        const res = axios.get("/api/ticket");
        return res;
    } catch (error) {
        return error;
    }
}

export function get_ticket_by_id_service() {
    try {
        const res = axios.get(`/api/ticket/${window.location.pathname.split('/')[3]}`,window.location.search);
        return res;
    } catch (error) {
        return error;
    }
}
export function get_ticket_by_user_id_service() {
    try {
        const res = axios.get(`/api/get_ticket_by_user_id/${window.location.pathname.split('/')[3]}`,window.location.search);
        return res;
    } catch (error) {
        return error;
    }
}

export function update_ticket_by_id_service(data) {
    try {
        const res = axios.put(`/api/ticket/${data.id}`,data);
        return res;
    } catch (error) {
        return error;
    }
}