module.exports = {
    branches: ['main'],
    plugins: [
        '@semantic-release/github',
        [
            '@semantic-release/git',
            {
                assets: ['CHANGELOG.md', 'package.json', 'package-lock.json'],
            },
        ],
    ],
    preset: 'conventionalcommits'
}