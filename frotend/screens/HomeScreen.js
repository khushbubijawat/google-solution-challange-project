import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeScreenHeader from "./HomeScreenHeader";
import { Table, Row, Rows } from 'react-native-table-component';
export default function HomeScreen({navigation}) {
  const Data = {
    tableHead: ['Meal', 'Calories', 'Protein', 'Carbs', 'Fat', 'Sugar'],
    tableData: [
      ['Lean Ground Turkey', '598kcal', '73g', '4g', '33g', '2g'],
      ['Lean Ground Turkey', '598kcal', '73g', '4g', '33g', '2g'],
      ['Lean Ground Turkey', '598kcal', '73g', '4g', '33g', '2g'],
    ]
  }

  return (
    <>
      <View>
        <HomeScreenHeader />
        <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 10 }}>
          <Text style={{ fontSize: 16, color: 'gray' }}>Calories</Text>
          <Text style={{ marginLeft: 10, fontWeight: '700', fontSize: 16 }}>0 kcal</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.cards}>
            <Text>Protein</Text>
            <Text>94g</Text>
          </View>
          <View style={styles.cards}>
            <Text>Carbs </Text>
            <Text>11g</Text>
          </View>
          <View style={styles.cards}>
            <Text>Fat</Text>
            <Text>80g</Text>
          </View>
          <View style={styles.cards}>
            <Text>Sugar</Text>
            <Text>6g</Text>
          </View>
        </View>
        <View>
          <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
            <Row data={Data.tableHead} style={styles.headdan} textStyle={styles.text} />
            <Rows data={Data.tableData} textStyle={styles.text} />
          </Table>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('History')}} style={{backgroundColor:'green',borderRadius:5,padding:5,marginTop:20,width:60}}>
          History
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  cards: {
    width: '45%',
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    shadowOffset: { width: -2, height: 4 },
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  // dantable: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  headdan: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, }
})
