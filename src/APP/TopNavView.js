import React, {Component} from 'react'
import {Text, Button, StyleSheet, Dimensions, Animated} from 'react-native';

let width = Dimensions.get('window').width;
export default class TopNavView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // title:props.Options ? props.Options.title:'',
            hidden:false,
            // fadeInOpacity: new Animated.Value(1),  // 透明度初始值设为0
        };
    }
    
    render() {
        console.warn('刷新了')
        let {style, Options} = this.props;
        return (
            <View style={[styles.container, style ? style : {}]}>
                {this.renderheaderLeft(Options, this.props.navigation)}
                {this.renderTitle(Options)}
                {this.renderheaderRight(Options, this.props.navigation)}
            </View>
        );
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({title: nextProps.Options.title});
    // }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.Options.title !== this.props.Options.title){
            return true
        }
        return false;//表示不刷新
    }

    componentDidMount() {

    }
    renderTitle = (Options) => {
        let {titleStyle,title} = Options
        // let title = this.state.title
        if (title) {
            return (
                <View style={{alignItems: 'center', position: 'absolute', left: 80, right: 80}}>
                    <Text style={[{
                        fontSize: 20,
                        color: 'black'
                    }, titleStyle ? titleStyle : {}]}>{Options.title ? Options.title : ''}</Text>
                </View>
            )
        } else {
            return <View/>
        }
    }

    renderheaderLeft = (Options, navigation) => {
        let {headerLeft, headerShowLeft} = Options
        if (headerShowLeft == true) {
            return (
                <Button
                    title="返回"
                    onPress={() => {
                        navigation.pop();
                        //navigation.push('DetailPage');
                    }}
                />
            )
        } else {
            if (headerLeft) {
                return headerLeft()
            } else {
                return <View/>
            }
        }


    }

    renderheaderRight = (Options, navigation) => {
        let {headerRight, headerShowRight} = Options
        if (headerRight) {
            if (headerShowRight == true) {
                return (
                    <Button
                        title="右边"
                        onPress={() => {
                            navigation.push('DetailPage');
                        }}
                    />
                )
            } else {
                return headerRight()
            }
        } else {
            return <View/>
        }

    }


}


const styles = StyleSheet.create({
    container: {
        width: width,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 44 + 20,
        backgroundColor: 'white'
    },
});
