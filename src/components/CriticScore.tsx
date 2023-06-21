import { Badge } from '@chakra-ui/react';

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {
    const color = score > 90 ? 'green' : score > 80 ? 'skyblue' : '';

    return (
        // color vs colorScheme
        // color is only text color, meanwhile colorScheme is everything e.g. bg-color, border-color, ... ... ... (EXCEPT text-color)
        <Badge colorScheme={color} fontSize='14px' paddingX={2} borderRadius={1}>{score}</Badge>
    );
};

export default CriticScore;