import { useCallback, useEffect, useRef } from 'react';
import {
  ReactFlow,
  Controls,
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  type Edge,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import TextNode from './TextNode';
import ResultNode from './ResultNode';
import StatusNode from './StatusNode';
import CustomEdge from './CustomEdge';
import { type MyNode } from './initialElements';

import { Flex } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../../store';
import { listenToProgress, setScrapeParams, triggerScrape } from '../../../../../../slices/getProgress';

const nodeTypes: Record<string, React.ComponentType<any>> = {
  text: TextNode,
  result: ResultNode,
  status: StatusNode,
};

const edgeTypes: Record<string, any> = {
  'custom-edge': CustomEdge,
};

const COLLECTION_READY = 'Ready for collection';
const ANALYSIS_READY = 'Ready for analysis';

const initNodes: MyNode[] = [
  {
    id: '1',
    type: 'text',
    data: { text: '', placeholder: 'https://example.com', name: 'Enter website', validateLocator: true },
    position: { x: -30, y: 0 },
  },
  {
    id: '2',
    type: 'text',
    data: { text: '', placeholder: '/domains/', name: 'Enter link pattern', validateLocator: true },
    position: { x: 30, y: 80 },
  },
  {
    id: '3',
    type: 'status',
    data: { text: COLLECTION_READY },
    position: { x: -40, y: 200 },
  },
  {
    id: '4',
    type: 'status',
    data: { text: 'Ready for analysis' },
    position: { x: 40, y: 320 },
  },
  {
    id: '5',
    type: 'result',
    data: {},
    position: { x: -30, y: 440 },
  },
];

const initEdges: Edge[] = [
  {
    id: '1-2',
    source: '1',
    target: '2',
  },
  {
    id: '2-3',
    source: '2',
    target: '3',
    label: 'Find documents',
    type: 'custom-edge',
    animated: false,
  },
  {
    id: '3-4',
    source: '3',
    target: '4',
    label: 'Collect data',
    type: 'custom-edge',
    animated: false,
  },
  {
    id: '4-5',
    source: '4',
    target: '5',
    label: 'Format embeddings',
    type: 'custom-edge',
    animated: false,
  },
];

const rfStyle = {
  backgroundColor: '#FFFFFF'
  // backgroundColor: '#B8CEFF',
};

const edgeOptions = {
  animated: false,
  style: { stroke: 'primary.default' },
};

const connectionLineStyle = { stroke: 'black' };

const CustomNodeFlow = ({ data }: { data?: { id: string, status: any}[]}) => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);
  const dispatch = useDispatch<AppDispatch>();
  const { discovered, total, processed, loading, error, baseUrl, link } = useSelector((state: RootState) => state.progress);
  const controllerRef = useRef<AbortController | null>(null);
  useEffect(() => {
    if (!discovered) return;
    const updatedNodes = nodes.map(node => {
      if (node.id === '3' && node.data && 'text' in node.data) {
        return {
          ...node,
          data: {
            ...node.data,
            text: `${COLLECTION_READY}: ${discovered}`,
            success: !!processed,
            loading: !total
          }
        };
      }
      return node;
    }) as MyNode[];
  
    setNodes(updatedNodes);
  }, [discovered, nodes]);

  useEffect(() => {
    if (!processed) return;
  
    const updatedNodes = nodes.map(node => {
      if (node.id === '4' && node.data && 'text' in node.data) {
        return {
          ...node,
          data: {
            ...node.data,
            text: `${ANALYSIS_READY}: ${processed} / ${total}`,
            success: !!total && total === processed,
            loading: !!total && total !== processed,
          }
        };
      }
      return node;
    }) as MyNode[];
    setNodes(updatedNodes);

    const updatedEdges = edges.map(edge => {
        return {
          ...edge,
          animated: total === processed ? false : true,
          disabled: total === processed ? false : true,
        };
    }) as Edge[];
    setEdges(updatedEdges)
  }, [processed, total]);

  const handleNodesChange = (changes: any[]) => {
    changes.forEach(change => {
      if (change.type === 'replace' && change.id) {
        const updatedNode = nodes.find(n => n.id === change.id);
        const newText = change.item?.data?.text;
  
        if (updatedNode?.data && typeof newText === 'string') {
          // @ts-ignore
          const currentText = updatedNode.data.text;
          if (newText !== currentText) {
            if (change.id === '1') {
              dispatch(setScrapeParams({ baseUrl: newText }));
            } else if (change.id === '2') {
              dispatch(setScrapeParams({ link: newText }));
            }
          }
        }
      }
    });
  
    onNodesChange(changes);
  };

  const handleEdgesChange = useCallback((changes: any[]) => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
    const controller = new AbortController();
    controllerRef.current = controller;
  
    changes.forEach(change => {
      if (change.type === 'remove') return;
      if (change.id === '2-3' && baseUrl && link && change.type ==='select') {
        const updatedEdges = edges.map(edge => {
            return {
              ...edge,
              animated: true,
              disabled: true,
              style: { ...edge.style, stroke: '#78c878', strokeWidth: '2px' },
            };
        }) as Edge[];
        setEdges(updatedEdges)
        dispatch(triggerScrape({ baseUrl, link }));
        dispatch(listenToProgress());
        const updatedNodes = nodes.map(node => {
          return {
            ...node,
            data: {
              ...node.data,
              loading: true
            }
          };
      }) as MyNode[];
    
      setNodes(updatedNodes);
      }
    });
  
    onEdgesChange(changes);
  }, [dispatch, onEdgesChange, baseUrl, link]);
  

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges],
  );
  const isMobile = window.innerWidth < 768;

  return (
    <Flex width={['100vw', '100vw']} height={['20rem', '40rem']} marginLeft={["0", "-25%"]} justifyContent="center">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: isMobile ? 0 : 0.3 }}
        style={rfStyle}
        defaultEdgeOptions={edgeOptions}
        connectionLineStyle={connectionLineStyle}
      >
        <Controls />
        <Background />
      </ReactFlow>
    </Flex>
  );
};

export { CustomNodeFlow };
