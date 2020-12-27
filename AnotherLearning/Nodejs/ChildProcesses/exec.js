// On Windows Only...
const { exec } = require('child_process');
// https://nodejs.org/dist/latest-v15.x/docs/api/child_process.html#child_process_spawning_bat_and_cmd_files_on_windows
// child_process.exec(command[, options][, callback])

exec('mkdir test && cd test && mkdir test2', { timeout: 1000 }, () => {
  console.log('123');
});

console.log('end');