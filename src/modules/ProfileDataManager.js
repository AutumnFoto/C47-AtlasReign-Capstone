const remoteURL= 'http://localhost:8088';

export const getAllProfiles = ()  => {
    return fetch(`${remoteURL}/profiles?_expand=user`)
    .then(result => result.json())
}

// export const getAllpages= () => {
//     return fetch(`${ remoteURL }/profiles`)
//       .then(response => response.json())
//   }

export const addProfile = (newProfile) => {
    return fetch(`${remoteURL}/profiles`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProfile)
    })
    .then(response => response.json())
}

export const getUserProfiles= (userId) => {
    return fetch(`${remoteURL}/profiles?userId=${userId}&_expand=user`)
    .then(response => response.json())
}
export const updateProfile = (editedProfile) => {
    return fetch(`${remoteURL}/profiles/${editedProfile.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedProfile)
    }).then(data => data.json)
}

export const getProfileById= (profileId) => {
    return fetch(`${remoteURL}/profiles/${profileId}`)
    .then(response => response.json())
}