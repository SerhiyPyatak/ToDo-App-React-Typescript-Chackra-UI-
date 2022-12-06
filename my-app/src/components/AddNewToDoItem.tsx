import React from 'react';
import { HStack, Box, Button, useColorModeValue } from '@chakra-ui/react'

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 * 
 */
const AddNewToDoItem = ({lightBgColor, darkBgColor}: {lightBgColor: string, darkBgColor: string}) => {
	const bgColor = useColorModeValue(lightBgColor, darkBgColor);
	return <Box bg={bgColor} >
		<HStack>
			<Button>ADD</Button>
		</HStack>:
	</Box>
}


// #endregion

export default AddNewToDoItem;