import { memo, useState } from 'react';
import { Image } from '@chakra-ui/react';
import { Position, Handle, useReactFlow, type NodeProps, type Node } from '@xyflow/react';
import { Flex, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { TextBase } from '../../foundations';
import { ModalBase } from '../Modal';
import { Fade } from 'react-awesome-reveal';

function TextNode({ id, data }: NodeProps<Node<{
  validateLocator: any; text: string; name: string; placeholder?: string
}>>) {
  const { updateNodeData } = useReactFlow();

  const [inputValue, setInputValue] = useState(data.text || '');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = evt.target.value;
    setInputValue(newVal);
    updateNodeData(id, { text: newVal });
    if (data.validateLocator) {
      setIsValid(typeof inputValue === 'string');
    }
  };
  const info = <Flex cursor="pointer" border="1px" h="1.1rem" w="1.1rem" ml=".3rem" borderRadius="1rem" justifyContent="center" alignContent="center" flexWrap="wrap" _hover={{ boxShadow: "inset 0 0 0 150px rgba(0, 0, 0, 0.05)" }}><TextBase textStyle="button-select-info" fontSize="10pt">{`?`}</TextBase></Flex>
  
  return (
    <div>
      {id !== '1' && (
        <Handle type="target" position={Position.Top} />
      )}
      <Flex alignItems="baseline">{data.name}
      {id === '1' && <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Enter the website URL address with the links available for AI chat model training. For instance, https://example.com</TextBase><Fade cascade><Image src="https://images.prismic.io/syntia/aDuQ37h8WN-LVcoC_address.jpg?auto=format,compress"/></Fade></>}</Flex>} title={'Website address'} button={info} />}
      {id === '2' && <ModalBase content={<Flex textStyle="button-select" mb="1rem" flexDirection="column">{<><TextBase textStyle="project-descr" flexBasis="100%" mb="1rem">Enter the website link pattern visible on selected website for AI chat model training. The full link is visible on the left bottom corner by hovering cursor over the link on the website. For instance, entering pattern 'domains' from the link https://www.iana.org/domains/example to train AI only with the documents related to domains pages.</TextBase><Fade cascade><Image src="https://images.prismic.io/syntia/aDuQ17h8WN-LVcoB_hover.jpg?auto=format,compress"/></Fade></>}</Flex>} title={'Link pattern'} button={info} />}
      </Flex>
      <div>
        <FormControl isInvalid={!isValid}>
          <Input
            onChange={handleChange}
            placeholder={data.placeholder}
            background="white"
            size="sm"
            borderRadius="1rem"
          />
          {!isValid && data.validateLocator && (
          <FormErrorMessage>Invalid locator (CSS selector).</FormErrorMessage>
        )}
         </FormControl>
      </div>
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}

export default memo(TextNode);
