import { Constants } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from "react-apollo";
import ApolloClient from 'apollo-boost';
import React from 'react';

import { CreateRecipeForm } from './components';

const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjj6owoeu0lzt0183s299lbgf'
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View style={styles.container}>
          <CreateRecipeForm />
        </View>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight
  },
});

export default App;
