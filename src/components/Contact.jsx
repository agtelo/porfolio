"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    // formState: {},
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      }),
    });
    console.log(await response.json());
  };

  return (
    <>
      <div className="flex w-full">
        <div className="w-full bg-gradient-to-tl gradient from-pink-400 via-black to-black opacity-90 p-0.5"></div>
        <div className="w-full bg-gradient-to-bl gradient from-black via-black to-pink-400 opacity-90 p-0.5"></div>
      </div>
      <section id="contact">
        <h1 className="text-transparent uppercase font-extrabold bg-clip-text bg-gradient-to-b from-white from-[40%] to-gray-500 tracking-[-0.04em] leading-none text-[2.5rem] md:text-[4rem] lg:text-[5rem] max-w-lg md:max-w-xl lg:max-w-4xl text-center mt-10">
          #HERE'S A CONTACT FORM <br />
          Have Any Questions?
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-20">
          <div className="flex flex-col md:flex-row">
            <Input
              type="text"
              {...register("name", { required: true })}
              className="mb-3 mr-3"
              placeholder="Name"
              size="lg"
              variant="bordered"
            />
            <Input
              type="email"
              {...register("email", { required: true })}
              className="mb-3"
              placeholder="Email"
              size="lg"
              variant="bordered"
            />
          </div>
          <Textarea
            {...register("message", { required: true })}
            size="lg"
            variant="bordered"
            minRows={10}
            placeholder="Message"
            className=""
          />
          <Button
            type="submit"
            size="lg"
            color="default"
            variant="solid"
            className="w-full mt-5 uppercase"
          >
            Send Message
          </Button>
        </form>
      </section>
    </>
  );
}
