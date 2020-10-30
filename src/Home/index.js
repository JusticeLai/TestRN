import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    TouchableOpacity,
    NativeModules,//与原生通讯
} from 'react-native'

const IOSRN = NativeModules.IOSRN;

import {connect} from 'react-redux'; // 引入connect函数
import *as userInfoAction from '../reducers/UserInfo/userInfoAction';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopNavView from '../APP/TopNavView';

const Tab = createMaterialTopTabNavigator();


function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text>第一页</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>第二页</Text>
        </View>
    );
}


class HomePage extends Component {

    //构造函数
    constructor(props) {
        super(props)
        this.state = {
            stockCount: 0,
            stockCount1: 0,
        }
    }


    async  updateEvents() {
        try {
            const events = await  IOSRN.addEvent(
                'Birthday Party',
                '4 Privet Drive, Surrey'
            );
            console.log('调用原生IOS,回调返回的数组')
            console.log(events)
        } catch (e) {
            console.error(e);
        }
    }

    componentDidMount() {
        this.setState({ stockCount: this.state.stockCount + 1})
        this.updateEvents()
    }




    componentWillUnmount() {
        console.log('已销毁');
    }

    //显示界面入口
    render() {
        let {navigation, userInfo} = this.props;
        return (
            <View style={{flex: 1}}>
                <TopNavView
                    Options={{
                        hidden:true,
                        title: this.state.stockCount,
                        titleStyle:{
                            fontWeight:'bold',
                            color:'red'
                        },
                        headerShowLeft:true,
                        headerShowRight:false,
                        headerRight: () => (
                            <Button
                                title="定义按钮"
                                onPress={() => {
                                    this.setState({ stockCount: this.state.stockCount + 1})
                                    // navigation.push('DetailPage');
                                }}
                            />
                        )
                    }}
                    navigation={navigation} />

                <ScrollView style={{flex: 1, backgroundColor: userInfo.backgroundColor}}
                            showsVerticalScrollIndicator={false}>
                    <Text>{this.state.stockCount}</Text>
                    <Text>{this.state.stockCount1}</Text>
                    <Button
                        title="不会刷新"
                        onPress={() =>   this.setState({ stockCount1: this.state.stockCount1 + 1})}
                    />
                    <Button
                        title="Go to Details"
                        onPress={() => navigation.navigate('DetailPage')}
                    />
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default connect(
    (state) => (
    {
        userInfo: state.UserInfoRedux.userInfo,
    }),
    (dispatch, state) => ({
        loginInFn: (userInfo) => dispatch(userInfoAction.loginIn(userInfo)),
        loginInUpdateFn: (userInfo) => dispatch(userInfoAction.loginInUpdate(userInfo)),
        loginOutFn: () => dispatch(userInfoAction.loginOut()),

    })
)(HomePage)