import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
//grid
import { Col, Row, Grid } from "react-native-easy-grid";

function Item({ item }) {
  return (
    <View
      style={{
        padding: 10,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: 10,
        margin: 5,
      }}
    >
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          {item.name}
        </Text>
        <Text style={{ fontWeight: "bold", color: "white", marginBottom: 5 }}>
          {item.punchline}
        </Text>
        <Image
          source={{ uri: item.photo }}
          style={{ width: 300, height: 250, borderRadius: 10 }}
        />
      </View>
    </View>
  );
}

class Bed extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: [
      {
        name: "What kind of dog does Dracula have?",
        punchline: "A bloodhound!",
        photo: "https://media.giphy.com/media/11NDk1NnldC9vq/giphy.gif",
      },
      {
        name: "What’s your dog’s favorite Pink Floyd album?",
        punchline: "Bark Side of the Moon",
        photo: "https://media.giphy.com/media/82V1L5HyPvJLJbkeNe/giphy.gif",
      },
      {
        name: "What’s a did the dog study at college?",
        punchline: "Bark-eology",
        photo: "https://media.giphy.com/media/oDK8A6xUNjD2M/giphy.gif",
      },
      {
        name: "What did Darth Vader name his son?",
        punchline: "Luke Skybarker",
        photo: "https://media.giphy.com/media/xUA7aQaXbhnkX4znm8/giphy.gif",
      },
      {
        name: "What do you call a sad pup?",
        punchline: "Mellon collie",
        photo: "https://media.giphy.com/media/khzkWerssJE7m/giphy.gif",
      },
      {
        name: "What did the polite dog say?",
        punchline: "Thanks fur everything.",
        photo: "https://media.giphy.com/media/SWpD98JCSNeDJ8Htkr/giphy.gif",
      },
    ],
  };

  render() {
    return (
      <ScrollView style={{ backgroundColor: "black" }}>
        <Text style={styles.heading}>So, you like puns?</Text>
        {/* <Grid>
          <Row>
            <Col>
              <TouchableOpacity onPress>
                <View style={{ backgroundColor: "red" }}>
                  <Text style={{ color: "black" }}>Henlo fren</Text>
                </View>
              </TouchableOpacity>
            </Col>
            <Col>
              <View style={{ backgroundColor: "red" }}>
                <Text style={{ color: "black" }}>Henlo fren</Text>
              </View>
            </Col>
          </Row>
          <Row>
            <Col>
              <View style={{ backgroundColor: "red" }}>
                <Text style={{ color: "black" }}>Henlo fren</Text>
              </View>
            </Col>
            <Col>
              <View style={{ backgroundColor: "red" }}>
                <Text style={{ color: "black" }}>Henlo fren</Text>
              </View>
            </Col>
          </Row>
        </Grid> */}
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.email}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    alignItems: "center",
    backgroundColor: "black",
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    padding: 25,
    fontWeight: "bold",
  },
});

export default Bed;
