/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { AntDesign, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { DarkTheme, DefaultTheme, NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { ColorSchemeName, Pressable } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import ModalScreen from '@/screens/ModalScreen'
import NotFoundScreen from '@/screens/NotFoundScreen'
import TabMapScreen from '@/screens/TabMapScreen'
import TabAccountScreen from '@/screens/TabAccountScreen'
import { RootDrawerParamList, RootStackParamList, RootTabParamList, RootTabScreenProps } from '@types'
import LinkingConfiguration from './LinkingConfiguration'

import LoginScreen from '@/screens/LoginScreen'
import RegisterScreen from '@/screens/RegisterScreen'
import ResetPasswordScreen from '@/screens/ResetPasswordScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import AboutScreen from '@/screens/AboutScreen'
import ExportScreen from '@/screens/ExportScreen'
import FormDataScreen from '@/screens/FormDataScreen'
import SurveyListScreen from '@/screens/SurveyListScreen/SurveyListScreen'
import SurveyDetailScreen from '@/screens/SurveyDetailScreen'
import SurveyFormScreen from '@/screens/SurveyFormScreen'
import { Icon, IconButton } from 'native-base'
import SettingScreen from '@/screens/SettingScreen'
import FeedbackScreen from '@/screens/FeedbackScreen'
import FeatureFormScreen from '@/screens/FeatureFormScreen'

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function RootNavigator() {
  const navigator = useNavigation()

  return (
    <Stack.Navigator
      initialRouteName="SurveyList"
    >
      {/* Auth */}
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: true }} />
      <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{ headerShown: true }} />
      {/* Survey Manager */}
      <Stack.Screen name="SurveyList" component={SurveyListScreen} options={{
        headerShown: true,
        title: 'Survey Manager',
        headerRight: () => (
          <>
            <IconButton
              onPress={() => navigator.navigate('Account')}
              icon={<MaterialIcons name="account-box" size={24} color="black" />}
              color="white" />
            <IconButton
              onPress={() => navigator.navigate('Login')}
              icon={<AntDesign name="login" size={24} color="black" />}
              color="white" />
          </>
        )
      }} />

      <Stack.Screen name="SurveyDetail" component={SurveyDetailScreen} options={{
        headerShown: true,
        title: 'Survey Detail'
      }} />

      <Stack.Screen name="SurveyForm" component={SurveyFormScreen} options={{
        headerShown: true,
        title: 'Create/ Update Survey'
      }} />

      {/* Survey */}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{
        headerShown: false,
        title: 'Survey'
      }} />

      <Stack.Screen name="FeatureForm" component={FeatureFormScreen} options={{
        headerShown: true,
        title: 'Collect/ Edit Feature'
      }} />

      <Stack.Screen name="Export" component={ExportScreen} options={{ headerShown: true }} />
      <Stack.Screen name="FormData" component={FormDataScreen} options={{
        headerShown: true,
        title: 'Form Data'
      }} />

      {/* Account */}
      <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Account" component={TabAccountScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Feedback" component={FeedbackScreen} options={{ headerShown: true }} />

      {/* Other */}
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation()

  return (
    <BottomTab.Navigator
      initialRouteName="TabMap"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabMap"
        component={TabMapScreen}
        options={({ navigation }: RootTabScreenProps<'TabMap'>) => ({
          title: 'Map',
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => <TabBarIcon name="map" color={color} />,
          headerLeft: () => (
            <IconButton
              onPress={() => navigation.navigate('SurveyList')}
              icon={<Ionicons name="arrow-back-outline" size={24} color="black" />}
              color="white" />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('FormData')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabAccount"
        component={TabAccountScreen}
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
