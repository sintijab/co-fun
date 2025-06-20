import { type Node, type Edge } from '@xyflow/react';

export type TextNode = Node<{ text: string; name: string; placeholder?: string; validateLocator?: boolean }, 'text'>;
export type ResultNode = Node<{}, 'result'>;
export type StatusNode = Node<{ text: string; success?: boolean; loading?: boolean }, 'status'>;
export type MyNode = TextNode | ResultNode | StatusNode;

export function isTextNode(
  node: any,
): node is TextNode | StatusNode | undefined {
  return !node ? false : node.type === 'text' || node.type === 'status';
}
