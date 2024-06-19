import {
    create_category_service,
    get_category_service,
} from "@/app/services/category-service";
import { categorySlice } from "./category-slice";

export function create_category_thunk(data) {
    return async function (dispatch, getState) {
        const result = await create_category_service(data);
        dispatch(categorySlice.actions.setcategories(result.data.result));
        return result;
    };
}

export function get_category_thunk(data) {
    return async function (dispatch, getState) {
        const result = await get_category_service();
        dispatch(categorySlice.actions.setcategories(result.data.result));
    };
}
