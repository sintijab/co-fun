import { Box, Stack, Table, Thead, Tbody, Tr, Th, Td, TableContainer, useBreakpointValue } from '@chakra-ui/react';
import { TextBase } from '../../foundations';

export const ImpactTable = () => {

const isMobile = useBreakpointValue({ base: true, md: false });

const rows = [
  {
    impact: 'Eliminate manual routine tasks',
    advantage: 'Freeing up your team to focus on high-value, strategic work',
  },
  {
    impact: 'Making sense of complex data',
    advantage: 'Delivering clear, actionable insights exactly when you need them',
  },
  {
    impact: 'Solving integration gaps',
    advantage: 'enabling seamless interaction between different platforms',
  },
  {
    impact: 'Bridge integration gaps',
    advantage: 'Connecting tools, platforms, and systems for seamless workflows',
  },
  {
    impact: 'Modernize user experience',
    advantage: 'Replacing outdated interfaces with responsive, intelligent chat agents',
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