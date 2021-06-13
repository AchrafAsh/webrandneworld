module.exports = {
    siteMetadata: {
        title: 'Mazing Day & Yakel Mayers',
        titleTemplate: '%s · Mazing Day & Yakel Mayers',
        description: 'The Official website of Mazing Day and Yakel Mayers.',
        url: 'https://webrandneworld.com', // No trailing slash allowed!
        image: '/Logo.png' // Path to your image you placed in the 'static' folder
        // twitterUsername: '@occlumency'
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'VSl9CozLdyVRlxteSU1HpxLzclD6m4eTLdWQRL75bhQ',
                spaceId: 'xe9q722dlvm3'
            }
        },
        'gatsby-plugin-postcss',
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-154943213-2'
            }
        },
        'gatsby-plugin-sharp',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/'
            },
            __key: 'images'
        }
    ]
}
