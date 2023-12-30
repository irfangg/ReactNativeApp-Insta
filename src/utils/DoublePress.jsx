import { Pressable } from "react-native";

const DoublePress = ({ onDoublePress, children }) => {
  let pressed = new Date();
  const handleDoublePress = () => {
    const now = new Date();
    if (now - pressed < 300) {
      onDoublePress();
    }
    pressed = new Date();
  };
  return <Pressable onPress={handleDoublePress}>{children}</Pressable>;
};

export default DoublePress;
