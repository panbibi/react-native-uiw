(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[39],{608:function(t,e,n){"use strict";n.r(e),e.default='<p align="center">\n  <a href="https://uiwjs.github.io">\n    <img width="150" src="https://raw.githubusercontent.com/uiwjs/uiw/92f189f53312f1177466f48991736f95f86da0a6/src/assets/logo-README.svg?sanitize=true">\n  </a>\n</p>\n<p align="center">\n  <a href="https://github.com/uiwjs/react-native-uiw/issues">\n    <img src="https://img.shields.io/github/issues/uiwjs/react-native-uiw.svg">\n  </a>\n  <a href="https://github.com/uiwjs/react-native-uiw/network">\n    <img src="https://img.shields.io/github/forks/uiwjs/react-native-uiw.svg">\n  </a>\n  <a href="https://github.com/uiwjs/react-native-uiw/stargazers">\n    <img src="https://img.shields.io/github/stars/uiwjs/react-native-uiw.svg">\n  </a>\n  <br>\n  <a href="https://github.com/uiwjs/react-native-uiw/releases">\n    <img src="https://img.shields.io/github/release/uiwjs/react-native-uiw.svg">\n  </a>\n  <a href="https://github.com/uiwjs/react-native-uiw">\n    <img src="https://img.shields.io/dub/l/vibe-d.svg">\n  </a>\n  <a href="https://www.npmjs.com/package/@uiw/react-native">\n    <img src="https://img.shields.io/npm/v/@uiw/react-native.svg">\n  </a>\n</p>\n\nUIW Design for React Native\n---\n\n(Android & iOS)\n\n## Install\n\n```bash\nyarn add @uiw/react-native react-native-svg\n```\n\n## Basic Usage\n\n```jsx\nimport React from \'react\';\nimport { View } from \'react-native\';\nimport { Icon } from \'@uiw/react-native\'\n\nexport default class Demo extends React.Component {\n  render() {\n    return (\n      <View>\n        <Icon name=\'apple\' size={46} color=\'#50CB42\' />\n      </View>\n    )\n  }\n}\n```\n\n## Components\n\n#### Layout\n\n- [Divider](https://github.com/uiwjs/react-native-uiw/tree/master/components/Divider/README.md)\n- [Flex](https://github.com/uiwjs/react-native-uiw/tree/master/components/Flex/README.md)\n- [Spacing](https://github.com/uiwjs/react-native-uiw/tree/master/components/Spacing/README.md)\n- [WingBlank](https://github.com/uiwjs/react-native-uiw/tree/master/components/WingBlank/README.md)\n\n#### Navigation\n\n- [Drawer](https://github.com/uiwjs/react-native-uiw/tree/master/components/Drawer/README.md)\n- [MenuDropdown](https://github.com/uiwjs/react-native-uiw/tree/master/components/MenuDropdown/README.md)\n- [SwipeAction](https://github.com/uiwjs/react-native-uiw/tree/master/components/SwipeAction/README.md)\n\n#### Data Entry\n\n- [Button](https://github.com/uiwjs/react-native-uiw/tree/master/components/Button/README.md)\n- [ButtonGroup](https://github.com/uiwjs/react-native-uiw/tree/master/components/ButtonGroup/README.md)\n- [CheckBox](https://github.com/uiwjs/react-native-uiw/tree/master/components/CheckBox/README.md)\n- [Input](https://github.com/uiwjs/react-native-uiw/tree/master/components/Input/README.md)\n- [Radio](https://github.com/uiwjs/react-native-uiw/tree/master/components/Radio/README.md)\n- [SegmentedControl](https://github.com/uiwjs/react-native-uiw/tree/master/components/SegmentedControl/README.md)\n- [Slider](https://github.com/uiwjs/react-native-uiw/tree/master/components/Slider/README.md)\n- [Switch](https://github.com/uiwjs/react-native-uiw/tree/master/components/Switch/README.md)\n- [SearchBar](https://github.com/uiwjs/react-native-uiw/tree/master/components/SearchBar/README.md)\n- [SelectCascader](https://github.com/uiwjs/react-native-uiw/tree/master/components/SelectCascader/README.md)\n\n#### Data Display\n\n- [Avatar](https://github.com/uiwjs/react-native-uiw/tree/master/components/Avatar/README.md)\n- [Badge](https://github.com/uiwjs/react-native-uiw/tree/master/components/Badge/README.md)\n- [Ellipsis](https://github.com/uiwjs/react-native-uiw/tree/master/components/Ellipsis/README.md)\n- [Empty](https://github.com/uiwjs/react-native-uiw/tree/master/components/Empty/README.md)\n- [Grid](https://github.com/uiwjs/react-native-uiw/tree/master/components/Grid/README.md)\n- [Icon](https://github.com/uiwjs/react-native-uiw/tree/master/components/Icon/README.md)\n- [List](https://github.com/uiwjs/react-native-uiw/tree/master/components/List/README.md)\n- [Table](https://github.com/uiwjs/react-native-uiw/tree/master/components/Table/README.md)\n- [Typography](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md) [`H1~H6`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u6807\u9898) \xb7 [`<Del>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u5220\u9664\u7ebf) \xb7 [`<S>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u5220\u9664\u7ebf) \xb7 [`<U>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u4e0b\u5212\u7ebf) \xb7 [`<Strong>`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u52a0\u7c97) \xb7 [`<Br />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u6362\u884c) \xb7 [`<P />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u6bb5\u843d) \xb7 [`<Hr />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#\u6c34\u5e73\u7ebf) \xb7 [`<Div />`](https://github.com/uiwjs/react-native-uiw/tree/master/components/Typography/README.md#div)\n\n#### Feedback\n\n- [Loader](https://github.com/uiwjs/react-native-uiw/tree/master/components/Loader/README.md)\n- [Modal](https://github.com/uiwjs/react-native-uiw/tree/master/components/Modal/README.md)\n- [MaskLayer](https://github.com/uiwjs/react-native-uiw/tree/master/components/MaskLayer/README.md)\n- [Result](https://github.com/uiwjs/react-native-uiw/tree/master/components/Result/README.md)\n- [Toast](https://github.com/uiwjs/react-native-uiw/tree/master/components/Toast/README.md)\n\n## Other\n\n- [@uiw/react-native-alipay](https://github.com/uiwjs/react-native-alipay)\n- [@uiw/react-native-amap-geolocation](https://github.com/uiwjs/react-native-amap-geolocation)\n\n## Development\n\n```\nyarn install\n```\n\n```bash\nRun instructions for iOS:\n  \u2022 cd react-native-uiw && react-native run-ios\n  - or -\n  \u2022 Open ReactNativeUIW/ios/ReactNativeUIW.xcworkspace in Xcode or run "xed -b ios"\n  \u2022 Hit the Run button\nRun instructions for Android:\n  \u2022 Have an Android emulator running (quickest way to get started), or a device connected.\n  \u2022 cd react-native-uiw && react-native run-android\n```\n\n\u26a0\ufe0f MacBook Pro with a M1\n\n```bash\n# Install ffi\nsudo arch -x86_64 gem install ffi\n# Re-install dependency\narch -x86_64 pod install\n```\n\n```bash\nrm -rf ios/build\n# https://github.com/react-navigation/react-navigation/issues/6071\ncd ios/\npod install\n\n# Clear pods.\npod deintegrate\n# pod rm Podfile.lock\npod install\n# Reinstall pods\npod install --repo-update --verbose\n\n# Run Project\nyarn run ios\n```\n\n- [React Native upgrade helper](https://react-native-community.github.io/upgrade-helper/)\n\n'}}]);
//# sourceMappingURL=39.8588e405.chunk.js.map