import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Keyboard } from 'react-native'
import { THEME } from '../theme'
import { AntDesign } from '@expo/vector-icons'
import { AppButton } from './ui/AppButton'

export const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState('')

    const onPress = () => {
        if(!value.trim()){
            return Alert.alert(
              'Строка пустая',
              'Пожалуйста напишите что-нибудь!'
            )
        }

        addTodo(value)
        setValue('')
        Keyboard.dismiss()
    }

    return (
        <View style={styles.addTodo}>
            <TextInput 
                style={styles.input}
                placeholder="Add Todo"
                value={value}
                onChangeText={text => setValue(text)}
            />

            <AppButton onPress={onPress}>
                <AntDesign name="pluscircleo" size={20} color='#fff'></AntDesign>
            </AppButton>
        </View>
    )
}

const styles = StyleSheet.create({
    addTodo: {
        flexDirection: 'row'
    },
    input: {
        paddingLeft: 10,
        height: 35,
        marginBottom: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        width: '79%',
        marginRight: 10
    },
})
