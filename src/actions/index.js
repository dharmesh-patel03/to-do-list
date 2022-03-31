export const add = (data) => {
    // console.log(data);
    return {
        type: "ADD_DATA",
        payload: {
            id: new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodo = (id) => {
    return {
        type: "DELETE_DATA",
        id:id
    }
}
