import React, { Component } from "react";
import { View, Image, Text, ToastAndroid, Platform, Alert, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { colors } from "../../res/CommonStyle";
import style from "./style";
import SwipeButton from 'rn-swipe-button';

class ButtonScreen extends Component {
    constructor(props) {
        super(props);
    }

swipeIcon = () => {
        return (
            <View style={{ borderRadius: 5, backgroundColor: colors.LIGHT_BLUE }}>
                <Image
                    source={require('../../res/diamond.png')} style={{ height: 26, width: 26 }}
                />
            </View>
        )
    }

    onButtonPress = (text) => {
        Platform.OS==='ios'?Alert.alert(text + ' Pressed')
        :ToastAndroid.showWithGravity(
            text + ' Pressed',
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={{ alignSelf: 'center', color: colors.WHITE, fontSize: 20 }}>{this.props.user.name}</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <Text style={{ color: colors.TEXT, alignSelf: 'center' }}>4 Varients of Buttom</Text>

                    <TouchableOpacity style={style.buttonStyle}
                        onPress={() => this.onButtonPress('Button 1')}
                    >
                    <Text style={{ color: colors.LIGHT_BLUE, textAlign: 'center' }}>Press me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.onButtonPress('Button 2')}
                        style={{ ...style.buttonStyle, backgroundColor: colors.BUTTON2_BG }}>
                        <Text style={{ color: colors.LIGHT_BLUE, textAlign: 'center' }}>Press me</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.onButtonPress('Button 3')}
                        style={{ ...style.buttonStyle, backgroundColor: colors.LIGHT_BLUE }}>
                        <Text style={{ color: colors.WHITE, textAlign: 'center' }}>Press me</Text>
                    </TouchableOpacity>


                    <SwipeButton
                        containerStyles={{ marginTop: 20, borderRadius: 5, backgroundColor: colors.BLACK, borderColor: '#525963' }}
                        railBackgroundColor={colors.BLACK}
                        title='Slide me to continue'
                        titleColor={colors.LIGHT_BLUE}
                        titleFontSize={14}
                        railBorderColor='#525963'
                        thumbIconComponent={this.swipeIcon}
                        thumbIconImageSource={require('../../res/diamond.png')}
                        thumbIconBackgroundColor={colors.LIGHT_BLUE}
                        thumbIconBorderColor={colors.LIGHT_BLUE}
                        thumbIconStyles={{ borderRadius: 5 }}
                        railFillBackgroundColor={colors.BLACK}
                        railFillBorderColor={colors.BLACK}
                        shouldResetAfterSuccess={true}
                        disabled={false}
                        onSwipeSuccess={() => {
                            console.log('Swipe button');
                            this.onButtonPress('Swipe button')
                        }}
                        
                    />

                </View>
            </View>
        )
    }


}
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user
    };
};


export default connect(mapStateToProps, null)(ButtonScreen);