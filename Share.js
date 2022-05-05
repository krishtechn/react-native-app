import { View, Text,Button,Share,Image } from 'react-native'
import React from 'react';

const Shares = () => {
  let desc = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. At culpa impedit quam obcaecati nemo assumenda vero autem rerum, porro, similique, eum ex earum qui dolorem aliquid fuga aliquam consectetur alias totam voluptatum sint quisquam laudantium modi commodi! Perferendis sequi quis cum id atque aut omnis. Quia dolor soluta odio culpa reiciendis voluptatem, esse debitis. Aspernatur assumenda blanditiis pariatur beatae culpa sapiente dolores eum natus ducimus sunt eaque possimus omnis molestias, suscipit ab exercitationem incidunt dolorem ratione obcaecati ad vero odio officia consequatur veritatis. Error voluptatem accusamus nulla velit sint, eos ab provident quasi, dicta corrupti, placeat consequuntur tempora cum voluptas.";
  const onShare =()=>{
     Share.share({
       message:desc
     })
     if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        alert("text send")
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      alert("send dismissed")
    }
  };
  return (
      // <WebViews />
      // <Todosapp />
      // <Transformpropery />
      <View style={{ marginTop: 50 }}>
        <Text>{desc}</Text>
        {/* <Image source={{uri:image}} style={{width:"100%",height:undefined,aspectRatio:1}}/> */}
      <Button onPress={onShare} title="Share" />
      </View>
      )
}

export default Shares