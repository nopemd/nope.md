#!/usr/bin/env node

const command = process.argv[2];

if (command === '--version' || command === '-v') {
  const pkg = require('../package.json');
  console.log(pkg.version);
  process.exit(0);
}

if (command === '--help' || command === '-h' || !command) {
  console.log(`
  🚫 nope-md — Security boundaries for AI agents

  Usage:
    nope-md init      Generate a NOPE.md through an interactive wizard
    nope-md audit     Audit an existing NOPE.md for issues (coming soon)

  Options:
    --version, -v     Show version
    --help, -h        Show this help

  Learn more: https://github.com/nopemd/nope.md
  `);
  process.exit(0);
}

if (command === 'init') {
  require('./commands/init');
} else if (command === 'audit') {
  require('./commands/audit');
} else {
  console.error(`Unknown command: ${command}`);
  console.error('Run "nope-md --help" to see available commands.');
  process.exit(1);
}
