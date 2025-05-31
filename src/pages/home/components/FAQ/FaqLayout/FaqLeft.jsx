import { Collapse } from "antd";

const FaqLeft = () => {
  return (
    <>
      <Collapse
        size="small"
        rootClassName="custom-collapse"
        items={[
          {
            key: "1",
            label: "This is small size panel header",
            children: <p>hello world</p>,
          },
        ]}
      />
    </>
  );
};

export default FaqLeft;
