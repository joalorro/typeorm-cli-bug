const child = require('child_process');

const rootFolder = process.cwd();
const options = {
  cwd: rootFolder,
  timeout: 120000,
  maxBuffer: 10000 * 1024,
};
const typeorm = `ts-node -r tsconfig-paths/register './node_modules/typeorm/cli.js' --config ormconfig.json`;
const generate = `${typeorm} migration:generate ${process.argv[2]} -n `;

child.exec(generate, options, (err, stdout) => {
  if (err) {
    if (stdout) {
      console.log(err + '\n' + stdout);
    } else {
      console.log(err);
    }
  } else {
    console.log(stdout);
  }
})