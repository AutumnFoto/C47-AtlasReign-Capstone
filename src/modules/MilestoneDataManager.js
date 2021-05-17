const remoteURL= 'http://localhost:8088';

export const getAllMilestone= () => {
    return fetch(`${remoteURL}/milestones?_expand=user`)
    .then(result => result.json())
}

export const addMilestone= (newMilestone) => {
    return fetch(`${remoteURL}/milestones`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newMilestone)
    })
    .then(response => response.json())
}

export const getUserMilestone= (userId) => {
    return fetch(`${remoteURL}/milestones?userId=${userId}&_expand=user`)
    .then(response => response.json())
}
export const updateMilestone = (editedMilestone) => {
    return fetch(`${remoteURL}/milestones/${editedMilestone.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedMilestone)
    }).then(data => data.json)
}

export const getMilestoneById= (milestoneId) => {
    return fetch(`${remoteURL}/milestones/${milestoneId}`)
    .then(response => response.json())
}

export const deleteMilestone= (id) =>{
    return fetch(`${remoteURL}/milestones/${id}`, {
        method: "DELETE"
    }).then(result =>result.json)
    
    }