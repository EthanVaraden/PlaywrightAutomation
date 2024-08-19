import { Text, View } from '@lightningtv/solid';
import { createSignal } from 'solid-js';

const ButtonStyle={
  width:100,
  height:100,
  color:0x00ff00ff,
  scale:1,
  focus:{
    scale:1.4,
    color:0x0000ffff
  }
}

const HomePage = () => {

  const [setText,getText] = createSignal('HELLO')
  let left,right
  return (
    <View width={1920} height={1080} color={0xffff00ff}>
      <View x={700} y={400} width={400} height={400} color={0xff0000ff}>
        <View x={50} y={200} style={ButtonStyle} autofocus onEnter={()=>{setText('BYE')}} onRight={()=>{right.setFocus()}} ref={left}>
          <Text fontSize={20}>{getText()}</Text>
        </View>
        <View x={250} y={200} style={ButtonStyle} autofocus onEnter={()=>{setText('HI')}} onLeft={()=>{left.setFocus()}} ref={right}>
          <Text fontSize={42}>{getText()}</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
