module.exports = {
    webpack: config => {
      config.module.rules.push({
        test: /\.svg$/,
        exclude: /node_modules/,
        loader: "svg-react-loader"
      });
  
      return config;
    }
  };
  