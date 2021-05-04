const remoteURL= "http://localhost:8808"

// --------------eat data-------------//
export const getEatById = (id) => {
    return fetch(`${remoteURL}/eat/${id}`)
    .then(response => response.json())
}

export const deleteEat= (id) =>{
return fetch(`${remoteURL}/eat/${id}`, {
    method: "DELETE"
}).then(result =>result.json)

}

export const addEat =(newEat) => {
    return fetch(`${remoteURL}/eat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEat)
    }).then(response =>response.json())
}

export const updateEat= (editedEat) => {
    return fetch(`${remoteURL}/eat/${editedEat.id}`, 
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(editedEat)
    }).then(response => response.json())
}

export const getUserEat= (userId) => {
    return fetch(`${remoteURL}/eat?userId=${userId}&_expand=user`)
    .then(response => response.json())
}

// --------------------------//

// ----- sleep data--------//


export const getSleepbyId = (id) => {
    return fetch(`${remoteURL}/sleep/${id}`)
    .then(response => response.json())
}

export const deleteSleep= (id) =>{
return fetch(`${remoteURL}/sleep/${id}`, {
    method: "DELETE"
}).then(result =>result.json)

}

export const addSleep =(newSleep) => {
    return fetch(`${remoteURL}/sleep`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSleep)
    }).then(response =>response.json())
}

export const updateSleep= (editedSleep) => {
    return fetch(`${remoteURL}/sleep/${editedSleep.id}`, 
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(editedSleep)
    }).then(response => response.json())
}

export const getUserSleep= (userId) => {
    return fetch(`${remoteURL}/sleep?userId=${userId}&_expand=user`)
    .then(response => response.json())
}
// -------------------------------//

// ------diaper data-----------//

export const getDiaperbyId = (id) => {
    return fetch(`${remoteURL}/diaper/${id}`)
    .then(response => response.json())
}

export const deleteDiaper= (id) =>{
return fetch(`${remoteURL}/diaper/${id}`, {
    method: "DELETE"
}).then(result =>result.json)

}

export const addDiaper =(newDiaper) => {
    return fetch(`${remoteURL}/diaper`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDiaper)
    }).then(response =>response.json())
}

export const updateDiaper= (editedDiaper) => {
    return fetch(`${remoteURL}/eat/${editedDiaper.id}`, 
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(editedDiaper)
    }).then(response => response.json())
}

export const getUserDiaper= (userId) => {
    return fetch(`${remoteURL}/diaper?userId=${userId}&_expand=user`)
    .then(response => response.json())
}
// -------------------------------//

// ------activity data-----------//

export const getActivitybyId = (id) => {
    return fetch(`${remoteURL}/activity/${id}`)
    .then(response => response.json())
}

export const deleteActivity= (id) =>{
return fetch(`${remoteURL}/activity/${id}`, {
    method: "DELETE"
}).then(result =>result.json)

}

export const addActivity =(newActivity) => {
    return fetch(`${remoteURL}/activity`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newActivity)
    }).then(response =>response.json())
}

export const updateActivity= (editedActivity) => {
    return fetch(`${remoteURL}/eat/${editedActivity.id}`, 
    {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(editedActivity)
    }).then(response => response.json())
}

export const getUserActivity= (userId) => {
    return fetch(`${remoteURL}/activity?userId=${userId}&_expand=user`)
    .then(response => response.json())
}

// ---------------------------------//