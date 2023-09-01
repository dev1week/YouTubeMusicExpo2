import React from "react";
import { View, Text, Image, ScrollView, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");
export const MusicListSmall = () => {
  return (
    <View>
      <Title />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      >
        {[...Array(3)].map((val, idx) => {
          return (
            <View key={idx} style={{ width: width * 0.92 }}>
              {[...Array(4)].map((value, index) => {
                return <MusicListSmallItem key={index} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export const MusicListSmallItem = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
      }}
    >
      <View style={{ flexDirection: "row", flex: 1, flextShrink: 0 }}>
        <Image
          source={{ uri: "https://picsum.photos/50" }}
          style={{ width: 40, height: 40, borderRadius: 2 }}
        />
        <View style={{ marginLeft: 14, justifyContent: "center", flex: 1 }}>
          <Text style={{ color: "white", fontSize: 12, marginBottom: 4 }}>
            음악장르
          </Text>
          <Text style={{ color: "white" }} numberOfLines={1}>
            {" "}
            dafjkadfjlkasjflasjfdlsajfkasjdfkljaddddddddddsfkjasf{" "}
          </Text>
        </View>
      </View>
      <View style={{ padding: 10, flexShrink: 1 }}>
        <MaterialCommunityIcons name="dots-vertical" size={12} color="white" />
      </View>
    </View>
  );
};

const Title = () => {
  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
      <Text style={{ fontSize: 13, color: "white", fontWeight: "200" }}>
        이 노래로 뮤직스테이션 시작하기
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 28, color: "white" }}>
        빠른 선곡
      </Text>
    </View>
  );
};
