import { memo } from 'react';
import {
  Position,
  Handle,
  useNodeConnections,
  type NodeProps,
} from '@xyflow/react';

import { type MyNode } from './initialElements';
import { Box } from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

type IStatus = {
  text: string;
  success: boolean;
  loading?: boolean;
};

// Keyframe for animated background gradient
const animatedBg = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

function StatusNode({ id, data }: NodeProps<MyNode>) {
  const connections = useNodeConnections({ handleType: 'target' });
  const { success, loading, text } = data as IStatus;
  return (
    <Box
      padding="10px"
      borderRadius="6px"
      fontFamily='"Jost", sans-serif'
      fontWeight="500"
      color={success ? 'flow.success.color' : '#1e1e1e'}
      position="relative"
      zIndex={0}
      bg={loading ? 'transparent' : success ? 'flow.success.bg' : 'flow.default.bg'}
      sx={
        loading
          ? {
              background: 'linear-gradient(270deg,rgb(216, 250, 224),rgb(182, 225, 245), #f0fff4)',
              backgroundSize: '400% 400%',
              animation: `${animatedBg} 5s ease infinite`,
            }
          : {}
      }
    >
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={connections.length === 0}
        style={{ background: success ? '#78c878' : '#1e1e1e' }}
      />
      <div>{text || 'Documents found'}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ background: success ? '#78c878' : '#1e1e1e' }}
      />
    </Box>
  );
}

export default memo(StatusNode);
