import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import DocumentPicker from "react-native-document-picker";

const ProfileComponent = () => {
  const selectDoc = async () => {
    // alert();
    try {
      console.log("file open");
      //   const doc = await DocumentPicker.pickSingle().then((res)=>console.log("file opened")).catch((err)=>console.log("file opened"));

      try {
        const res = await DocumentPicker.pickSingle({
          type: [DocumentPicker.types.allFiles],
        });
        var uri = res.uri;
        var name = res.name;
        var fileCopyUri = res.fileCopyUri;
        console.log(JSON.stringify(res));
        console.log(res.uri);
      } catch (err) {
        console.log(err);
        if (DocumentPicker.isCancel(err)) {
          console.log("Document Is Cancel: " + e);
        } else {
          console.log("Something went wrong.. " + err);
        }
      }
      // doc.then((res)=>{
      //     console.log(res)
      // });
      // doc.catch((err)=>{
      //     console.log(err)
      // });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("Document Is Cancel: " + e);
      } else {
        console.log("Something went wrong.. " + err);
      }
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* <View> */}
      <View style={styles.div1}>
        <Image
          source={{
            uri: "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector.jpg",
          }}
          style={styles.img}
        />
        <TouchableOpacity onPress={selectDoc}>
          <Text style={styles.upload_image}>
            <FontAwesome name="camera" style={styles.upload} />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.div2}>
        <Text style={styles.profile_details}>Ashish Yadav</Text>
        <Text style={styles.profile_email_details}>ashishyadav@gamil.com</Text>
        <Text style={styles.profile_mob_details}>+91 8004691471</Text>
        <View style={styles.social}>
          <TouchableOpacity style={styles.social_button}>
            <FontAwesome name="facebook" style={styles.social_fb} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_button}>
            <FontAwesome name="instagram" style={styles.social_insta} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_button}>
            <FontAwesome name="twitter" style={styles.social_twitter} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.social_button}>
            <FontAwesome name="youtube-play" style={styles.social_youtube} />
          </TouchableOpacity>
        </View>

        <Text style={styles.profile_star_details}>
          <FontAwesome name="star" style={styles.star_icon_rated} />
          <FontAwesome name="star" style={styles.star_icon_rated} />
          <FontAwesome name="star" style={styles.star_icon_rated} />
          <FontAwesome name="star" style={styles.star_icon_rated} />
          <FontAwesome name="star-o" style={styles.star_icon_rated} />
        </Text>
      </View>
      <View style={styles.div3}>
        <Text style={styles.profile_desc}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  div1: {
    flex: 1.5,
    // backgroundColor:'red',
    height: 100,
    width: 100,
    borderRadius: 50,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  div2: {
    flex: 1,
    // backgroundColor:'green',
    width: "100%",
    alignItems: "center",
  },
  div3: {
    flex: 1,
    flexDirection: "row",
    // backgroundColor:'yellow',
    width: "100%",
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  profile_details: {
    padding: 3,
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginTop: 0,
  },
  profile_desc: {
    padding: 3,
    fontSize: 14,
    color: "black",
    marginTop: 15,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRightt: 20,
  },
  profile_email_details: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  profile_mob_details: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },
  profile_star_details: {
    fontSize: 10,
    alignItems: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  upload_image: {
    backgroundColor: "gray",
    paddingTop: 15,
    height: 60,
    width: 60,
    borderRadius: 30,
    opacity: 0.7,
    marginTop: -40,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 90,
  },
  upload: {
    color: "white",
    fontSize: 25,
    opacity: 1,
    marginTop: 10,
  },
  social: {
    flex: 1,
    flexDirection: "row",
    marginTop: 15,
  },
  social_button: {},
  social_fb: {
    flex: 1,
    width: 20,
    color: "blue",
    fontSize: 18,
    margin: 5,
  },
  social_youtube: {
    flex: 1,
    width: 20,
    color: "#c4302b",
    fontSize: 20,
    margin: 5,
  },
  social_twitter: {
    width: 20,
    color: "#00acee",
    fontSize: 18,
    margin: 5,
  },
  social_insta: {
    width: 20,
    color: "#833AB4",
    fontSize: 18,
    margin: 5,
  },
  star_icon_rated: {
    width: 20,
    color: "orange",
    fontSize: 18,
    margin: 5,
    alignContent: "center",
    alignItems: "center",
  },
  star_icon_unrated: {
    width: 20,
    color: "#833AB4",
    fontSize: 18,
    margin: 5,
    alignContent: "center",
    alignItems: "center",
  },
  followers: {
    flex: 1,
    height: 60,
    padding: 10,
    color: "white",
    backgroundColor: "aqua",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    margin: 5,
    textAlign: "center",
  },
  followers_count: {
    height: 40,
    width: 40,
    color: "black",
    backgroundColor: "white",
    borderRadius: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  followed: {
    flex: 1,
    height: 60,
    padding: 10,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "aqua",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    textAlign: "center",
  },
  followed_count: {
    height: 40,
    width: 40,
    color: "black",
    backgroundColor: "white",
    borderRadius: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});

export default ProfileComponent;
