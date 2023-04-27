import { Meta, StoryObj } from "@storybook/react";

import { ImageCTA } from "./ImageCTA";

const meta: Meta<typeof ImageCTA> = {
  title: "Components/ImageCTA",
  component: ImageCTA,
};

export default meta;
type Story = StoryObj<typeof ImageCTA>;

export const ImageRight: Story = {
  args: {
    heading: "Lorem ipsum dolor sit amet",
    subheading:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem, accusantium doloremque laudantium totam rem aperiam.",
    ctaBtnLabel: "Learn More",
    left: false,
  },
};

export const ImageLeft: Story = {
  args: {
    ...ImageRight.args,
    left: true,
  },
};
