import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import globalStyles from '../styles/globalStyles';
import {
  ActivityIndicator,
  Colors,
  Badge,
  ProgressBar,
  Button,
} from 'react-native-paper';

//Unchangeble props
interface Props {
  showDescription: boolean;
}

//Changeble props
interface State {
  foodName: string;
  description: string;
  count: number;
}

class Order extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {foodName: 'Osh', description: 'Oshi tagi chinor', count: 0};
  }

  render() {
    const {showDescription} = this.props;
    const {foodName, description, count} = this.state;
    return (
      <View style={[styles.main]}>
        
          <Badge>{count}</Badge>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => this.setState({count:count+1})}>
            Press me
          </Button>
          <Button
            icon="camera"
            mode="contained"
            onPress={() => this.setState({count:count-1})}>
            Press me
          </Button>
      </View>
    );
  }
}

export default Order;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  first: {
    flex: 1,
    backgroundColor: 'red',
  },
  second: {
    flex: 2,
    backgroundColor: 'blue',
  },
});
