import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ViewPagerAndroid } from 'react-native';


export default class detail extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { goBack } = this.props.navigation
        return (
            <ViewPagerAndroid

                style={styles.viewPager}
                initialPage={0}>
                <View style={styles.pageStyle} key="1">
                    <Text>First page</Text>
                </View>
                <View style={styles.pageStyle} key="2">
                    <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
        )
    }
}
const styles = {
    viewPager: {
      flex: 1
    },
    pageStyle: {
      alignItems: 'center',
      padding: 20,
    }
  }
