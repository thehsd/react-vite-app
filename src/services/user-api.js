export const getUserList = async () => {
    const request = await fetch('https://fakestoreapi.com/users')
    const response = await request.json()
    return response
}

export const createUser = async (user) => {
    const request = await fetch('https://fakestoreapi.com/users',
        {
            method: 'POST',
            body: JSON.stringify(user)
        }
    )
    const response = await request.json()
    return response
}