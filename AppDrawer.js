import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Drawer } from 'react-native-material-drawer';

const styles = {
  container: {
    width: '100%',
  },
  body: {
    backgroundColor: '#eee',
  },
};

class AppDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Drawer
          open={this.state.isOpen}
          drawerContent={<View><Text>Drawer Content</Text></View>}
          onClose={() => this.setState({ isOpen: false })}
          animationTime={250}>
          <View style={styles.body}>
             <View style={{ marginTop: 20, alignItems: 'center', width: '100%', flex: 1 }}>
              <Text style={{ marginBottom: 20 }}>
                This is a page
              </Text>
              <TouchableOpacity onTouch={() => this.setState({ isOpen: !this.state.isOpen })}>
                <Text>Toggle</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Drawer>
      </View>
    );
  }
}
