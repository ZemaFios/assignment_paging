import { corsOptions } from "@/lib/corsOptions";
import { fetchAuthors, fetchAuthorsByGallery } from "@/lib/data.service"
import { NextResponse } from "next/server"

export async function GET(request) {

    const { searchParams } = new URL(request.url);
    const gallery = searchParams.get('gallery');

    if (gallery !== null) {

        let result = await fetchAuthorsByGallery(gallery)
        return NextResponse.json(result, corsOptions('GET'))

    } else {

        let result = await fetchAuthors()


        return NextResponse.json(result, corsOptions('GET'))

    }

}
