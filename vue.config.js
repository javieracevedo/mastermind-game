module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            alias: {
                "@c": `${__dirname}/src/components`,
                "@v": `${__dirname}/src/views`,
                "@utils": `${__dirname}/src/core/utils`,
                "@": `${__dirname}/src`
            }
        }
    }
}
