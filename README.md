server

- [x] jetpack inclusion
- [ ] hmr excessive logging - might be togglable soon: https://github.com/webpack/webpack-dev-server/pull/926
- [ ] figure out how updates work - which should `module.hot.accept` go?
- [ ] source maps seems slow/will they work on hmr reloding?
- [ ] why is bundle.js 2.84 mb? d3 from node might not be the best solution
- [ ] hmrs take been 200 and 1500ms - can't really see a pattern, but the upper end of that is annoying

middleware
- [ ] set up simple express app
- [ ] add middleware