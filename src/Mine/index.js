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



export default class MinePage extends Component {

    //构造函数
    constructor(props) {
        super(props)
        this.state = {
            stockCount: 0,
        }
    }


    //显示界面入口
    render() {
        let {navigation} = this.props;
        return (
            <View style={{flex:1}}>
               <Text>我的界面</Text>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('MyDetailPage')}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
});