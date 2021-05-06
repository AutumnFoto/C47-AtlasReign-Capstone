const remoteURL= 'http://localhost:8088';

export const getAllMilestone= () => {
    return fetch(`${remoteURL}/milestone?_expand=user`)
    .then(result => result.json())
}

export const addMilestone= (newMilestone) => {
    return fetch(`${remoteURL}/milestone`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newMilestone)
    })
    .then(response => response.json())
}

export const getUserMilestone= (userId) => {
    return fetch(`${remoteURL}/milestone?userId=${userId}&_expand=user`)
    .then(response => response.json())
}
export const updateMilestone = (editedMilestone) => {
    return fetch(`${remoteURL}/milestone/${editedMilestone.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMilestone)
    }).then(data => data.json)
}

export const getMilestoneById= (milestoneId) => {
    return fetch(`${remoteURL}/milestone/${milestoneId}`)
    .then(response => response.json())
}

export const deleteMilestone= (id) =>{
    return fetch(`${remoteURL}/milestone/${id}`, {
        method: "DELETE"
    }).then(result =>result.json)
    
    }