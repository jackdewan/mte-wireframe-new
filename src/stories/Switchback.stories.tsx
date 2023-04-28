import { Meta, StoryObj } from "@storybook/react";

import { Switchback } from "./Switchback";

const meta: Meta<typeof Switchback> = {
  title: "Components/Switchback",
  component: Switchback,
};

export default meta;
type Story = StoryObj<typeof Switchback>;

export const SwitchbackRight: Story = {
  args: {
    title: "Lorem ipsum dolor sit amet",
    subtitle:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem, accusantium doloremque laudantium totam rem aperiam.",
    btnLabel: "Learn More",
    left: false,
  },
};

export const SwitchbackLeft: Story = {
  args: {
    ...SwitchbackRight.args,
    left: true,
  },
};
