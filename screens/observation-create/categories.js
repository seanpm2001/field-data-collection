import React, { Component } from 'react';
import { StyleSheet, View, Button, ListView, TouchableHighlight } from 'react-native';

import { Text, Wrapper } from '../../components';
import { baseStyles } from '../../styles';

class CategoriesScreen extends Component {
  constructor () {
    super();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => { r1 !== r2 }
    });

    this.state = {
      categories: ds.cloneWithRows([
        { name: 'Oil spills' },
        { name: 'Blast Fishing' },
        { name: 'Schools' },
        { name: 'Buildings' },
        { name: 'Hazards' },
        { name: 'Oil spills' },
        { name: 'Blast Fishing' },
        { name: 'Schools' },
        { name: 'Buildings' },
        { name: 'Hazards' }
      ]),
    };
  }

  render () {
    const { navigate } = this.props.navigation;

    return (
      <Wrapper>
        <Text style={baseStyles.title}>
          What do you want to add?
        </Text>

        <ListView
          contentContainerStyle={styles.gridContainer}
          dataSource={this.state.categories}
          noScroll={true}
          renderRow={(item) => {
            function onCategoryPress () {
              navigate('AddObservation', { category: item })
            }

            return (
              <TouchableHighlight onPress={onCategoryPress}>
                <View style={styles.gridItem}>
                  <Text>{item.name}</Text>
                </View>
              </TouchableHighlight>
            );
          }}
        />

        <View style={styles.moreItemsButton}>
          <Text style={{}} onPress={() => {}}>View More</Text>
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  gridContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  gridItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    margin: 5,
    width: 80,
    height: 80,
  },
  moreItemsButton: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20,
  }
});

export default CategoriesScreen;