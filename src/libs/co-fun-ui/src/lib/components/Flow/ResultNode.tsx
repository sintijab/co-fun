import { memo } from 'react';
import {
  Handle,
  Position,
  useNodeConnections,
  useNodesData,
} from '@xyflow/react';
import { isTextNode, type MyNode } from './initialElements';

function ResultNode() {
  const connections = useNodeConnections({
    handleType: 'target',
  });

  return (
    <div>
      <Handle type="target" position={Position.Top} />
      <div>
        Ready for AI training
      </div>
    </div>
  );
}

export default memo(ResultNode);
