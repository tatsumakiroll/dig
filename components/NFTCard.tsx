import React from "react";
import { View, Image, ImageSourcePropType, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import CircleButton from "./Buttons/CircleButton";
import RectButton from "./Buttons/RectangleButton";
import {
  ItemInfo,
  ItemBidders,
  ItemEnd,
  ItemImage,
  ItemPrice,
  ItemTitle,
} from "./SubInfo"

type NFTCardProps = {
  data: {
    image: ImageSourcePropType;
    name: string;
    creator: string;
    price: number
  };
};

const NFTCard: React.FC<NFTCardProps> = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image source={data.image} resizeMode="cover" style={styles.image} />
          </View>
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
          <ItemInfo />
        <View style={{ width: "100%", padding: SIZES.font }}>
          <ItemTitle
            itemTitle={data.name}
            itemSeller={data.creator}
            itemNameSize={SIZES.large}
            itemSellerSize={SIZES.small}
          />
          <View style={{marginTop: SIZES.font,
            flexDirection: "row", 
            justifyContent: "space-between",
            alignItems: "center"
          }}>
        <ItemPrice price={data.price}/>
        <RectButton handlePress={()=>{navigation.navigate("Details", {data})}}/>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  imageContainer: {
    width: "100%",
    height: 250,
  },
  image: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
});

export default NFTCard;
