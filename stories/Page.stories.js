import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [
    (Story, options) => {
      return (
        <div
          style={{
            padding: '50px',
            backgroundColor: 'green',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export const LoggedOut = {
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '25px',
          backgroundColor: 'blue',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedIn = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', {
      name: /Log in/i,
    });
    await userEvent.click(loginButton);
  },
};
