import React from "react";
import { View, Text, Image, Dimensions, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export const MusicListMedium = () => {
  return (
    <View>
      <Title />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
      >
        {[...Array(7)].map((val, idx) => {
          return (
            <View key={idx}>
              {[...Array(2)].map((value, index) => {
                return <MusicListMediumItem key={index} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const Title = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContnent: "space-between",
        alignItems: "flex-end",
        paddingHorizontal: 5,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        다시 듣기
      </Text>
      <View
        style={{
          borderRadius: 100,
          borderWidth: 1,
          borderColor: "#ddd",
          paddingHorizontal: 10,
          paddingVertical: 4,
        }}
      >
        <Text style={{ color: "white", fontSize: 12 }}>더보기</Text>
      </View>
    </View>
  );
};

const MusicListMediumItem = () => {
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <View
        style={{
          width: width / 4,
          height: height / 9,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 8,
        }}
      >
        <MaterialIcons name="play-arrow" size={24} color="white" />
      </View>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: width / 4, height: width / 4, borderRadius: 2 }}
      />

      <Text
        style={{
          color: "white",
          marginTop: 5,
          width: width / 4,
          fontSize: 13,
        }}
        numberOfLines={2}
      >
        {" "}
        Item{" "}
      </Text>
    </View>
  );
};
