import React from 'react';
import {View} from 'react-native';
import {H1, H2, H3, H4, H5, H6, S, Del, U, P, Strong, Br, Div, Hr, Em, RnText, Text} from '@uiw/react-native';
import {ComProps} from '../../routes';
import Layout, {Container} from '../../Layout';
const {Header, Body, Card, Footer} = Layout;

export interface TypographyViewProps extends ComProps {}

export default class TypographyView extends React.Component<TypographyViewProps> {
  render() {
    const {route} = this.props;
    const description = route.params.description;
    const title = route.params.title;
    return (
      <Container>
        <Layout>
          <Header title={title} description={description} />
          <Body>
            <Card title="一段文本排版">
              <H1>这是标题一</H1>
              <H2>这是标题二</H2>
              <H3>这是标题二</H3>
              <H4>这是标题二</H4>
              <H5>这是标题二</H5>
              <H6>这是标题二</H6>
              <S>这段字符串中间有条删除线{'<S>'}</S>
              <Del>这段字符串中间有条删除线{'<Del>'}</Del>
              <U>这段文字下面有条下划线{'<U>'}</U>
              <P>这是一个段落{'<P>'}</P>
              <Div>这是一段文本{'<Div>'}</Div>
              <Div>
                <View>
                  <Text color="text">既可以是 View/Text 组件 也可以是纯字符串 </Text>
                </View>
              </Div>
            </Card>
            <Card title="加粗<Strong>">
              <Strong>这段文本加粗的{'<Strong>'}</Strong>
            </Card>
            <Card title="换行<Br />">
              <Text color="text">
                文本开始
                <Br />
                换行结束
              </Text>
              <Text color="text">上面两行文本使用 {'<Text>文本开始<Br />换行结束</Text>'} 组件换行</Text>
            </Card>
            <Card title="斜体强调<Em />">
              <Em>斜体强调 fontStyle: 'italic' 中文失效</Em>
            </Card>
            <Card title="水平线<Hr />">
              <Text color="text">一段文本</Text>
              <Hr />
              <Text color="text">一段文本</Text>
            </Card>
            <Card title="可高亮文字<RnText />">
              <RnText type="header" label="react-native-uiw" />
              <RnText type="title" label="react-native-uiw" />
              <RnText type="subLabel" label="react-native-uiw" />
              <RnText type="header" uppercase label="react-native-uiw" highlightText="native" highlightTextStyle={{fontSize: 24, color: 'red'}} />
              <RnText
                style={{fontSize: 14}}
                type="label"
                label="这一段可以截取并且,支持toopTip的文本"
                tooltipProps={{
                  number: 5,
                  content: '这一段可以截取并且,支持toopTip的文本',
                }}
              />
            </Card>
          </Body>
          <Footer />
        </Layout>
      </Container>
    );
  }
}
