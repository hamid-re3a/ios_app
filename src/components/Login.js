import React from 'react';
import { Container , Header , View , Text , Left , Button , Right , Content , Form , Item , Icon , Input } from 'native-base';

export default class Login extends React.Component {
    render() {
        return (
            <Container>
                <Header style={{ backgroundColor : '#34495e'}} androidStatusBarColor="#2c3e50" iosBarStyle="light-content">
                    <Left>
                        <Button transparent>
                            <Text style={{ fontFamily : 'IRANSansMobile' , color: 'white'}}>عضویت</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Text style={{ color: 'white'}}>صفحه ورود</Text>
                    </Right>
                </Header>
                <Content>
                    <Form>
                        <Item rounded>
                            <Input placeholder='ایمیل خود را وارد کنید'/>
                            <Icon active name='md-mail' />
                        </Item>
                        <Item rounded>
                            <Input placeholder='پسورد خود را وارد کنید'/>
                            <Icon active name='md-key' />
                        </Item>
                    </Form>
                </Content>
            </Container>

        )
    }
}