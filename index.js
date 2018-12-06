const FileBlob = require('@now/build-utils/file-blob.js');
const csso = require('csso');

exports.analyze = ({ files, entrypoint }) => files[entrypoint].digest;

exports.build = async ({ files, entrypoint }) => {
  const stream = files[entrypoint].toStream();
  const { data } = await FileBlob.fromStream({ stream });
  const content = data.toString();

  const minified = csso.minify(content).css;
  const result = new FileBlob({ data: minified });

  return { [entrypoint]: result };
};
