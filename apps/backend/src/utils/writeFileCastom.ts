import mkdirp = require('mkdirp');
import fs = require('fs');

export const writeFileCastom = async (path, content) => {
  await mkdirp(path);
  fs.writeFileSync(path, content);
}