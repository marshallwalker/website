import { Form, useTransition } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { Section } from "./section";

export const Contact = () => {
    const transition = useTransition();
    const formRef = useRef<any>();

    const isSubmitting =
        transition.state === "submitting" &&
        transition.submission.formData.get("op") === "contact";

    useEffect(() => formRef.current?.reset(), [isSubmitting]);

    return (
        <Section title="Contact">
            <Form ref={formRef} method="post" className="flex flex-col justify-center items-center space-y-6 w-1/3">
                <input type="hidden" name="op" value="contact" />
                <div className="flex space-x-6 w-full">
                    <input className="w-full border p-3 text-sm" type="text" name="first_name" placeholder="First Name" required/>
                    <input className="w-full border p-3 text-sm" type="text" name="last_name" placeholder="Last Name" required/>
                </div>
                <input className="border p-3 w-full text-sm" type="email" name="email" placeholder="Email" required/>
                <textarea rows={5} className="border p-3 w-full text-sm" placeholder="Type a few words" required/>
                <div className="flex w-full justify-end">
                    <button type="submit" className="border p-3 w-1/3" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </Form>
        </Section>
    );
}