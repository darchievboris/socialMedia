import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            "style-loader",
            "css-loader",
            {
                loader: "sass-loader",
                options: {
                    // Prefer `dart-sass`
                    implementation: require("sass"),
                },
            },
        ],
    }
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}