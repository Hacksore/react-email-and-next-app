import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

export const Example = () => {
  return (
    <Html>
      <Head />
      <Preview>Example</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Example
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello world!
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Example;
