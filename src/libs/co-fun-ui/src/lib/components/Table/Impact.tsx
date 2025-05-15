import { Box, Stack, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useBreakpointValue } from '@chakra-ui/react';
import { TextBase } from '../../foundations';

export const ImpactTable = () => {

const isMobile = useBreakpointValue({ base: true, md: false });

const rows = [
  {
    impact: 'AI Agents optimize operations across industries',
    advantage: 'by competitive technology differentiator',
  },
  {
    impact: 'Eliminate manual routine tasks',
    advantage: 'freeing up time for strategic work',
  },
  {
    impact: 'Making sense of data when needed',
    advantage: 'by turning complex information into clear, actionable answers',
  },
  {
    impact: 'Solving integration gaps',
    advantage: 'enabling seamless interaction between different platforms',
  },
  {
    impact: 'AI chat agents go beyond static interfaces',
    advantage: 'modernizing platforms and reducing data acquired',
  },
  {
    impact: 'AI agents addresses business needs',
    advantage: 'without additional tools to adapt and learn',
  },
  {
    impact: 'Turning to technological co-discovery',
    advantage: 'accelerating sustainable and inclusive growth',
  },
];

return isMobile ? (
  <Stack spacing={6} mb="3rem">
    {rows.map((row, index) => (
      <Box key={index} border="1px solid #E2E8F0" borderRadius="md">
        <Box mb={2}>
          <TextBase textStyle="project-list-title" bg="#f3f5f5" pl={4}>Impact</TextBase>
          <TextBase textStyle="project-table-title" p={4}>{row.impact}</TextBase>
        </Box>
        <Box>
          <TextBase textStyle="project-list-title" bg="#e5f7e5" pl={4}>Advantage</TextBase>
          <TextBase textStyle="project-table-title" p={4}>{row.advantage}</TextBase>
        </Box>
      </Box>
    ))}
  </Stack>
) : (
  <TableContainer mb="3rem">
    <Table variant="simple">
      <Thead bg="#e5f7e5">
        <Tr>
          <Th textAlign="center">
            <TextBase textStyle="project-list-title" textAlign="center">Impact</TextBase>
          </Th>
          <Th textAlign="center">
            <TextBase textStyle="project-list-title" textAlign="center">Advantage</TextBase>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, index) => (
          <Tr key={index}>
            <Td textAlign="center">
              <TextBase textStyle="project-table-title" textAlign="center">{row.impact}</TextBase>
            </Td>
            <Td textAlign="center">
              <TextBase textStyle="project-table-title" textAlign="center">{row.advantage}</TextBase>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
);
}