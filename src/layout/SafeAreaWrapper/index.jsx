import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"


const SafeAreaWrapper = ({ children }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F9F9F9",
        flexDirection:"column",
        gap:25,
      }}
    >
      {children}
    </SafeAreaView>
  )
}

export default SafeAreaWrapper