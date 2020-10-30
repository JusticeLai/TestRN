import * as React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransitionPresets} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import  HomePage from '../Home/index';
import  MinePage from '../Mine/index';
import  DetailPage from '../Home/DetailPage';
import  MyDetailPage from '../Mine/MyDetailPage';


// function TabBar() {
//     return (
//         <Tab.Navigator >
//             <Tab.Screen name="HomePage" component={HomePage}/>
//             <Tab.Screen name="MinePage" component={MinePage}/>
//         </Tab.Navigator>
//     );
// }

// header: ({ scene, previous, navigation }) => {
//     return null
// }

// function AppNav() {
//     return (
//         <SafeAreaProvider>
//             <NavigationContainer>
//                 <Stack.Navigator screenOptions={{                 //用来定制头部信息、根据自己需要更改
//                     ...TransitionPresets.SlideFromRightIOS,
//                     //title: '测试标题',
//                     gestureEnabled: true,
//                     headerStyle: {
//                         backgroundColor: '#ee7530'
//                     },
//                     headerTintColor: 'black',
//                     headerTitleStyle: {
//                         fontWeight: 'bold',
//                         fontSize: 20
//                     }
//                 }}>
//
//                     <Stack.Screen name="TabBar"
//
//                                   options={(
//                                       {navigation}) => ({
//                                       //1.导航栏的设置
//                                       headerMode: 'screen',
//                                       headerShown: true, //导航栏是否显示
//                                       headerStyle: {      //导航栏的样式
//                                           shadowOffset: {width: 0, height: 0},
//                                           shadowColor: '#1a505050',
//                                           shadowRadius: 2, //阴影模糊半径
//                                           shadowOpacity: 1, // 阴影不透明度
//                                           elevation: 1,      //让安卓拥有灰色阴影 --- 必须
//                                       },
//
//                                       //2. 设置导航标题的“名字”和“位置”（同时给多个屏幕设置标题？）
//                                       headerTitle: "聊天",
//                                       headerTitleAlign: 'center',
//                                       headerRight: () => (
//                                           <Button
//                                               title="右边"
//                                               onPress={() => {
//                                                   navigation.push('DetailPage');
//                                               }}
//                                           />
//                                       ),
//                                       headerLeft: () => {
//                                           return (
//                                               <Button
//                                                   title="左边"
//                                                   onPress={() => {
//                                                       alert('haha');
//                                                   }}
//                                               />
//                                           );
//                                       },
//                                   })}
//                     >
//                         {() => (
//                             <Tab.Navigator >
//                                 <Tab.Screen name="HomePage" component={HomePage}  />
//                                 <Tab.Screen name="MinePage" component={MinePage}/>
//                             </Tab.Navigator>
//                         )}
//                     </Stack.Screen>
//
//                     <Stack.Screen name="DetailPage" component={DetailPage}
//                                   options={{title: 'DetailPage'}}/>
//                     <Stack.Screen name="MyDetailPage" component={MyDetailPage}
//                                   options={{title: 'MyDetailPage', headerShown: false}}/>
//
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </SafeAreaProvider>
//     );
// }

function AppNav() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{                 //用来定制头部信息、根据自己需要更改
                    ...TransitionPresets.SlideFromRightIOS,
                    //title: '测试标题',
                    gestureEnabled: true,
                    headerStyle: {
                        backgroundColor: '#ee7530'
                    },
                    headerTintColor: 'black',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20
                    }
                }}>

                    <Stack.Screen name="TabBar"

                                  options={(
                                      {navigation}) => ({
                                      //1.导航栏的设置
                                      headerMode: 'screen',
                                      headerShown: true, //导航栏是否显示
                                      headerStyle: {      //导航栏的样式
                                          shadowOffset: {width: 0, height: 0},
                                          shadowColor: '#1a505050',
                                          shadowRadius: 2, //阴影模糊半径
                                          shadowOpacity: 1, // 阴影不透明度
                                          elevation: 1,      //让安卓拥有灰色阴影 --- 必须
                                      },

                                      //2. 设置导航标题的“名字”和“位置”（同时给多个屏幕设置标题？）
                                      headerTitle: "聊天",
                                      headerTitleAlign: 'center',
                                      headerRight: () => (
                                          <Button
                                              title="右边"
                                              onPress={() => {
                                                  navigation.push('DetailPage');
                                              }}
                                          />
                                      ),
                                      headerLeft: () => {
                                          return (
                                              <Button
                                                  title="左边"
                                                  onPress={() => {
                                                      alert('haha');
                                                  }}
                                              />
                                          );
                                      },
                                  })}
                    >
                        {() => (
                            <Tab.Navigator >
                                <Tab.Screen name="HomePage" component={HomePage}  />
                                <Tab.Screen name="MinePage" component={MinePage}/>
                            </Tab.Navigator>
                        )}
                    </Stack.Screen>

                    <Stack.Screen name="DetailPage" component={DetailPage}
                                  options={{title: 'DetailPage'}}/>
                    <Stack.Screen name="MyDetailPage" component={MyDetailPage}
                                  options={{title: 'MyDetailPage', headerShown: false}}/>

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}


export default AppNav;


const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
