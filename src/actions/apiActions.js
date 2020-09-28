const apiActionTypes = {
    IS_LOADING:"IS_LOADING"
}

const setApiActionLoading = isLoading => {
    return {
        type: apiActionTypes.IS_LOADING,
        payload:isLoading
    }
}

export {apiActionTypes, setApiActionLoading}