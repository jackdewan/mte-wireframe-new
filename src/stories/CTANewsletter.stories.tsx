import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { CTANewsletter, CtaNewsletterCopy } from "./CTANewsletter";

const meta: Meta<typeof CTANewsletter> = {
  title: "Components/CTANewsletter",
  component: CTANewsletter,
};

export default meta;
type Story = StoryObj<typeof CTANewsletter>;

export const Primary: Story = {
  args: {
    title: CtaNewsletterCopy.title,
    subtitle: CtaNewsletterCopy.subtitle,
    buttonLabel: CtaNewsletterCopy.buttonLabel,
    protectionCopy: CtaNewsletterCopy.protectionCopy,
    protectionBtnLabel: CtaNewsletterCopy.protectionBtnLabel,
  },
};
