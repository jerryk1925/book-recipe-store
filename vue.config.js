module.exports = {
    css: {
        modules: true,
        loaderOptions: {
            scss: {
                prependData: `@import "~@/assets/styles/global.scss";`
            }
        }
    }
}