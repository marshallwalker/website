import { Form, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { Section } from "./section";

const Email = () => {
  const transition = useTransition();
  const formRef = useRef<any>();

  const isSubmitting =
    transition.state === "submitting" &&
    transition.submission.formData.get("op") === "contact";

  useEffect(() => formRef.current?.reset(), [isSubmitting]);

  return (
    <div className="space-y-3 flex flex-col justify-center items-center border p-3">
      <p className="text-2xl font-thin">Email</p>
      <Form
        ref={formRef}
        method="post"
        className="flex flex-col justify-center items-center space-y-6"
      >
        <input type="hidden" name="op" value="contact" />
        <div className="flex space-x-6 w-full">
          <input
            className="w-full border p-3 text-sm"
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <input
            className="w-full border p-3 text-sm"
            type="text"
            name="last_name"
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="border p-3 w-full text-sm"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <textarea
          rows={5}
          className="border p-3 w-full text-sm"
          placeholder="Type a few words"
          required
        />
        <div className="flex w-full justify-end">
          <button
            type="submit"
            className="border p-3 w-1/3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </div>
  );
};

const Socials = () => {
  return (
    <div className="flex flex-col space-y-3 justify-evenly items-center border p-3">
      <p className="text-2xl font-thin">Socials</p>

      <div className="grid grid-cols-2 place-content-center gap-6">
        <p>Twitter</p>
        <p>Instagram</p>
        <p>GitHub</p>
        <p>LinkedIn</p>
        <p>TryHackMe</p>
        <p>Spotify</p>
      </div>
    </div>
  );
};

interface AuthorizedKeyProps {
  key: string;
}

const AuthorizedKey = ({ key }: AuthorizedKeyProps) => {
  return (
    <div className="flex flex-col space-y-3 justify-evenly items-center border p-3">
      <p className="text-2xl font-thin">Authorized Key</p>

      <p className="break-all text-slate-600 font-thin">{key}</p>
    </div>
  );
}

export const Contact = () => {
  const key = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCynhoaWmQO0flryZoRsETSKmftwwTRnBvTABUsJo9ExrvE+Gbpr0OJlcl7cWmtvUHzx+L/+VkKhGpc6pMqsCLPDfdMj8xQ09plrlqAtiOG0PKLOxqyt+uglgj2QPQcleN3I9+jlPPixuEGwMTb3CxV4BVGhhvC0Tq0q6ZEmv/awW6rOIWpUBWL/Gc0FqncR2vhLYGvSX9SmEGkZrpdO9BTYhZGpgjvy+Hs/VVgConV9ysS/tRMijHqizbJWWL/3JFGdkAqDsRlBhrpG5VW77+VbW1jTuUN+UNpJC6//Ip1Z00ga+r47V7JUkudaCZdDegJgSX2FEkEYga5rn9R9SKZ";

  return (
    <Section title="Contact">
      <div className="grid grid-cols-3 gap-6 p-3">
        <Email />
        <Socials />
        <AuthorizedKey key={key} />
      </div>
    </Section>
  );
};
