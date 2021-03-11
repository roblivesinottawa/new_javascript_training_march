async function getUserFriends(){
    let user = await fetchJSON('/users/me')
    let friendIDs = await fetchJSON(`/friends/${user.id}`)
    let promises = friendIDs.map((id) => {
        return fetchJSON(`users/${id}`)
    })
    let friends = await Promise.all(promises)
    console.log(friends)
}

let p = getUserFriends()