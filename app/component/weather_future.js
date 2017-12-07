/**
 * 天气界面之未来天气的组件
 */

import React,{Component} from 'react'
import {StyleSheet, View, Text, Image,FlatList} from 'react-native';
import Divider from '../component/divider'
import Icon from 'react-native-vector-icons/MaterialIcons'
import weatherStore from '../storage/weather_store'
import dateUtil from '../util/dateUtil'
import {observer} from 'mobx-react/native'


@observer
export default class WeatherFuture extends Component{

    render () {
        return(
            <View >
                <Divider/>
                <FlatList
                    data={weatherStore.dailyDataSource}
                    extraData={this.state}
                    renderItem={this._renderItem}
                />
            </View>
        )
    }
    _renderItem = ({item}) =>{
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={[styles.text,{marginLeft:15}]}>{dateUtil.getMonthAndDayByDate(String(item.date))}</Text>
                    <Text style={[styles.text,{marginLeft:5}]}>{dateUtil.getWeekdayByDate(String(item.date))}</Text>
                </View>
                <View style={[styles.textContainer,{justifyContent:'center'}]}>
                    <Icon name='wb-sunny' color={'#ffe603'} size={35}/>
                    <Text style={[styles.text,{alignSelf:'center',marginLeft:5}]}>{Object(item.cond).txt_d}</Text>
                </View>
                <View style={[styles.textContainer,{justifyContent:'flex-end'}]}>
                    <Text style={[styles.text,{marginRight:15}]}>{Object(item.tmp).min}~{Object(item.tmp).max}°C</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'transparent',
    },


    textContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
        flexDirection: 'row'
    },

    text: {
        fontSize: 15,
        color: 'white',
    }


}