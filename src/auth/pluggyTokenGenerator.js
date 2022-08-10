import { PluggyClient } from 'pluggy-sdk'

export default async function(res) {
    const pluggyClient = new PluggyClient({
        clientId: process.env.PLUGGY_CLIENT_ID,
        clientSecret: process.env.PLUGGY_CLIENT_SECRET
    })

    let accessToken = await pluggyClient.createConnectToken()
    return accessToken
}