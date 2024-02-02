export const corsOptions = (methods) => {
     // 'GET, POST, PUT, DELETE, OPTIONS'
     return {
        status: 200,
        headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': methods,
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        }
    }
}