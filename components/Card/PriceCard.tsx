import { Box, useColorModeValue } from 'native-base';
import { FunctionComponent, ReactNode } from 'react';

const PriceCard: FunctionComponent = ({
    children,
}: {
    children: ReactNode;
}) => {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}
        >
            {children}
        </Box>
    );
};

export default PriceCard;
