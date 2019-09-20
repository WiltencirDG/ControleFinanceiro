import React, {Component} from 'react'
import {Text,View} from 'react-native';


export default class Form extends Component{

    render(){
        console.log(JSON.stringify(this.props.fields));
        const fields = this.props.fields;
        return (
            <View>
                {
                    fields.map((item,index) => {
                        return <View key={index}>
                                    <Text>{item.name}</Text>
                                </View>
                    })
                }
            </View>
        );
    }
}
