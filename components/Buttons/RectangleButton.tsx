import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Text,
} from "react-native";
import React from "react";
import { COLORS, SIZES, FONTS, SHADOWS } from "../../constants";

interface RectButtonProps {
  handlePress?: () => void;
}

const RectButton: React.FC<RectButtonProps> = ({handlePress}) => {
  return (
    <TouchableOpacity style={[styles.bidButton]} onPress={handlePress}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bidButton: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.extraLarge,
    minWidth: 120,
    padding: SIZES.small,
  },
});

export default RectButton;
