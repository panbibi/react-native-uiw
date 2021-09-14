(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[83],{707:function(n,e,t){"use strict";t.r(e),e.default="\nFlex Flex\u5e03\u5c40\n---\n\nFlex \u662f React Native CSS flex \u5e03\u5c40\u7684\u4e00\u4e2a\u5c01\u88c5\u3002\n\n## \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { Fragment } from 'react';\nimport { Flex, Button } from '@uiw/react-native';\n\nfunction Demo() {\n  return (\n    <Fragment>\n      <Flex>\n        <Flex.Item>\n          <Button size=\"small\">\u6309\u94ae1</Button>\n        </Flex.Item>\n        <Flex.Item>\n          <Button size=\"small\">\u6309\u94ae2</Button>\n        </Flex.Item>\n        <Flex.Item>\n          <Button size=\"small\">\u6309\u94ae3</Button>\n        </Flex.Item>\n      </Flex>\n    </Fragment>\n  );\n}\n```\n\n## \u5bf9\u9f50\u65b9\u5f0f\n\n```jsx\nimport { Fragment } from 'react';\nimport { Flex, Button } from '@uiw/react-native';\n\nconst Circle = (props: any) => {\n  const size = props.size || 20;\n  const style = {\n    borderRadius: size / 2,\n    backgroundColor: 'red',\n    width: size,\n    height: size,\n    margin: 1,\n  };\n  return <View style={style} />;\n};\n\nfunction Demo() {\n  return (\n    <Fragment>\n      <Flex justify=\"start\">\n        <Circle /> <Circle /> <Circle /> <Circle /> <Circle />\n      </Flex>\n      <Flex justify=\"center\">\n        <Circle /> <Circle /> <Circle /> <Circle /> <Circle />\n      </Flex>\n      <Flex justify=\"end\">\n        <Circle /> <Circle /> <Circle /> <Circle /> <Circle />\n      </Flex>\n    </Fragment>\n  );\n}\n```\n\n## Props\n\n### Flex\n\n```ts\nexport interface FlexProps extends ViewProps {\n  /**\n   * \u9879\u76ee\u5b9a\u4f4d\u65b9\u5411\n   * `row`, `column`, `row-reverse`, `column-reverse`\n   * @default row\n   */\n  direction?: FlexStyle['flexDirection'];\n  /**\n   * \u5b50\u5143\u7d20\u5728\u4e3b\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\n   * @default start\n   */\n  justify?: 'start' | 'end' | 'center' | 'between' | 'around';\n  /**\n   * \u5b50\u5143\u7d20\u5728\u4ea4\u53c9\u8f74\u4e0a\u7684\u5bf9\u9f50\u65b9\u5f0f\n   * @default start\n   */\n  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';\n  /**\n   * \u5b50\u5143\u7d20\u7684\u6362\u884c\u65b9\u5f0f\n   * @default nowrap\n   */\n  wrap?: 'wrap' | 'nowrap' | 'wrap-reverse';\n}\n```\n\n### Flex.Item\n\n\u7ee7\u627f [View](https://facebook.github.io/react-native/docs/view#props) \u7ec4\u4ef6\u3002\n\n```ts\nexport interface FlexItemProps extends ViewProps {}\n```"}}]);
//# sourceMappingURL=83.c3adde6c.chunk.js.map