import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  
  import React from "react";
  import { View, Text } from "react-native";
  import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
  import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
  import { ScrollView } from "react-native-gesture-handler";
  import { DataTable } from 'react-native-paper';
  
  export default function TrackingExam({ router, navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Kết quả thi</Text>
        </View>
        <View style={styles.content}>
            <DataTable>
            <ScrollView>
              <DataTable.Header>
                <DataTable.Title>Bài</DataTable.Title>
                <DataTable.Title>Điểm</DataTable.Title>
                <DataTable.Title></DataTable.Title>
              </DataTable.Header>
  
              <DataTable.Row>
                <DataTable.Cell>Giữa khóa</DataTable.Cell>
                <DataTable.Cell>6</DataTable.Cell>
                <DataTable.Cell>
                    <TouchableOpacity onPress={() => navigation.navigate('TrackingDetailExam')}>
                        <Text>Xem chi tiết</Text>
                    </TouchableOpacity>
                </DataTable.Cell>
              </DataTable.Row>
  
              <DataTable.Row>
                <DataTable.Cell>Cuối khóa</DataTable.Cell>
                <DataTable.Cell>6</DataTable.Cell>
                <DataTable.Cell>
                    Xem chi tiết
                </DataTable.Cell>
              </DataTable.Row>
  
            </ScrollView>
            </DataTable>
  
        </View>
      </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      backgroundColor: '#ffffff',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    content: {
      flex: 4,
      width: '100%',
      alignContent: 'center',
      marginTop: 10,
    },
    header: {
      flex: 1,
      width: '100%',
      backgroundColor: '#d5182c',
      justifyContent: 'center',
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    btn: {
      flex: 1,
      width: '100%',
      justifyContent: 'center',
    },
    loginButton: {
      flex: 0.5,
      borderRadius: 20,
      backgroundColor: '#2a58fc',
      marginLeft: 20,
      marginRight: 20,
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 10
    }
  })