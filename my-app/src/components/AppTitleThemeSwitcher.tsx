import React from 'react';
import {Flex, HStack, useColorModeValue} from '@chakra-ui/react';
import { ColorModeSwitcher } from "../ColorModeSwitcher"

// #region constants
// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * Background color of this component will be inherit from light/dark mode global defaults
 * Font colors for light/dark mode are passing via lightFontColor/darkFontColor props respectively
 */
const AppTitleThemeSwitcher = ({lightFontColor, darkFontColor, children}: {lightFontColor: string, darkFontColor: string, children: JSX.Element | JSX.Element[]}) => {
	const color = useColorModeValue(lightFontColor, darkFontColor);

	return (   
	<Flex 
	w='full'
	color={color}
	justify='flex-end'
	align='center'>
		<HStack mx='auto'>
			{children}
		</HStack>
		<ColorModeSwitcher />
	</Flex>
	);
}

// #endregion

export default AppTitleThemeSwitcher;