import React, { Component } from "react";
import { View, Image, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routes } from "../../Navigation/Constants";
import { colors, strings } from "../../res/CommonStyle";
import { setUserDetails } from '../../Redux/dispatcher'
import style from "./style";

class UserInputScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={style.container}>
                     <View style={{flex:1,justifyContent:'center'}}>
                    <TextInput
                       placeholder={strings.enterName}
                        style={{ borderRadius: 5, borderWidth: 0.5, borderColor: colors.GREY, marginVertical: 20 ,padding:20}}
                        onChangeText={(text) => this.props.setUserDetails(text)}
                    />
                    <Button
                    title={strings.save}
                       style={{ paddingVertical: 10, backgroundColor: colors.GREEN, height: 50, width: 300, borderRadius: 5, alignContent: 'center', justifyContent: 'center' }}
                        onPress={() => this.props.navigation.navigate(routes.BUTTONSCREEN)}
                    >
                    </Button>
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators({ setUserDetails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInputScreen);