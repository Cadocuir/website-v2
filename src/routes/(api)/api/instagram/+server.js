import { json } from "@sveltejs/kit"
import { log } from "console"

export async function GET({ fetch}) {
    let data = null
    try {
        data = await fetch("../uploads/fulldata.json").then(res => res.json()).catch(err => null)
    } catch (error) {
        log("Error loading instagram data",error)
    }

    if (!data)
        return new Response(
            JSON.stringify({ type: 'failure', errorMsg: 'Impossible de charger les données' }),
            { status: 400 }
        );

    let finalData = []
    try {

        const { xdt_api__v1__feed__user_timeline_graphql_connection } = data
        const { edges } = xdt_api__v1__feed__user_timeline_graphql_connection
        for (const edge of edges) {
            const { node } = edge
            const localdata = {}
            localdata.like_count = node.like_count
            localdata.titre = node.caption?.text
            localdata.date = node.taken_at
            localdata.cover = node.image_versions2
            localdata.video = node.video_versions
            if (node.image_versions2 != null && node.image_versions2.candidates != null && Object.keys(node.image_versions2.candidates).length > 0)
                localdata.cover = node.image_versions2.candidates[0]
            if (node.video_versions != null && Object.keys(node.video_versions).length > 0)
                localdata.video = node.video_versions[0]
            localdata.location = node.location?.name
            finalData.push(localdata)
        }
    } catch (error) {
        log("Error parsing instagram data", error)
    }

    return json(finalData)
}