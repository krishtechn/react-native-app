import { View, Text } from 'react-native'
import React from 'react'
import { BottomSheet,Button } from '@rneui/themed'
import { useState,useRef } from 'react'
import RBSheet from "react-native-raw-bottom-sheet";

const BottomSheet = () => {
    const [visible,setVisible] = useState(false);
    const refRBSheet = useRef();
  return (
    <View>
      <Text>filtercards</Text>

      {/* <Button title="open Button sheet" onPress={()=>setVisible(true)}>open Button sheet</Button>

      <BottomSheet modalProps={{}} isVisible={visible} containerStyle={{backgroundColor:"#fff",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <Text>hello world</Text>
          <Button title="close" onPress={()=>setVisible(false)}></Button>
      </BottomSheet> */}
 <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
        <BottomSheets items={refRBSheet}/>
      </RBSheet>
    </View>
  )
}


const BottomSheets = ({items})=>{
    return(
        <View>
            <Text>hello world</Text>
        </View>
    )
}

export default BottomSheet