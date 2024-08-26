/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    output: 'export', 
    compress:true, 
     images: {
        unoptimized: true
    }
}

module.exports = nextConfig