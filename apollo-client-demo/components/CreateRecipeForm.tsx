import {ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import {Mutation} from 'react-apollo';
import gql from "graphql-tag";
import React from 'react';

const CREATE_RECIPE = gql`
  mutation addRecipe($title: String!) {
    createRecipe(title: $title) {
      id
      name
    }
  }
`;

interface CreateRecipeFormProps {}
interface CreateRecipeFormState {
  titleInputValue: string;
}

class CreateRecipeForm extends React.Component<
  CreateRecipeFormProps,
  CreateRecipeFormState
> {
  state = {
    titleInputValue: '',
  }

  private handleChangeTitleInputValue = (titleInputValue: string) => {
    this.setState({titleInputValue})
  }

  public render() {
    return (
      <Mutation mutation={CREATE_RECIPE}>
        {(createRecipe, {data, loading, error}) => (
          <ScrollView alwaysBounceVertical={false}>
            {!!data && <Text>{data.name}</Text>}
            <TextInput
              value={this.state.titleInputValue}
              onChangeText={this.handleChangeTitleInputValue}
            />
            <TouchableOpacity
              disabled={loading}
              onPress={() => {
                createRecipe({
                  variables: {
                    title: this.state.titleInputValue
                  }
                });
              }}
            >
              {loading
                ? <ActivityIndicator />
                : (
                  <Text>
                    Submit
                  </Text>
                )
              }
            </TouchableOpacity>
          </ScrollView>
        )}
      </Mutation>
    )
  }
}

export default CreateRecipeForm;
