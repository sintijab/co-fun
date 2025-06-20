import React from 'react';
import {
  BaseEdge,
  EdgeLabelRenderer,
  getBezierPath,
  useReactFlow,
} from '@xyflow/react';
import { Button } from '@chakra-ui/react';
import { ButtonPrimary } from '../../foundations';

interface EdgeProps {
  id: string;
  disabled: boolean;
  label: string;
  sourceX: number;
  sourceY: number;
  targetX: number;
  targetY: number;
  style: any;
}

export default function CustomEdge({
  id,
  disabled,
  label,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
}: EdgeProps) {
  const { getEdge } = useReactFlow();
  const edgeProps: any = getEdge(id);

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge id={id} path={edgePath} style={{
        stroke: style.stroke,
        strokeWidth: style.strokeWidth,
      }}/>
      {!!label && <EdgeLabelRenderer>
        <ButtonPrimary
          variant="outline"
          disabled={edgeProps.disabled}
          background='primary.white'
          _disabled={
            {
              backgroundColor: "gray.50",
              borderColor: "gray.100",
              color: "gray.400",
              cursor: 'not-allowed'
            }
          }
          size="xs"
          fontFamily='"Jost", sans-serif'
          borderColor='primary.default'
          border="1px"
          color='primary.default'
          padding=".75rem!important"
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
            pointerEvents: 'all',
          }}
        >
          {label}
        </ButtonPrimary>
      </EdgeLabelRenderer>}
    </>
  );
}
