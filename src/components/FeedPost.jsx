import { Image, StyleSheet, Text, View } from "react-native";
import COLORS from "../theme/colors";
import fonts from "../theme/fonts";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useState } from "react";
import DoublePress from "../utils/DoublePress";
import Carousel from "./Carousel";

export default function FeedPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const toggleLike = () => {
    setIsLiked((like) => !like);
  };
  const handleDescriptionExpand = () => {
    setIsDescriptionExpanded((expand) => !expand);
  };
  return (
    <>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.profile_picture,
          }}
          style={styles.avtar}
        />
        <Text style={styles.avtarName}>{post.user.name}</Text>
        <Entypo name="dots-three-horizontal" size={16} style={styles.dotIcon} />
      </View>
      {post.image ? (
        <DoublePress onDoublePress={toggleLike}>
          <Image
            source={{
              uri: post.image,
            }}
            style={styles.postImg}
          />
        </DoublePress>
      ) : (
        post.images && (
          <Carousel data={post.images} onDoublePress={toggleLike} />
        )
      )}
      <View style={styles.iconContainer}>
        <AntDesign
          name={isLiked ? "heart" : "hearto"}
          size={24}
          style={styles.icon}
          color={isLiked ? COLORS.red : COLORS.black}
          onPress={toggleLike}
        />
        <Ionicons
          name="chatbubble-outline"
          size={24}
          style={styles.icon}
          color={COLORS.black}
        />
        <Feather
          name="send"
          size={24}
          style={styles.icon}
          color={COLORS.black}
        />
        <Feather
          name="bookmark"
          size={24}
          style={{ marginLeft: "auto" }}
          color={COLORS.black}
        />
      </View>
      <Text>Liked by 100 user</Text>
      <Text
        onPress={handleDescriptionExpand}
        numberOfLines={isDescriptionExpanded ? 0 : 1}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magni non,
        nulla iusto in aliquid praesentium ratione inventore eos asperiores,
        sint, eveniet quam! Exercitationem incidunt dolore ducimus maiores
        aliquam alias.
      </Text>
      <Text style={styles.comments}>
        View {post.comments.length > 1 ? "all " + post.comments.length : "1"}{" "}
        comments
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  postImg: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  header: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // alignContent: "center",
    padding: 10,
    maxHeight: 70,
    // backgroundColor: COLORS.lightgrey,
  },
  avtar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  avtarName: {
    fontSize: fonts.FONT_SIZE.md,
    marginLeft: 10,
  },
  dotIcon: {
    marginLeft: "auto",
  },
  icon: {
    marginHorizontal: 5,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    // marginHorizontal:'auto'
  },
  carousel: {},
});
