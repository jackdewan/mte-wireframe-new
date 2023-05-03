import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Foundation/Input Field",
  component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    label: "Input Email",
    required: false,
    placeholder: "Email Here",
    hideLabel: false,
    dark: false,
  },
};

export const Dark: Story = {
  args: {
    ...Primary.args,
    dark: true,
  },
};

export const HideLabel: Story = {
  args: {
    ...Primary.args,
    hideLabel: true,
  },
};
