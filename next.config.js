const path= require("path");

const nextConfig = {
    sassOptions:{
        includePaths:[path.join(__dirname,"app/_styles")]
    }
}

module.exports = nextConfig
