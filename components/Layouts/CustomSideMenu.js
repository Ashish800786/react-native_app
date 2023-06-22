import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CustomSideMenu = (props) => {
    
  const [selectedId, SetSelectedId] = useState(1);
  const SideMenuList = [
    { id: 1, icons: "home", title: "Home" ,redirection:'Dashboard'},
    { id: 2, icons: "user", title: "Profile" ,redirection:'Profile'},
    { id: 3, icons: "users", title: "Users",redirection:'Profile' },
    { id: 4, icons: "commenting", title: "Products",redirection:'Profile' },
    { id: 5, icons: "commenting", title: "Category",redirection:'Profile' },
    { id: 6, icons: "trash", title: "Trashed",redirection:'Profile' },
    { id: 7, icons: "key", title: "Change Pasword",redirection:'Profile' },
    // { id: 3, icons: "commenting", title: "Price",redirection:'Profile' },
    // { id: 4, icons: "home", title: "Rooms",redirection:'Profile' },
    // { id: 5, icons: "list", title: "List",redirection:'Profile' },
    // { id: 6, icons: "film", title: "Report" ,redirection:'Profile'},
    // { id: 7, icons: "area-chart", title: "statistic",redirection:'Profile' },
  ];

  const footersidemenu = [
    { id: 8, icons: "share-alt", title: "Tell a Friend" },
    { id: 9, icons: "question-circle", title: "Feedback" },
    { id: 10, icons: "sign-out", title: "Logout" },
  ];


  // #A9CECE
  // ()=>props.navigation.navigate(redirectionUrl)
  
  const acivate_nav=(item)=>{
    SetSelectedId(item.id);
    props.navigation.navigate(item.redirection); 
  }
  
  const Item = ({ title, icon ,onPress,redirectionUrl,backgroundColor,textColor}) => {
    return (
      <View style={[styles.item,{backgroundColor:backgroundColor}]}>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.title,{color:textColor}]}>
            <FontAwesome name={icon} style={styles.sideIcon} /> {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => {
    // alert('selectedId : '+selectedId+'itemId : '+item.id);

    const backgroundColor = item.id === selectedId ? '#75CDA1' : '';
    const color = item.id === selectedId ? 'white' : 'black';

    return (


      <Item
        title={item.title}
        icon={item.icons}
        redirectionUrl={item.redirection}
        onPress={() => {acivate_nav(item)}}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  return (
    <View style={styles.d}>
      <View style={styles.d1}>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Profile')}>
          <Image
            source={{
              uri: "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector.jpg",
            }}
            style={styles.sideImg}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.sideUserName}>Ashish Yadav</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.sideuserFollowers}>{`Shopping Details`}</Text>
        </TouchableOpacity>
  
      </View>

      <SafeAreaView style={styles.d2}>
        <FlatList
          data={SideMenuList}
          renderItem={renderItem}
          extraData={selectedId}
        />
      </SafeAreaView>

      <View style={styles.d3}>
        <FlatList data={footersidemenu} renderItem={renderItem} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  d: {
    flex: 1,
  },
  d1: {
    flex: 0.2,
    paddingVertical: 50,
    paddingHorizontal: 30,
    borderBottomColor: "gray",
  },
  d2: {
    flex: 0.6,
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    borderBottomColor: "gray",
    // backgroundColor:'yellow'
  },
  d3: {
    flex: 0.3,
  },
  sideImg: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  sideUserName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  sideuserFollowers: {
    fontSize: 13,
  },

  sideIcon: {
    fontSize: 18,
  },

  item: {
    // backgroundColor: '#f9c2ff',
    padding: 8,
    marginVertical:0,
    marginHorizontal: 7,
    // backgroundColor:'#A9CECE',
    marginTop:5,
    borderRadius:5,
  },
  title: {
    fontSize: 18,
  },
});

export default CustomSideMenu;
