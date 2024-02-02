import { fetchAuthorById, fetchAuthorByName, fetchAuthorByUrlName, fetchAuthorByFolder} from "@/lib/data.service"
import { NextResponse } from "next/server"

export async function GET(request) {

    const { searchParams } = new URL(request.url);

    const id = searchParams.get('id');
    const name = searchParams.get('name');
    const urlName = searchParams.get('urlname');
    const folder = searchParams.get('folder');

    console.log('name', name, id, gallery, urlName, folder);
    

    if(name !== null) {
        let result = await fetchAuthorByName(name)
        return NextResponse.json(result)

    }  else if (urlName !== null) {
        let result = await fetchAuthorByUrlName(urlName)
        return NextResponse.json(result)

    } else if (folder !== null) {
        let result = await fetchAuthorByFolder(folder)
        return NextResponse.json(result)

    }  else if (id !== null){

        let result = await fetchAuthorById(id)
        return NextResponse.json(result)
    }


}
