import { InputGroup, Input as InputBase, InputRightElement, Flex, Box, FlexProps, FormControl } from "@chakra-ui/react"
import { SendIcon, TextBase } from "../../foundations"
import { useForm } from "react-hook-form"
import { useEffect } from "react"

export const Input = ({ suggestions, theme, disabled, onSubmit, onClickSuggestion, ...props }: { disabled: boolean; theme: string; suggestions?: { answer: string }[] | null} & { onSubmit: (data: string) => void; onClickSuggestion?: (i: number) => void} & FlexProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()
  useEffect(() => {
    if (errors?.length) {
      console.log(errors)
    }
  }, [errors])
  return (
    <Box mb=".5rem" {...props}>
      {suggestions && <Flex justifyContent="flex-end">{suggestions.map((suggestion, i) => <Box key={`suggestion-${i}`} onClick={() => onClickSuggestion?.(i)} bg={`chat.suggestions.${theme}`} p="0.75rem 1rem" borderRadius="1.25rem 1.25rem .5rem 1.25rem" m=".5rem .5rem .5rem 0" cursor="pointer"><TextBase textStyle="chat" color="primary.default">{suggestion.answer}</TextBase></Box>)}</Flex>}
      <form onSubmit={handleSubmit((data) => { reset(); return onSubmit(data.chat)} )}>
      <FormControl>
      <InputGroup>
        <InputBase disabled={disabled} {...register("chat")} variant="unstyled" padding=".75rem" border="1px" borderColor={`chat.authorBg.${theme}`} size="lg" placeholder='Message' focusBorderColor={`chat.authorBg.${theme}`} borderRadius="2rem" _placeholder={{ color: `chat.authorBg.${theme}`, fontFamily: '"Roboto", sans-serif;' }} _focus={{ border: '2px', borderColor: 'navigation.dark'}} />
        {!disabled && <InputRightElement padding="1.75rem" cursor="pointer">
          <SendIcon p="0 .1rem .2rem" fill={`chat.authorBg.${theme}`} onClick={handleSubmit((data) => { reset(); return onSubmit(data.chat)} )}/>
        </InputRightElement>}
      </InputGroup>
      </FormControl>
      </form>
    </Box>
  )
}