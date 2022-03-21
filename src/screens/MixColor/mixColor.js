import React, {useState} from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { ColorPicker, fromHsv, toHsv } from 'react-native-color-picker'

export default function ExampleControlledVertical ({navigation}){
    // this function takes an integer and converts it in a 2 digit hexadecimal number
    var resColor = 0
    const [color1, setColor1] = useState('')
    const [color2, setColor2] = useState('')
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    // this function takes an array of 3 RGB integer values and converts this array into a CSS color, like this: #AAAAA
    function rgbToHex([r, g, b]) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    // the regex is separating the value into groups of 2 characters, these characters being letters from 'a' to 'f' and digits, that is to say hexadecimal numbers. 
    function convert(color) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
      //console.log(result.map(x=>parseInt('0x'+x)).slice(1, 4))
      return result.map(x=>parseInt('0x'+x)).slice(1, 4)
    }

    function handlerColor() {
      let [c1,c2]= [color1,color2].map(x=>convert(x))

      // this variable will be the array of the mixed color
      let cm = []
    
      // we take the middle of each RGB value between the two colors
      c1.forEach((c,i) => cm.push(parseInt((c1[i]+c2[i])/2)))
    
      // we convert the value into a hex value
      resColor = rgbToHex(cm)
      navigation.navigate("Answer", {answer: resColor});
    }

    return (
      <View style={{flex: 1, width: '100%'}}>
                        <View style={{
                          flex: 1,
                          width: '100%',
                          backgroundColor: '#d5182c',
                          justifyContent: 'center',
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                        }}>
                    <Text style={{ color: '#ffffff', fontSize: 20, marginLeft: 20, textAlign: 'left', fontWeight: 'bold' }}>Kết quả trộn màu</Text>
                </View>
              <View style={{flex: 4, padding: 45, backgroundColor: '#ffffff'}}>
        <ColorPicker
          onColorChange={color => {
            var x = fromHsv(color)
            setColor1(x)
          }}
          onColorSelected={color => {
            alert(`First Color selected: ${color}`
          )}}
          style={{flex: 1}}
        />
        <ColorPicker
          onColorChange={color => {
            var x = fromHsv(color)
            setColor2(x)
          }}
          onColorSelected={color => {
            alert(`Second Color selected: ${color}`)
          }}
          style={{flex: 1}}
        />
        <Button
          title="Trộn màu"
          onPress={() => handlerColor()}
        />
      </View>
      </View>

    )
  }

