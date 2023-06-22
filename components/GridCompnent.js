import {View,Text,Button,StyleSheet} from 'react-native'

const GridComponents=()=>{
    return(

    <View style={gridStyle.grid_view}>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
        <Text style={gridStyle.grid} > Ashish</Text>
    </View>
    )
}

const gridStyle=StyleSheet.create({
    grid:{
        width:100,
        backgroundColor:'red',
        margin:10,
        color:'white',
        padding:20
    },
    grid_view:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    }
    

})

export default GridComponents