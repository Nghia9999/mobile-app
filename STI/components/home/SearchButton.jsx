import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Button, SearchBar } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
const SearchButton = () => {
  const navigation = useNavigation();
  return (
    <View >
          <Button
          title={"Tìm kiếm ..."}
          icon={{
            name: 'search',
            type: 'font-awesome',
            size: 17,
            color: '#888'
          }
          }
          titleStyle={{
            color:'#999',
            marginLeft:5
          }}
          buttonStyle={{
            borderRadius:10,
            justifyContent: 'flex-start',
            backgroundColor: 'white'
          }}
          onPress={()=>navigation.navigate('Search')}

          />

    </View>
  )
}

export default SearchButton