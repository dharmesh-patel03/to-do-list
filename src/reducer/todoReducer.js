const initialData = {
    list: []
}

const todoReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_DATA":
            const { id, data } = action.payload;
            // console.log({
            //     ...state,
            //     list: {
            //         ...state.list,data
            //     }
            // })
            return {
                ...state,
                list: [
                    ...state.list, { data, id }
                ]
            }
        case "DELETE_DATA":
            const updatedData= state.list.filter((currentData) => {
                // console.log(action.id)
                return currentData.id !== action.id
            })
            // console.log(updatedData)
            return {
                ...state,
                list:updatedData
            }
            // break;
        default: return state;
    }


}

export default todoReducer;