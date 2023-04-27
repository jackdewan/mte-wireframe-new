import Disclosure from "../stories/Disclosure";

const faq = [
  {
    title: "FAQ Question",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "FAQ Question",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "FAQ Question",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "FAQ Question",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const FAQ = () => {
  return (
    <section className="max-w-2xl mx-auto">
      <Disclosure>
        {faq.map((q, i) => (
          <Disclosure.Panel
            key={i}
            title={`${q.title} ${i + 1}`}
            className="p-4 border text-xl"
          >
            <div className="border p-4">{q.body}</div>
          </Disclosure.Panel>
        ))}
      </Disclosure>
    </section>
  );
};
