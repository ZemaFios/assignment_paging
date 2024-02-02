
import dbConnect from "./db/dbConnect.mjs";
import authorModel from "./db/models/author.model.mjs";
import galleryModel from "./db/models/gallery.model.mjs";
import imageModel from "./db/models/image.model.mjs";

/*

    Get all galleries

*/
export const fetchGalleries = async () => {
    
    console.log('fetchGalleries')

    try {

        await dbConnect();

        let result = await galleryModel.find({});

        return JSON.parse(JSON.stringify(result))

    } catch (error) {

        console.log(error)

    }


};

/*

    Get gallery by name

*/
export const fetchGalleryById = async (id) => {

    console.log('fetchGalleryById', id)

    try {

        await dbConnect();
        let result = await galleryModel.find({_id: id});

        return JSON.parse(JSON.stringify(result[0]))

    } catch (error) {

        console.log(error)

    }
};

/*

    Get gallery by name

*/
export const fetchGalleryByName = async (name) => {

    console.log('fetchGalleryById', name)

    try {

        await dbConnect();
        let result = await galleryModel.find({name: name});

        return JSON.parse(JSON.stringify(result[0]))

    } catch (error) {

        console.log(error)

    }
};


/*

    Get Author by name

*/
export const fetchAuthorById = async (id) => {

    console.log('fetchAuthorById', id)
    try {

        await dbConnect();
        let result = await authorModel.find({_id: id});
    
        return JSON.parse(JSON.stringify(result[0]))

    } catch (error) {

        console.log(error)

    }

};

export const fetchAuthorByName = async (name) => {

    console.log('fetchAuthorByName', name)
    try {

        await dbConnect();
        let result = await authorModel.find({author: name});
        
        return JSON.parse(JSON.stringify(result[0]))

    } catch (error) {

        console.log(error)
        return JSON.parse(JSON.stringify({}))
    }

};

export const fetchAuthorsByGallery = async (gallery) => {

    console.log('fetchAuthorByGallery', gallery)
    try {

        await dbConnect();
        let result = await authorModel.find({gallery: gallery});
        
        return JSON.parse(JSON.stringify(result))

    } catch (error) {

        console.log(error)
        return JSON.parse(JSON.stringify({}))
    }

};

export const fetchAuthorByUrlName = async (niceUrl) => {

    console.log('fetchAuthorByUrlName', niceUrl)
    try {

        await dbConnect();
        let result = await authorModel.find({niceUrl: niceUrl});
        
        return JSON.parse(JSON.stringify(result[0]))

    } catch (error) {

        console.log(error)
        return JSON.parse(JSON.stringify({}))
    }

};

export const fetchAuthorByFolder = async (folder) => {

    console.log('fetchAuthorByFolder', folder)
    try {

        await dbConnect();
        let result = await authorModel.find({folder: folder});
        
        return JSON.parse(JSON.stringify(result[0]))

    } catch (error) {

        console.log(error)
        return JSON.parse(JSON.stringify({}))
    }

};


/*

    Get Authors

*/
export const fetchAuthors = async () => {

    console.log('fetchAuthors')
    
    try {

        await dbConnect();
        let result = await authorModel.find({});
    
        return JSON.parse(JSON.stringify(result))

    } catch (error) {

        console.log(error)

    }

};

/*

    Get Images for author by author name

*/
export const fetchImagesByAuthorName = async (author) => {

    console.log('fetchImagesByAuthorName', author)

    try {

        await dbConnect();
        let result = await imageModel.find({author : author });
    
        return JSON.parse(JSON.stringify(result))

    } catch (error) {

        console.log(error)

    }

};

/*

    Get all images for gallery

*/
export const fetchImagesForGallery = async (name) => {

    console.log('fetchImagesForGallery', name)

    try {

        await dbConnect();
        let result = await imageModel.find({"gallery" :  { $regex:name, $options: 'i' } });
    
        return JSON.parse(JSON.stringify(result))

    } catch (error) {

        console.log(error)

    }

};

export const fetchImages= async (name) => {

    console.log('fetchImages', name)

    try {

        await dbConnect();
        let result = await imageModel.find({});
    
        return JSON.parse(JSON.stringify(result))

    } catch (error) {

        console.log(error)

    }

};

export const fetchImagesQuery = async (page = 1, query = {}, term='') => {

    console.log('fetchImages', page)

    try {

        await dbConnect();
        let searchQuery = query;
        let pageNumber = page;
        let limit = 10;
        let skip = (pageNumber -1) * limit;
        
        let searchTerm = term;
        searchQuery = {
          
            $or: [
                {
                    author: new RegExp(searchTerm, 'i')
                },
                {
                    gallery: new RegExp(searchTerm, 'i')
                },
                {
                    "meta.image.Make": new RegExp(searchTerm, 'i')
                },
                {
                    "meta.image.Model": new RegExp(searchTerm, 'i')
                },
                {
                    "meta.image.Software": new RegExp(searchTerm, 'i')
                },
                {
                    "meta.exif.LensModel": new RegExp(searchTerm, 'i')
                }
            ]
             
            
          } 


        let result = await imageModel.aggregate([
            { '$match'    : searchQuery},
            // { '$sort'     : { 'author' : -1 } },
            { '$facet'    : {
                metadata: [ { $count: "total" },{ $addFields: { page: parseInt(pageNumber), itemsPrPage: limit } } ],
                data: [ { $skip: skip }, { $limit: limit } ]
            } }
        ] )
        return JSON.parse(JSON.stringify(result))

    } catch (error) {

        console.log(error)

    }

};