import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";


const l3Animation = keyframes`
  20% { background-position: 0% 0%, 50% 50%, 100% 50% }
  40% { background-position: 0% 100%, 50% 0%, 100% 50% }
  60% { background-position: 0% 50%, 50% 100%, 100% 0% }
  80% { background-position: 0% 50%, 50% 50%, 100% 100% }
`;

export const InputLoader = () => {
  return (
    <Box
      width="30px"
      aspectRatio="2"
      bgImage="
        radial-gradient(circle closest-side, #e5cded 90%, transparent),
        radial-gradient(circle closest-side, #e5cded 90%, transparent),
        radial-gradient(circle closest-side, #e5cded 90%, transparent)
      "
      bgRepeat="no-repeat"
      bgPosition="0% 50%, 50% 50%, 100% 50%"
      bgSize="calc(100% / 3) 50%"
      animation={`${l3Animation} 1s infinite linear`}
    />
  );
};

