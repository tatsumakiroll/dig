import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Text,
} from "react-native";
import React from "react";
import { COLORS, SIZES, SHADOWS } from "../../constants";

interface CircleButtonProps {
  imgUrl: ImageSourcePropType;
  handlePress?: () => void;
  right?: number;
  top?: number;
}

const CircleButton: React.FC<CircleButtonProps> = ({
  imgUrl,
  handlePress,
  right = 0,
  top = 0,
}) => {
  return (
    <TouchableOpacity
      style={[styles.likeButton, { right, top }]}
      onPress={handlePress}
    >
      <Image source={imgUrl} resizeMode="contain" style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  likeButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    position: "absolute",
    borderRadius: SIZES.extraLarge,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.light,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default CircleButton;
