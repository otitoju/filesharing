import { uploadStart, uploadSuccess, getUploadFile } from "../Redux/fileSlice";

const baseURL = "http://localhost:4000";

export async function getFile(fileId) {
    try {
        const info = await fetch(`${baseURL}/file/single/${fileId}`, { method: "GET" })
        .then( res => res.json());
        return info;
    } catch (error) {
        throw error;
    }
}

export async function downloadFile(fileId) {
    try {
        const info = await fetch(`${baseURL}/file/${fileId}`, { method: "GET" })
        .then(res => res.json());
        return info;
    } catch (error) {
        throw error;
    }
}


export async function uploadFile(dispatch, file) {
    try {
        dispatch(uploadStart());
        const res = await fetch(`${baseURL}/upload`, { method: "POST", body: file })
        .then(res => res.json());
        return dispatch(uploadSuccess(res));
    } catch (error) {
        //dispatch(uploadFailure()) 
        throw error;
    }
}

