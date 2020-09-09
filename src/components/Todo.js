import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export const Todo = ({ todo, removeTodo, openTodo }) => {
    return (
        <TouchableOpacity 
            activeOpacity={0.5} 
            onLongPress={() => removeTodo(todo.id)}
            onPress={() => openTodo(todo.id)}
        >
            <View style={styles.todo}>
                <Text>{todo.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    todo: {
        borderStyle: 'solid',
        borderColor: '#222',
        borderWidth: 1,
        padding: 10,
        marginTop: 10
    }
})