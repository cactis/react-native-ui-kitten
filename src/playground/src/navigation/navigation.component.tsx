import React from 'react';
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  AvatarContainer,
  BottomNavigationContainer,
  ButtonContainer,
  ButtonGroupContainer,
  CheckBoxContainer,
  DrawerContainer,
  Home,
  InputContainer,
  LayoutContainer,
  ListContainer,
  OverflowMenuContainer,
  PopoverContainer,
  RadioContainer,
  RadioGroupContainer,
  SampleContainer,
  CalendarContainer,
  ModalContainer,
  SpinnerContainer,
  IconContainer,
  DropdownContainer,
  TabViewContainer,
  TextContainer,
  ToggleContainer,
  TooltipContainer,
  TopNavigationContainer,
} from '../ui/screen';
import { DrawerNavigation } from './drawerNavigation.component';

export interface RouteType {
  name: string;
}

const routes: NavigationRouteConfigMap = {
  ['Home']: Home,
  ['Avatar']: AvatarContainer,
  ['Bottom Navigation']: BottomNavigationContainer,
  ['Button']: ButtonContainer,
  ['Button Group']: ButtonGroupContainer,
  ['Calendar']: CalendarContainer,
  ['Checkbox']: CheckBoxContainer,
  ['Icon']: IconContainer,
  ['Dropdown']: DropdownContainer,
  ['Drawer']: DrawerContainer,
  ['Input']: InputContainer,
  ['Layout']: LayoutContainer,
  ['List']: ListContainer,
  ['Modal']: ModalContainer,
  ['Popover']: PopoverContainer,
  ['Radio']: RadioContainer,
  ['Radio Group']: RadioGroupContainer,
  ['Spinner']: SpinnerContainer,
  ['Tab View']: TabViewContainer,
  ['Tooltip']: TooltipContainer,
  ['Text']: TextContainer,
  ['Toggle']: ToggleContainer,
  ['Top Navigation']: TopNavigationContainer,
  ['Overflow Menu']: OverflowMenuContainer,
  ['Sample']: SampleContainer,
};

const MenuNavigator = createStackNavigator(routes, {
  initialRouteName: 'Home',
  headerMode: 'screen',
});

const DrawerNavigator = createDrawerNavigator({
  ...routes,
  ['Home']: MenuNavigator,
}, {
  contentComponent: DrawerNavigation,
  initialRouteName: 'Home',
});

export const Router: any = createAppContainer(DrawerNavigator);
