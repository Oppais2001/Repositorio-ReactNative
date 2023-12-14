import React, { useState } from 'react';
import { Button, View, Image } from 'react-native';

export default function App() {
  const [image, setImage] = useState(require('./assets/KuronoTraje.png'));

  const changeImage = () => {
    if(image==(require('./assets/KuronoTraje.png'))){
      setImage(require('./assets/KuronoUniforme.png'));
    }else{
      setImage(require('./assets/KuronoTraje.png'));
    }
  };

  return (
    <View>
      <Image source={image} style={{ position:"absolute", top: -10 }} />
      <Button title="Cambiar imagen" onPress={changeImage} />
    </View>
  );
}
