import { Button } from "../stories/Button";
import { InputField } from "../stories/InputField";

export const NewsletterFooter = () => {
  return (
    <div className="space-y-4 lg:space-y-6 max-w-sm">
      <h3 className="text-3xl xl:text-4xl">Subscribe to Our Newsletter</h3>
      <div>
        <InputField
          label="Newsletter"
          name="newsletter_footer"
          required
          placeholder="janedoe@example.com"
          hideLabel
          dark
        />
      </div>
      <div className="sm:max-w-xs">
        <Button label="Subscribe" primary fullWidth />
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur integer platea nec cum venenatis.
      </p>
    </div>
  );
};
