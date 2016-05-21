const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const TARGET = process.env.npm_lifecycle_event;
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const poststylus = require('poststylus');
const nib = require('nib');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build'),
  smacss: path.join(__dirname, 'smacss')
};

const common = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  plugins: [
    new ExtractTextPlugin("bundle.css")
  ],
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus-loader',
        include: PATHS.app,
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader'),
        include: PATHS.smacss
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015', 'react']
        }
      },{
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
            test   : /\.(otf|ttf)$/,
            loader : 'file-loader'
        }
    ],
    preLoaders: [
      {
        test: /\.styl$/,
        loader: 'stylint',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  stylus: {
    use: [poststylus(['postcss-short', 'postcss-sorting', 'postcss-cssnext', 'rucksack-css'])]
  },
  stylint: {
    "reporter": "stylint-stylish"
  }
};

// Default configuration
if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      contentBase: PATHS.build,

      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env so this is easy to customize.
      //
      // If you use Vagrant or Cloud9, set
      // host: process.env.HOST || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices unlike default
      // localhost
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({
        save: true // --save
      })
    ]
  });
}

if(TARGET === 'build') {
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  });
}
