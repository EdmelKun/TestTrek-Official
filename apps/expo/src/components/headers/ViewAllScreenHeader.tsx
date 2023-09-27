import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import LeftArrowIcon from "../../icons/LeftArrowIcon";
import SearchIcon from "../../icons/SearchIcon";
import type { FC } from "react";

import useGoBack from "../../hooks/useGoBack";

interface Props {
  title?: string;
}

const ViewAllScreenHeader: FC<Props> = (props) => {
  const goBack = useGoBack();
  return (
    <>
      <SafeAreaView>
        <View className="pt-8">
          <View className="mx-6 flex flex-row justify-between bg-white py-5">
            <TouchableOpacity
              className="flex flex-row items-center gap-2"
              onPress={goBack}
            >
              <LeftArrowIcon />
              <Text
                className="font-nunito-bold w-4/5 text-2xl leading-[38.40px] text-neutral-800"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {props.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex flex-row gap-4">
              <SearchIcon />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
export default ViewAllScreenHeader;
