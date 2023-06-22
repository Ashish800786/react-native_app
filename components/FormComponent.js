import {View,Text,TextInput,Button,StyleSheet} from "react-native"
const FormComponent=()=>{
    return(
            
        <View>
            <View style={styles.formView}>
                <Text style={styles.text}>Name</Text>
                <TextInput placeholder="Enter Your Name" style={styles.inputs} />
                <Text style={styles.text}>Email</Text>
                <TextInput placeholder="Enter Your Name" style={styles.inputs} />
                <Text style={styles.text}>Password</Text>
                <TextInput placeholder="Enter Your Name" style={styles.inputs} secureTextEntry={true} />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput placeholder="Enter Your Name" style={styles.inputs} secureTextEntry={true} />
                <View style={{ margin : 10}}>
                <Button title="Save" color={'green'}/>
                </View>
                <View style={{ margin : 10}}>
                <Button title="Reset" color={'red'} />
                </View>
            </View>
          
        </View>
    )
}

const styles=StyleSheet.create({
    inputs:{
        borderWidth:2,
        borderRadius:10,
        margin:10,
        padding:10,
        backgroundColor:"white",
    },
    text: {
        textAlign:'center',
        marginBottom:-10,
        marginLeft:10,
        fontSize:20,
        color:'white'
      },

      formView:{
        borderRadius:10,
        backgroundColor:'orange',
        margin:10
      }
});

export default FormComponent;