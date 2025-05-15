import { Box, Text, VStack, Stack, Switch, CheckboxState } from "@chakra-ui/react";
import { Link } from "../../foundations";
import { ChangeEvent, useState } from "react";

const PricingTable = () => {
  const [hasMonthlyPrice, setMonthlyPrice] = useState<boolean>(true);
  const pricingData = [
    {
      title: "Creators",
      label: 'starter',
      price: 'FREE',
      features: [
        "Access to AI Academy",
        "Community support",
        "Insights from latest projects",
        "Access to event recordings",
        "Invitation to webinars",
        "Limited Support",
      ],
    },
    {
      title: "Business",
      label: 'most popular',
      price: 'Contact Us',
      features: [
        "Creators features plus:",
        "Weekly AI courses",
        "FREE pass to webinars",
        "NEW partnerships & initiatives",
        "Weekly marketing insights",
        "Personalized AI features",
        "Invitation to all events and promotions",
        "Basic Support",
      ],
    },
    {
      title: "Unlimited",
      label: 'exclusive',
      price: "Contact Us",
      features: [
        "Hire us for your projects",
        "NEW AI features upon request",
        "Available worldwide",
        "Access to all plans",
        "Premium Support",
      ],
    },
  ];

  const isChecked = (e: ChangeEvent<HTMLInputElement>) => {
    setMonthlyPrice(!e.target.checked)
  }
  
    return (
      <Box p={[0, 10]} fontFamily="gingerBold, sans-serif" w={["95%","unset"]}>
        <Stack direction={["column", "row"]} spacing={6} justify="center" alignItems="baseline">
          {pricingData.map((plan, index) => (
            <Box
              key={index}
              bg="white"
              borderRadius="md"
              overflow="hidden"
              textAlign="center"
              w={["100%","300px"]}
              boxShadow="lg"
              transition="all 0.3s ease-in-out"
              _hover={{ transform: "scale(1.05)" }}
            >
              <Box position="relative" bg="#2ECC71" py={4}>
                <Text
                  fontSize="md"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="white"
                  zIndex={1}
                  position="relative"
                  pb=".5rem"
                >
                 {plan.label}
                </Text>
                <Box
                  position="absolute"
                  bottom={0}
                  left={0}
                  w={0}
                  h={0}
                  borderBottom="50px solid white"
                  borderLeft="600px solid transparent"
                ></Box>
              </Box>
              <Box py={6}>
                <Text fontSize="4xl" fontWeight="light" color="#414141">
                {plan.title}
                </Text>
                {plan.secondPrice && <Box pb=".3rem"><Switch size="lg" sx={{ 'span.chakra-switch__track:not([data-checked])': { backgroundColor: 'primary.green' } }} colorScheme='green' onChange={isChecked} /></Box>}
                {hasMonthlyPrice && <Box fontSize="sm">
                  <s>
                  {typeof plan.secondPrice === 'number' && <Text as="span" fontSize="lg" verticalAlign="middle">
                    $
                  </Text>}
                  {plan.secondPrice}
                  {typeof plan.secondPrice === 'number' && <Text
                    as="span"
                    fontWeight="medium"
                    verticalAlign="middle"
                    color="#414141"
                  >
                    /MON &#160;
                  </Text>}
                  </s>
                  </Box>}
                {typeof plan.price === 'number' && <Text as="span" fontSize="lg" verticalAlign="middle">
                    $
                  </Text>}
                  {hasMonthlyPrice ? plan.price : typeof plan.secondPrice === 'number' ? plan.secondPrice : plan.price}
                  {typeof plan.price === 'number' && <Text
                    as="span"
                    fontSize="lg"
                    fontWeight="medium"
                    verticalAlign="middle"
                    color="#414141"
                    pr=".5rem"
                  >
                    /MON
                  </Text>}
                  <Box>
                  {typeof plan.secondPrice === 'number' && <Text
                    as="span"
                    fontSize="sm"
                    fontWeight="medium"
                    verticalAlign="middle"
                    color="#414141"
                  >
                   { `billed ${hasMonthlyPrice ? 'annually' : 'monthly'}`}
                  </Text>}
                  </Box>
              </Box>
              <VStack align="stretch" spacing={2} px={4} pb={4} borderTop="1px solid #e4e4e4" fontFamily='Jost' p="1rem">
                {plan.features.map((feature, i) => (
                  <Text key={i} fontSize="md" color="#a7a7a7">
                    {feature}
                  </Text>
                ))}
              </VStack>
              <Box py={4} borderTop="1px solid #e4e4e4">
                <Link
                  variant="link"
                  size="sm"
                  href="https://cofun.digital/contact"
                  fontFamily="Poppins"
                >
                  Let's talk
                </Link>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    );
  };
  
  export default PricingTable;
  