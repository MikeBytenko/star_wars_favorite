## Setup

react-query
Typescript
react-native
Apollo graphql

### Global Dependencies

Dependencies will need to be installed **globally**.

- [nvm](https://github.com/nvm-sh/nvm)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#mac-stable)
- [watchman](https://facebook.github.io/watchman/docs/install.html)
- [react-native-cli](https://facebook.github.io/react-native/docs/getting-started)

### Node version

```bash
# Automatically switch to Node version defined in `.nvmrc`
$ nvm use
```

### Local Dependencies

```bash
# Install local dependencies.
$ yarn install
```

```bash
# Install local pods
$ cd ios
$ pod install
```

### Troubleshooting

```bash
# Clear cached builds
$ rm -rf ios/build

# Clear XCode cache
$ rm -rf ~/Library/Developer/Xcode/DerivedData

# Clear npm cache
$ rm -rf node_modules && yarn cache clean && yarn install

# Clear pods
$ cd ios && rm -rf Pods && rm Podfile.lock && pod install

# Clear RN cache
$ watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-*
```
