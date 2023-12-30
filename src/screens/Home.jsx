import { FlatList, StyleSheet, View } from "react-native";
import FeedPost from "../components/FeedPost";
import POSTDATA from "../constants/post.contstants";

export default function Home() {
  return (
    <View style={styles.postContainer}>
      <FlatList
        data={POSTDATA.posts}
        renderItem={({ item, index }) => <FeedPost key={index} post={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    flexDirection: "column",
    gap: 10,
    padding: "1%",
    width: "100%",
    // margin:0
  },
});
