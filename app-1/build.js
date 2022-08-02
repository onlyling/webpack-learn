/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

const webpack = require('webpack')

webpack(
  {
    mode: 'production',
    entry: path.resolve(__dirname, 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript'],
            },
          },
        },
      ],
    },
  },
  (err, stats) => {
    if (err) throw err

    console.log('打包完成~')
    process.stdout.write(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      }) + '\n\n',
    )
  },
)
