(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[100],{1060:function(n,e,t){"use strict";t.r(e),e.default="SearchInputBar \u52a8\u4f5c\u9762\u677f\n---\n\n\u53ef\u7528\u4e8e\u7528\u6237\u8f93\u5165\u641c\u7d22\u4fe1\u606f\n\n## \u57fa\u7840\u793a\u4f8b\n\n```jsx\nimport { Fragment, useState } from 'react';\nimport { SearchInputBar } from '@uiw/react-native';\nfunction Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <Fragment>\n      <SearchInputBar\n        onChangeText={setValue}\n        onClear={()=>setValue('')}\n        value={value}\n        button={{\n          onPress() {\n            // \u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u6cd5\n          }\n        }}\n      />\n    </Fragment>\n  );\n}\n```\n\n## \u4e00\u76f4\u663e\u793a\u53f3\u4fa7\u6309\u94ae && \u81ea\u5b9a\u4e49placeholder\n\n```jsx\nimport { Fragment, useState } from 'react';\nimport { SearchInputBar } from '@uiw/react-native';\nfunction Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <Fragment>\n      <SearchInputBar\n        onChangeText={setValue}\n        onClear={()=>setValue('')}\n        value={value}\n        placeholder=\"\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57\"\n        actionName=\"\u641c\u4e00\u4e0b\"\n        showActionButton\n        button={{\n          onPress() {\n            // \u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u6cd5\n          }\n        }}\n      />\n    </Fragment>\n  );\n}\n```\n\n## \u952e\u76d8\u4e0d\u6536\u8d77\u6765\n\n**\u6ce8\u610f: \u6bcf\u5c42```ScrollView```\u90fd\u8981\u5199```keyboardShouldPersistTaps=\"always\"```**\n\n```jsx\nimport { Fragment, useState } from 'react';\nimport { SearchInputBar } from '@uiw/react-native';\nfunction Demo() {\n  const [value, setValue] = useState('')\n  return (\n    <ScrollView keyboardShouldPersistTaps=\"always\" >\n      <SearchInputBar\n        onChangeText={setValue}\n        onClear={()=>setValue('')}\n        value={value}\n        showActionButton\n        button={{\n          onPress() {\n            // \u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u6cd5\n          }\n        }}\n      />\n    </ScrollView>\n  );\n}\n```\n\n## \u83b7\u53d6\u8f93\u5165\u6846 Ref\n\n```jsx\nimport { Fragment, useRef } from 'react';\nimport { SearchInputBar } from '@uiw/react-native';\nfunction Demo() {\n  const inputRef = useRef()\n  return (\n    <Fragment>\n      <SearchInputBar\n        ref={inputRef}\n        onChangeText={setValue}\n        onClear={()=>setValue('')}\n        value={value}\n        placeholder=\"\u8bf7\u8f93\u5165\u641c\u7d22\u5173\u952e\u5b57\"\n        actionName=\"\u641c\u4e00\u4e0b\"\n        showActionButton\n        button={{\n          onPress() {\n            // \u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u6cd5\n          }\n        }}\n      />\n      <Button\n        onPress={()=>{\n          console.log(inputRef.current.inputRef)\n        }}\n      >\u83b7\u53d6 \u8f93\u5165\u6846 Ref</Button>\n    </Fragment>\n  );\n}\n```\n\n## Props\n\n```ts\nimport { TextInputProps,StyleProp,ViewStyle } from 'react-native';\nimport { ButtonProps,IconsProps } from '@uiw/react-native'\n\nexport interface SearchInputBarProps extends TextInputProps {\n  /** \u5bb9\u5668\u6837\u5f0f */\n  containerStyle?: StyleProp<ViewStyle>;\n  /** \u53f3\u4fa7\u6309\u94ae */\n  button?: ButtonProps;\n  /** \u53f3\u4fa7\u6309\u94ae\u6587\u6848 */\n  actionName?: string;\n  /** \u662f\u5426\u4e00\u76f4\u663e\u793a\u53f3\u4fa7\u6309\u94ae null = \u6c38\u4e0d\u663e\u793a */\n  showActionButton?: boolean | null;\n  /** \u641c\u7d22\u56fe\u6807 */\n  searchIcon?: IconsProps;\n  /** \u70b9\u51fb\u641c\u7d22\u56fe\u6807\u65f6\u89e6\u53d1\u4e8b\u4ef6 */\n  onSearch?: Function;\n  /** \u6e05\u9664\u56fe\u6807 */\n  closeIcon?: IconsProps;\n  /** \u70b9\u51fb\u6e05\u9664\u56fe\u6807\u65f6\u89e6\u53d1\u4e8b\u4ef6 */\n  onClear?: Function;\n}\n```"}}]);
//# sourceMappingURL=100.bbb95ed8.chunk.js.map