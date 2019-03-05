const simpleGit = require('simple-git')("./");

simpleGit.pull();
simpleGit.add('./');
simpleGit.commit('Added new files');
simpleGit.push();