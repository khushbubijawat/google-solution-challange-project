import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
export default function History() {
  const Data = {
    tableHead: ['Meal', 'Calories', 'Protein', 'Carbs','Fat','Sugar'],
    tableData: [
      ['Lean Ground Turkey','598kcal', '73g', '4g', '33g','2g'],
      ['Lean Ground Turkey','598kcal', '73g', '4g', '33g','2g'],
      ['Lean Ground Turkey','598kcal', '73g', '4g', '33g','2g'],
    ]
  }

return (
  <>
    <View>
        <Text style={styles.date}>Today</Text>
      <View>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={Data.tableHead} style={styles.headdan} textStyle={styles.text} />
          <Rows data={Data.tableData} textStyle={styles.text} />
        </Table>
      </View>

      <Text style={styles.date}>Tomorrow</Text>
      <View>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={Data.tableHead} style={styles.headdan} textStyle={styles.text} />
          <Rows data={Data.tableData} textStyle={styles.text} />
        </Table>
      </View>
    </View>
  </>
);
}

const styles = StyleSheet.create({

  // dantable: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  headdan: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 ,},
  date:{
    marginHorizontal:5,
    marginVertical:15,
    borderBottomColor:'gray',
    borderBottomWidth:1,
    paddingBottom:5,
    fontSize:18,
    fontWeight:'700',
    color:'gray'
  }
})
