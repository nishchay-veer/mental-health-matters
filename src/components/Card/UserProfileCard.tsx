import {
    Avatar,
    Box,
    Flex,
    Grid,
    GridItem,
    Image,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { FC } from 'react';
import { UserFullData } from '../../../@types';

type Props = {
    user: UserFullData;
};

const UserProfileCard: FC<Props> = ({ user }) => {
    return (
        <Grid
            templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
            gap="22px"
            mt={8}
        >
            <GridItem colSpan={1}>
                <Box
                    display={'flex'}
                    h={'100%'}
                    flexDirection={'column'}
                    bg={useColorModeValue('white', '#242526')}
                    borderRadius={8}
                    justifyContent="center"
                    alignItems={'center'}
                    p={8}
                >
                    {user.image ? (
                        <Image
                            fontSize="2rem !important"
                            bg={'linear-gradient(310deg,#FF4331,#D31A50)'}
                            w="150px"
                            h="150px"
                            borderRadius={'100%'}
                            src={user.image}
                            alt={"User's profile picture"}
                        />
                    ) : (
                        <Avatar
                            color={'white'}
                            fontSize="2rem !important"
                            bg={'linear-gradient(310deg,#FF4331,#D31A50)'}
                            w="150px"
                            h="150px"
                            borderRadius={'100%'}
                        />
                    )}
                    <Flex direction="column" my={{ sm: '14px' }}>
                        <Text
                            fontSize={{ sm: 'lg', lg: '2.3rem' }}
                            color={useColorModeValue('black', 'white')}
                            fontWeight="bold"
                            ms={{ sm: '8px', md: '0px' }}
                            textAlign="center"
                        >
                            {user.name}
                        </Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 3 }}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    p={8}
                    borderRadius={8}
                    bg={useColorModeValue('white', '#242526')}
                >
                    <Box p="12px 5px" mb="12px">
                        <Text
                            bgGradient="linear-gradient(310deg,#FF4331,#D31A50)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            textTransform={'uppercase'}
                        >
                            GENERAL INFORMATION
                        </Text>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
                            mt={3}
                        >
                            This is general information about you.
                        </Text>
                    </Box>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={'#f8f9fa'}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={'gray.500'}
                            me="10px"
                            fontWeight={'semibold'}
                        >
                            Name
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={'semibold'}
                        >
                            {user.name}
                        </Text>
                    </Flex>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={'#f8f9fa'}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={'gray.500'}
                            me="10px"
                            fontWeight={'semibold'}
                        >
                            Email
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={'semibold'}
                        >
                            {user.email}
                        </Text>
                    </Flex>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={'#f8f9fa'}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={'gray.500'}
                            me="10px"
                            fontWeight={'semibold'}
                        >
                            Age
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={'semibold'}
                        >
                            {user.age}
                        </Text>
                    </Flex>
                    <Flex
                        align="center"
                        justifyContent="space-between"
                        mb="12px"
                        borderRadius={8}
                        bg={'#f8f9fa'}
                        p={3}
                    >
                        <Text
                            fontSize="md"
                            color={'gray.500'}
                            me="10px"
                            fontWeight={'semibold'}
                        >
                            Gender
                        </Text>
                        <Text
                            fontSize="md"
                            color="black"
                            fontWeight={'semibold'}
                        >
                            {user.gender}
                        </Text>
                    </Flex>
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 4 }} rowSpan={1}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    bg={useColorModeValue('white', '#242526')}
                    borderRadius={8}
                    justifyContent="center"
                    alignItems={'center'}
                    p={8}
                >
                    <Box p="12px 5px" mb="12px" w={'80%'}>
                        <Text
                            bgGradient="linear-gradient(310deg,#FF4331,#D31A50)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            textTransform={'uppercase'}
                        >
                            OTHER INFORMATION
                        </Text>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
                            mt={3}
                        >
                            This Quiz is conducted in order to understand your
                            metal health status. So we can treat you better!
                        </Text>
                        <Box>
                            {user.SurveyResults.map((survey) => (
                                <Flex
                                    key={survey.id}
                                    align="center"
                                    justifyContent="space-between"
                                    mb="12px"
                                    borderRadius={8}
                                    bg={'#f8f9fa'}
                                    p={3}
                                >
                                    <Text
                                        fontSize="md"
                                        color="black"
                                        fontWeight={'semibold'}
                                    >
                                        Type: {survey.Survey.name}
                                    </Text>
                                    <Text
                                        fontSize="md"
                                        color={'gray.500'}
                                        me="10px"
                                        fontWeight={'semibold'}
                                    >
                                        Date:{' '}
                                        {format(
                                            survey.createdAt,
                                            'dd MMM yyyy'
                                        )}
                                    </Text>
                                </Flex>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </GridItem>
            <GridItem colSpan={{ base: 1, md: 4 }}>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    bg={useColorModeValue('white', '#242526')}
                    borderRadius={8}
                    justifyContent="center"
                    alignItems={'center'}
                    p={8}
                >
                    <Box p="12px 5px" mb="12px" w={'80%'}>
                        <Text
                            bgGradient="linear-gradient(310deg,#FF4331,#D31A50)"
                            bgClip="text"
                            fontSize="2xl"
                            fontWeight="extrabold"
                            textTransform={'uppercase'}
                        >
                            Appointments
                        </Text>
                        <Text
                            fontSize={{ base: 'md', lg: 'lg' }}
                            color={'gray.500'}
                            mt={3}
                        >
                            List of Scheduled Appointments
                        </Text>
                        <Box>
                            {user.appointments.map((appointment) => (
                                <Flex
                                    key={appointment.id}
                                    align="center"
                                    justifyContent="space-between"
                                    mb="12px"
                                    borderRadius={8}
                                    bg={'#f8f9fa'}
                                    p={3}
                                >
                                    <Text
                                        fontSize="md"
                                        color={'gray.500'}
                                        me="10px"
                                        fontWeight={'semibold'}
                                    >
                                        Date:{' '}
                                        {format(
                                            appointment.date,
                                            'dd MMMM yyyy'
                                        )}
                                    </Text>
                                    <Text
                                        fontSize="md"
                                        color="black"
                                        fontWeight={'semibold'}
                                    >
                                        Time: {appointment.time}
                                    </Text>
                                </Flex>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </GridItem>
        </Grid>
    );
};

export default UserProfileCard;
