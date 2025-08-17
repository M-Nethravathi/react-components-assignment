import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Basic: Story = {
  args: {
    data: [
      { id: 1, name: 'John', age: 25 },
      { id: 2, name: 'Jane', age: 30 },
    ],
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'age', header: 'Age' },
    ],
  },
};