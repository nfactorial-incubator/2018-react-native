import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import React from 'react';

const GET_ALL_RECIPES = gql`
{
  allRecipes {
    id
    title
    description
    instructions
  }
}
`;

interface RecipeListProps {}

class RecipeList extends React.Component<RecipeListProps> {
  private keyExtractor = (item) => item.id;

  private renderItem = ({item: recipe}) => (
    <View>
      <Text>
        {recipe.title}
      </Text>
      <Text>
        {recipe.description}
      </Text>
    </View>
  )

  public render() {
    return (
      <Query query={GET_ALL_RECIPES}>
        {({loading, data, error}) => (
          loading
            ? <ActivityIndicator />
            : (
              <FlatList
                keyExtractor={this.keyExtractor}
                data={data ? data.allRecipes : []}
                renderItem={this.renderItem}
              />
            )
        )}
      </Query>
    );
  }
}

export default RecipeList;
