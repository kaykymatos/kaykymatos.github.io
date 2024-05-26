/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '',
    output: 'export', // Ou 'exports-only' se você quiser apenas as páginas exportadas
    compress:true, 
     images: {
        unoptimized: true
    }
}

module.exports = nextConfig