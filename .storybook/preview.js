/** @type { import('@storybook/react').Preview } */
import { useEffect } from '@storybook/preview-api';
const preview = {
  decorators: [
    (Story, context) => {
      useEffect(() => {});

      return context.args?.user ? (
        <div
          style={{
            padding: '100px',
            backgroundColor: 'red',
          }}
        >
          <Story />
        </div>
      ) : (
        <Story />
      );
    },
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
