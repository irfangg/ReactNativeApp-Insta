import { useRef, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import DoublePress from "../utils/DoublePress";
import COLORS from "../theme/colors";

const Carousel = ({ data, onDoublePress }) => {
  const { width } = useWindowDimensions();
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveImgIndex(viewableItems[0].index);
    }
  });
  return (
    <View style={{ width }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <DoublePress onDoublePress={onDoublePress}>
              <Image
                source={{
                  uri: item,
                }}
                style={{ width, aspectRatio: 4 / 3 }}
              />
            </DoublePress>
          );
        }}
        horizontal
        pagingEnabled
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 2,
          position: "absolute",
          bottom: 5,
          width: "100%",
        }}
      >
        {data.map((_, index) => (
          <View
            style={{
              width: 10,
              aspectRatio: 1,
              borderWidth: 1,
              backgroundColor:
                activeImgIndex === index ? COLORS.red : "transparent",
              borderColor: COLORS.white,
              borderRadius: 5,
            }}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
