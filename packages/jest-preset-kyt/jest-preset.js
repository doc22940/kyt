module.exports = {
  moduleNameMapper: {
    '^[./a-zA-Z0-9!&$_-]+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|ico)$': require.resolve(
      './stub.js'
    ),
  },
  setupFiles: ['raf/polyfill'],
  setupFilesAfterEnv: [require.resolve('./setup.js')],
  snapshotSerializers: ['enzyme-to-json/serializer', 'pretty-lights/jest'],
};