import React from 'react';
import { View, Text, NativeModules ,Button} from 'react-native';
import { routes } from '../../Navigation/Constants';
import { colors ,strings} from "../../res/CommonStyle";
import styles from './style';
const {DeviceModule} = NativeModules;
const isEmulator = DeviceModule.isEmulator();
const FirstScreen = (props) => {

const {navigation} = props;
return (
    <View style={styles.container}>
          {isEmulator && (
            <Text>{strings.appOnSimulator}</Text>
          )}
        <Text>{strings.welcomeGreet}</Text>
       <Button
        title={strings.navigateToSecond}
        color={colors.LIGHT_BLUE}
        onPress={() => navigation.navigate(routes.USERINFO)}
      />
    </View>
);

}

export default FirstScreen