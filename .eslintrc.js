module.exports = {
    "env": {
        "jest/globals": true,
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "plugins": "jest",
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": "latest"
    },
    "rules": {
    }
}
