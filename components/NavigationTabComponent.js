import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Ionicons } from "@expo/vector-icons";
import ProfileComponent from "./Layouts/ProfileComponent";
import SettingsComponent from "./Layouts/SettingsComponent";
import ContactComponent from "./Layouts/ContactComponent";
import AboutComponent from "./Layouts/AboutComponent";
import CameraComponent from "./Layouts/CameraComponent";
import axios from "axios";
import { color } from "react-native-reanimated";
import Header from "./Layouts/Header";

function HomeScreen(props) {
  const [resultDatas, SetresultDatas] = useState([]);
  const [resultDatas2, SetresultDatas2] = useState([]);

  useEffect(() => {
    const result = axios({
      url: "https://dummyjson.com/products",
      //  url:"https://jsonplaceholder.typicode.com/photos",
      // url:"https://jsonplaceholder.typicode.com/posts/1/comments",
      method: "get",
    });
    result
      .then((response) => {
        // console.warn(response.data[0])
        SetresultDatas(response.data.products);
        SetresultDatas2(response.data.products);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.homecard}>
        <View style={styles.image_view}>
          <Image
            style={styles.image}
            source={{
              uri: item.thumbnail,
            }}
          />
        </View>

        <View style={styles.homecardRow}>
          <Text style={styles.homecardVal}> {item.title}</Text>
        </View>

        <View style={styles.homecardRow}>
          <Text style={styles.homecardVal}> {item.description}</Text>
        </View>

        <View style={styles.homecardRow}>
          <Text style={styles.homecardVal}>
          
            <FontAwesome name="rupee" size={16} /> {item.price.toFixed(2)}/-
          </Text>
        </View>

        <View style={styles.homecardRow}>
          <Text style={styles.homecardVal}>
            
            {item.discountPercentage}% Off
          </Text>
        </View>

        <View style={styles.homecardRow}>
          <Text style={styles.ratingStar}>
           
            {item.rating} <FontAwesome name="star" size={16} color={"orange"} />
          </Text>
        </View>

        <View style={styles.homecardRow}>
          <Text style={styles.homecardVal}> {item.stock} In Stock </Text>
        </View>

        <View style={styles.buyCartView}>
          <View style={styles.homecardRow}>
          <TouchableOpacity style={{width:"100%"}}>
            <Text style={styles.addToCart}>
             
              Add to Cart 
              <FontAwesome name="shopping-cart" size={16} color={"red"} />
            </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.homecardRow}>
            <TouchableOpacity style={{width:"100%"}} onPress={()=>props.navigation.openDrawer()}>
            <Text style={styles.buyNow}> Buy Now </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderItem2 = ({ item }) => {
    return (
      
      <View style={styles.homecard2}>
        <View style={styles.image_view2}>
          <Image
            style={styles.image2}
            source={{
              uri: item.thumbnail,
            }}
          />
        </View>

        <View style={styles.homecardRow2}>
          {/* <Text style={styles.homecardTitle2}>Title : </Text> */}
          <Text style={styles.homecardVal2}> {item.title}</Text>
        </View>

        <View style={styles.homecardRow2}>
          {/* <Text style={styles.homecardTitle2}>Description : </Text> */}
          <Text style={styles.homecardVal2}> {item.description}</Text>
        </View>

        <View style={styles.homecardRow2}>
          {/* <Text style={styles.homecardTitle2}>Price : </Text> */}
          <Text style={styles.homecardVal2}>
            
            <FontAwesome name="rupee" size={16} /> {item.price.toFixed(2)}/-
          </Text>
        </View>

        <View style={styles.homecardRow2}>
          {/* <Text style={styles.homecardTitle2}>Discount Percentage : </Text> */}
          <Text style={styles.homecardVal2}>
            
            {item.discountPercentage}% Off
          </Text>
        </View>
        <View style={styles.homecardRow2}>
          {/* <Text style={styles.homecardTitle2}>Rating : </Text> */}

          <Text style={styles.ratingStar2}>
            
            {item.rating} <FontAwesome name="star" size={16} color={"orange"} />
          </Text>
        </View>
        <View style={styles.homecardRow2}>
          {/* <Text style={styles.homecardTitle2}>In Stock : </Text> */}
          <Text style={styles.homecardVal2}> {item.stock} In Stock </Text>
        </View>

        <View style={styles.homecardRow2}>
        <TouchableOpacity style={{width:"100%"}}>
          <Text style={styles.addToCart2}>
            
            Add to Cart
            <FontAwesome name="shopping-cart" size={16} color={"red"} />
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.homecardRow2}>
        <TouchableOpacity style={{width:"100%"}}>
          <Text style={styles.buyNow2}> Buy Now </Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  };

  return (
    <SafeAreaView style={{marginTop:40}}> 
    <ScrollView>
        <Header props={{...props}} title={'Home'} />
      <View style={styles.mainDiv}>
        <View style={styles.mainDiv}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={resultDatas2}
            renderItem={renderItem2}
            keyExtractor={(key)=>{
              return(key.id)
             }}
          />
        </View>

        <View style={styles.mainDiv}>
          <FlatList data={resultDatas} renderItem={renderItem}  keyExtractor={(key)=>{
             return(key.id)
            }}  />
        </View>

        <View style={styles.mainDiv}>
          <FlatList
            
            horizontal
            showsHorizontalScrollIndicator={false}
            data={resultDatas2}
            renderItem={renderItem2}
            keyExtractor={(key)=>{
             return(key.id)
            }}
          />
        </View>

     
        {/* <CameraComponent /> */}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
function AboutScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>About!</Text>
    </View>
  );
}
function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Contact!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    // <View>
    //   <Text>Tab Navigator</Text>
    // </View>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color = "black", size = 12 }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileComponent}
        options={{
          headerShown: false,
          tabBarIcon: ({ color = "black", size = 12 }) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutComponent}
        options={{
          headerShown: false,
          tabBarIcon: ({ color = "black", size = 12 }) => (
            <FontAwesome name="info-circle" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactComponent}
        options={{
          headerShown: false,
          tabBarIcon: ({ color = "black", size = 12 }) => (
            <FontAwesome name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsComponent}
        options={{
          headerShown: false,
          tabBarIcon: ({ color = "black", size = 12 }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function NavigationTabComponent() {
  return (
    // <NavigationContainer>
    <MyTabs />
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image_view: {
    height: 200,
    flex: 1,
    width: "100%",
    marginBottom: 15,
  },
  image: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    resizeMode: "stretch",
  },
  mainDiv: {
    flex: 1,
    padding: 3,
    // backgroundColor:'gray'
  },
  homecard: {
    flex: 1,
    // flexDirection:'row',
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    color: "black",
    margin: 3,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 10,
  },
  homecardRow: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  homecardTitle: {
    width: "50%",
    fontSize: 16,
    fontWeight: "bold",
    fontStyle: "italic",
    // fontFamily:'algerian'
  },
  homecardVal: {
    textAlign: "center",
    width: "100%",
    fontSize: 14,
    fontStyle: "italic",
    justifyContent: "center",
    margin: 3,

    // fontFamily:'algerian'
  },
  ratingStar: {
    width: "40%",
    backgroundColor: "green",
    color: "white",
    padding: 10,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
    // fontFamily:'algerian'
  },
  buyCartView: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
  },
  addToCart: {
    width: "95%",
    backgroundColor: "gray",
    color: "white",
    padding: 15,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,

    // fontFamily:'algerian'
  },
  buyNow: {
    width: "95%",
    backgroundColor: "orange",
    color: "black",
    padding: 15,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
    // fontFamily:'algerian'
  },

  image_view2: {
    height: 140,
    flex: 1,
    width: "100%",
    marginBottom: 10,
  },

  image2: {
    height: "100%",
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    resizeMode: "stretch",
  },
  homecard2: {
    flex: 1,
    // flexDirection:'row',
    height: "100%",
    width: 170,
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    color: "black",
    margin: 3,
    padding: 10,
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 5,
  },
  homecardRow2: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    // borderBottomWidth:1,
    // borderColor:'gray',
    padding: 0,
  },
  homecardTitle2: {
    width: "50%",
    fontSize: 13,
    fontWeight: "bold",
    fontStyle: "italic",
    // fontFamily:'algerian'
  },
  homecardVal2: {
    textAlign: "center",
    width: "100%",
    fontSize: 13,
    fontStyle: "italic",
    // fontFamily:'algerian'
  },
  ratingStar2: {
    width: "50%",
    backgroundColor: "green",
    color: "white",
    padding: 7,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
    // fontFamily:'algerian'
  },
  addToCart2: {
    width: "100%",
    backgroundColor: "gray",
    color: "white",
    padding: 7,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
    // fontFamily:'algerian'
  },
  buyNow2: {
    width: "100%",
    backgroundColor: "orange",
    color: "black",
    padding: 7,
    alignSelf: "center",
    textAlign: "center",
    alignItems: "center",
    borderRadius: 5,
    // fontFamily:'algerian'
  },
});
