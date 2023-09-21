import React, { useState } from 'react';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [textValue, setTextValue] = useState('');
  const [itemList, setItemList] = useState([]);
  const [modalVisible,setModalVisible] = useState([]);

  const onHandleChangeItem = (text) => setTextValue(text);

  const addItem = () => {
    setItemList((prevState) => [
      ...prevState,
      { id: Math.random(), value: textValue },
    ]);
    setTextValue('');
  };

const renderListItem = ({ item }) => (
  <View style={styles.listContainer}>
    <Text style={styles.itemListText}>{item.value}</Text>
  </View>
)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Item..."
            value={textValue}
            onChangeText={onHandleChangeItem}
          />
          <Button title="Agregar" onPress={addItem} />
        </View>
      </View>

      <FlatList
        data={itemList}
        renderItem={renderListItem}
        keyExtractor={(item) => item.id}
      />

        <Modal>
<View>
  <Text style={styles.modalText}> Estas seguro de Eliminar?</Text>
</View>
    <View>
      
    </View>
</Modal>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#87a5bf'
  },
  header: {
    width: '100%',
    paddingTop: 30,
    padding: 20,
    backgroundColor: '#234359'
  },
  inputContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputText: {
    padding: 10,
    fontSize: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200
  },
  listContainer: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#55748c'
  },
  itemListText: {
    color: 'white',
    margin: 5,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#6e8ca6'
  }
})
