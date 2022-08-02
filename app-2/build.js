/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const pkgJSON = require('../package.json')

webpack(
  {
    mode: 'production',
    entry: path.resolve(__dirname, 'index.ts'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.[chunkhash:8].js',
      clean: true,
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
        {
          test: /\.less/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'less-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'index.html'),
        title: pkgJSON.name,
        scriptLoading: 'blocking',
        templateParameters: {
          description: 'webpack learn DEMO',
          keywords: 'webpack,learn',
        },
      }),
    ],
    // devtool: 'source-map',
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
