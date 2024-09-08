

export const parseInstagramData = async (instagramData) => {
    const { xdt_api__v1__feed__user_timeline_graphql_connection, last_update = null } = instagramData
    if (xdt_api__v1__feed__user_timeline_graphql_connection == null)
        return { type: 'failure', errorMsg: 'Impossible de charger les données' }

    const { edges } = xdt_api__v1__feed__user_timeline_graphql_connection
    if (edges == null || !Array.isArray(edges))
        return { type: 'failure', errorMsg: 'Impossible de charger les données' }


    let finalData = {
        type: 'success',
        last_update,
        publish: []
    }

    try {

        for (const edge of edges) {
            const { node } = edge
            const localdata = {}
            localdata.like_count = node.like_count
            localdata.titre = node.caption?.text
            localdata.date = node.taken_at
            localdata.cover = node.image_versions2
            localdata.video = node.video_versions
            localdata.id = node.id
            if (node.image_versions2 != null && node.image_versions2.candidates != null && Object.keys(node.image_versions2.candidates).length > 0)
                localdata.cover = node.image_versions2.candidates[0]
            if (node.video_versions != null && Object.keys(node.video_versions).length > 0)
                localdata.video = node.video_versions[0]
            localdata.location = node.location?.name
            finalData.publish.push(localdata)
        }
    } catch (error) {
        log("Error parsing instagram data", error)
    }

    if (finalData.publish.length <= 0)
        return { type: 'failure', errorMsg: 'Impossible de charger les données' }

    return finalData
}