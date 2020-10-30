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

import {connect} from 'react-redux'; // 引入connect函数
import *as userInfoAction from '../reducers/UserInfo/userInfoAction';


class DetailPage extends Component {

    //构造函数
    constructor(props) {
        super(props)
        this.state = {
            stockCount: 0,
        }
    }


    componentDidMount() {

    }

    componentDidMount() {

    };


    componentWillUnmount() {
    }




    //显示界面入口
    render() {
        let {navigation,userInfo,loginInUpdateFn} = this.props;
        return (
            <View style={{flex:1,backgroundColor:userInfo.backgroundColor}}>
                <Text>详情</Text>
                <Button
                    title="Redux 修改颜色"
                    onPress={() => {
                        if(userInfo.backgroundColor == 'green'){
                            userInfo.backgroundColor = 'blue';
                            loginInUpdateFn(userInfo)
                            console.warn(userInfo.backgroundColor)
                        }else{
                            userInfo.backgroundColor = 'green';
                            loginInUpdateFn(userInfo)
                            console.warn(userInfo.backgroundColor)
                        }
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
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
)(DetailPage)