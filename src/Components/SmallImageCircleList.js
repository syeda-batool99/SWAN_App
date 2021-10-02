import React from 'react'
import { FlatList, Image } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import FacePile from 'react-native-face-pile'

const SmallImageCircleList = () => {

const FACES = [
  {
    id: 0,
    imageUrl: 'https://i.picsum.photos/id/966/200/300.jpg?hmac=vBALR2x0cV-keVNLecwjd8ZluSHv17AHDvpiYjBqar0',
  },
  {
    id: 1,
    imageUrl: 'https://i.picsum.photos/id/966/200/300.jpg?hmac=vBALR2x0cV-keVNLecwjd8ZluSHv17AHDvpiYjBqar0',
  },
  {
    id: 2,
    imageUrl: 'https://i.picsum.photos/id/966/200/300.jpg?hmac=vBALR2x0cV-keVNLecwjd8ZluSHv17AHDvpiYjBqar0',
  },
  {
    id: 3,
    imageUrl: 'https://i.picsum.photos/id/966/200/300.jpg?hmac=vBALR2x0cV-keVNLecwjd8ZluSHv17AHDvpiYjBqar0',
  },
  {
    id: 4,
    imageUrl: 'https://i.picsum.photos/id/966/200/300.jpg?hmac=vBALR2x0cV-keVNLecwjd8ZluSHv17AHDvpiYjBqar0',
  }
]

    return (
        <View>
            <FacePile numFaces={3} faces={FACES} />
        </View>
    )
}

export default SmallImageCircleList

const styles = StyleSheet.create({
    Img:{
        height:35,
        width:35,
    }
})
