const remoteURL= 'http://localhost:8088';

export const addProfile = (newProfile) => {
    return fetch(`${remoteURL}/profiles?_expand=user`)
    .then(result => result.json())
}

