import type { Meta, StoryObj } from '@storybook/react';
import { WordCloud as WordCloudBase } from '@co-fun/ui';

const meta: Meta = {
  component: WordCloudBase,
};
export default meta;
type Story = StoryObj<typeof WordCloudBase>;

export const WordCloud: Story = {
  args: {}
}
