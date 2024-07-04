import { View, Text, Image } from "react-native";
import { COLORS, SIZES, FONTS, SHADOWS, assets } from "../constants";

type ItemTitleProps = {
    itemTitle: string;
    itemSeller: string;
    itemNameSize: number;
    itemSellerSize: number;
};

export const ItemTitle: React.FC<ItemTitleProps> = ({
  itemTitle,
  itemSeller,
  itemNameSize,
  itemSellerSize,
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: itemNameSize,
          color: COLORS.primary,
        }}
      >
        {itemTitle}
      </Text>
      <Text   style={{
          fontFamily: FONTS.regular,
          fontSize: itemSellerSize,
          color: COLORS.primary,
        }}>{itemSeller}</Text>
    </View>
  );
};

export const ItemPrice = ({price}) => {
  return (
    <View>
      <Text style={{fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.primary }}>{`£${price}`}</Text>
    </View>
  );
};

export const ItemImage = ({ imgUrl, index }) => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const ItemEnd = () => {
  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",
        ...SHADOWS.light,
        elevation: 1,
        maxWidth: "50%",
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        EndDate
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
      2h 30m
      </Text>
    </View>
  );
};

export const ItemBidders = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ItemImage imgUrl={imgUrl} index={index} key={`People-${index}`} />
        )
      )}
    </View>
  );
};

export const ItemInfo = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <ItemBidders />
      <ItemEnd />
    </View>
  );
};
