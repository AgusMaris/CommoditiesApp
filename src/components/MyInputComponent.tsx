import globalStyles from 'globalStyles'
import React from 'react'
import { View, Text, TextInput, ViewStyle } from 'react-native'
import styles from './MyInputComponent.style'

interface Props {
  onChangeText: (val: string) => void | undefined
  editable?: boolean
  onSubmitEditing?: () => void
  inputField: 'start' | 'end' | 'filter'
  value: string
  innerRef?: React.RefObject<TextInput> | undefined
  blurOnSubmit?: boolean
  returnKeyType?: 'done' | 'next' | 'go' | 'search' | 'send'
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'visible-password'
  textInputContainerStyles?: ViewStyle
}

const MyInputComponent = ({ onChangeText, inputField, textInputContainerStyles, innerRef, ...rest }: Props) => {
  return (
    <View style={[styles.textInputContainer, textInputContainerStyles]}>
      <View style={{ flex: 2 }}>
        <Text style={[globalStyles.montserratMedium, globalStyles.textM]}>
          {inputField.charAt(0).toUpperCase() + inputField.slice(1)}
        </Text>
      </View>
      <TextInput
        ref={innerRef}
        style={[styles.textInput, globalStyles.montserratMedium]}
        onChangeText={(e) => onChangeText(e)}
        {...rest}
      />
    </View>
  )
}
export default MyInputComponent
