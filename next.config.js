/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            {
                source: '/user',
                destination: '/',
                permanent: false
            },
            {
                source: '/user/:userId',
                destination: '/',
                permanent: false
            }
        ]
    } 
        
}

module.exports = nextConfig
