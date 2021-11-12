const navigationStack = `
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'

export type INavigationStackRoutes = {
  Home: undefined
}

const { Navigator, Screen } = createStackNavigator<INavigationStackRoutes>()

export default function NavigationStack() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
`.trimStart()

const homeScreen = `
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { INavigationStackRoutes } from '../../navigationStack'
import Goodluck from '../../components/Goodluck'

export type IHome =
  StackScreenProps<INavigationStackRoutes, 'Home'>

export default function Home({ navigation }: IHome) {
  return ( <Goodluck /> )
}
`.trimStart()

module.exports = {
  navigationStack,
  homeScreen
}
