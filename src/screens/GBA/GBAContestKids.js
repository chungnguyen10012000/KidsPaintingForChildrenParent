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
import { Dimensions, StyleSheet } from "react-native";

export default function GBAContestForKids({ router, navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Đánh giá điểm</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize: 20, color: '#d5182c'}}>Cuộc thi</Text>
                <Text style={{fontSize: 20, color: '#000000'}}>Điểm</Text>
                <LineChart
                    data={{
                        labels: ["10-10-2022", "10-11-20222"],
                        datasets: [
                            {
                                data: [
                                    6,
                                    7
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width} // from react-native
                    height={220}
                    yAxisLabel=""
                    yAxisSuffix=""
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        backgroundColor: "#2a58fc",
                        backgroundGradientFrom: "#2a58fc",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
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
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: '#d5182c',
        justifyContent: 'center',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
})