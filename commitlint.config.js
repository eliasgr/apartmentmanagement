// build: Changes that affect the build system or external dependencies(example scopes: gulp, broccoli, npm)
// ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
// chore: Other changes that don't modify src or test files
// docs: Documentation only changes
// feat: A new feature
// fix: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a new feature
// style: Changes that do not affect the meaning of the code(white-space,formatting, missing semi-colons.etc)
// test: Adding missing tests or correcting existing tests
// revert: Reverts a previous commit

module.exports = { extends: ['@commitlint/config-conventional'] };
