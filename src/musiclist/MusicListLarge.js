import React from "react";
import { View, Text, ScrollView, Image, Dimensions } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
export const MusicListLarge = () => {
  return (
    <View>
      <Title></Title>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
      >
        {[...Array(7)].map((val, idx) => {
          return <MusicListLargeItem key={idx} />;
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
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#999",
            borderRaduis: 50,
            marginRight: 10,
            padding: 3,
          }}
        >
          <MaterialIcons name="fast-rewind" color="#999" size={24} />
        </View>
        <Text
          style={{
            color: "white",
            fontSize: 28,
            fontWeight: "bold",
            marginRight: 10,
          }}
        >
          돌아보기
        </Text>
      </View>
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

const MusicListLargeItem = () => {
  return (
    <View style={{ paddingHorizontal: 5 }}>
      <View
        style={{
          width: width / 2.4,
          height: height / 5,
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          zIndex: 5,
        }}
      >
        <MaterialIcons name="play-arrow" size={40} color="white" />
      </View>
      <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: width / 2.5, height: width / 2.5, borderRadius: 2 }}
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
