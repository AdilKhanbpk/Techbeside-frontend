"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import CommonButton from "../common/Button";
import {
  MapPin,
  PhoneCall,
  Mail,
  Clock3,
} from "lucide-react";
import axios from "axios";
import { backend_url } from "@/newLayout";
import { toast } from "react-toastify";
import { FaWhatsapp } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const changeEventHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value: string) => {
    setFormData({
      ...formData,
      phoneNumber: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        `${backend_url}/api/v1/contact/send`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/confirmation");

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      }
    } catch (error: any) {
      console.log(error);

      const errorMessage =
        error?.response?.data?.message || "An error occurred";

      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative isolate overflow-hidden bg-[#080b20] text-white">

      {/* Premium background image + overlay */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/contact-bg.jpg')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-[#080b20]/90" />

      {/* Soft indigo light */}
      <div className="absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-indigo-600/20 blur-[140px]" />

      <div className="absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-violet-500/10 blur-[140px]" />

      <section className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-36">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium tracking-[0.18em] text-indigo-200 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            Get in touch
          </div>

          <h1 className="text-4xl font-normal leading-[1.12] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Let&apos;s build something
            <span className="block text-indigo-300">
              meaningful together.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base font-light leading-7 text-white/60 sm:text-lg">
            Have an idea, a project, or a challenge in mind?
            Tell us about it. We&apos;d love to hear from you.
          </p>

        </div>

        {/* Main Contact Layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">

          {/* Left Contact Information */}
          <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-white/[0.035] p-7 backdrop-blur-sm sm:p-10 lg:p-12">

            <div>

              <p className="mb-4 text-sm font-medium tracking-[0.16em] text-indigo-300 uppercase">
                Contact information
              </p>

              <h2 className="max-w-md text-3xl font-normal leading-tight tracking-tight text-white sm:text-4xl">
                We&apos;re here to bring your ideas to life.
              </h2>

              <p className="mt-5 max-w-md text-base font-light leading-7 text-white/55">
                Whether you&apos;re starting something new or looking
                to improve an existing product, let&apos;s start a
                conversation.
              </p>

              {/* Contact details */}
              <div className="mt-10 space-y-7">

                {/* Location */}
                {/* <div className="flex items-start gap-4"> */}

                  {/* <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    <MapPin size={19} strokeWidth={1.5} className="text-indigo-300" />
                  </div> */}

                  {/* <div>
                    <p className="mb-1 text-xs tracking-wider text-white/40 uppercase">
                      Our location
                    </p>

                    <p className="text-sm font-light leading-6 text-white/80 sm:text-base">
                       
                    </p>
                  </div> */}

                {/* </div> */}

                {/* WhatsApp */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    <FaWhatsapp size={20} className="text-emerald-400" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs tracking-wider text-white/40 uppercase">
                      WhatsApp
                    </p>

                    <Link
                      href="https://wa.me/13213646803"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-light text-white/80 transition-colors hover:text-indigo-300 sm:text-base"
                    >
                      +92 317 8261618
                    </Link>
                  </div>

                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    <PhoneCall size={19} strokeWidth={1.5} className="text-indigo-300" />
                  </div>

                  <div>
                    <p className="mb-1 text-xs tracking-wider text-white/40 uppercase">
                      Call us
                    </p>

                    <Link
                      href="tel:+13213646803"
                      className="text-sm font-light text-white/80 transition-colors hover:text-indigo-300 sm:text-base"
                    >
                      +92 317 8261618
                    </Link>
                  </div>

                </div>

                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06]">
                    <Mail size={19} strokeWidth={1.5} className="text-indigo-300" />
                  </div>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs tracking-wider text-white/40 uppercase">
                      Email us
                    </p>

                    <Link
                      href="mailto:contact@techbeside.dev"
                      className="break-all text-sm font-light text-white/80 transition-colors hover:text-indigo-300 sm:text-base"
                    >
                      contact@techbeside.dev
                    </Link>
                  </div>

                </div>

              </div>

            </div>

            {/* Bottom availability card */}
            <div className="mt-12 border-t border-white/10 pt-7">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-400/10">
                  <Clock3 size={18} className="text-emerald-400" strokeWidth={1.5} />
                </div>

                <div>
                  <p className="text-sm font-medium text-white/85">
                    Let&apos;s talk
                  </p>

                  <p className="mt-1 text-xs font-light text-white/45">
                    We&apos;d love to hear about your project.
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Contact Form Card */}
          <div className="rounded-[28px] bg-[#f8f8fb] p-6 text-[#11152d] shadow-[0_25px_80px_-30px_rgba(0,0,0,0.65)] sm:p-8 md:p-10">

            <div className="mb-6">
              <h2 className="text-2xl font-normal tracking-tight text-[#11152d] sm:text-[28px]">
                Start a conversation
              </h2>

              <p className="mt-2 text-sm font-light leading-6 text-gray-500">
                Fill out the form below and we&apos;ll get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* First and Last Name */}
              <div className="grid gap-4 sm:grid-cols-2">

                <div>
                  <label htmlFor="firstName" className="sr-only">
                    First name
                  </label>
                  <input
                    id="firstName"
                    placeholder="First name*"
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={changeEventHandler}
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm font-light text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="sr-only">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    placeholder="Last name*"
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={changeEventHandler}
                    required
                    className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm font-light text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                  />
                </div>

              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  placeholder="Email address*"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={changeEventHandler}
                  required
                  className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm font-light text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Phone */}
              <div>
                <PhoneInput
                  country={"us"}
                  value={formData.phoneNumber}
                  onChange={handlePhoneChange}
                  containerClass="contact-phone-container"
                  inputStyle={{
                    width: "100%",
                    height: "48px",
                    borderRadius: "12px",
                    border: "1px solid #e5e7eb",
                    background: "#ffffff",
                    color: "#111827",
                    fontSize: "14px",
                    fontWeight: "300",
                  }}
                  buttonStyle={{
                    border: "1px solid #e5e7eb",
                    borderRight: "none",
                    borderRadius: "12px 0 0 12px",
                    background: "#ffffff",
                  }}
                  dropdownStyle={{
                    background: "#ffffff",
                    color: "#111827",
                  }}
                  inputClass="contact-phone-input"
                  buttonClass="contact-phone-button"
                  dropdownClass="contact-phone-dropdown"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="sr-only">
                  Your message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message*"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={changeEventHandler}
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-light leading-6 text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>

              {/* Submit */}
              <div className="pt-1">
                <CommonButton
                  title={loading ? "Sending..." : "Send Message"}
                  type="submit"
                  disabled={loading}
                  className={`flex h-12 w-full items-center justify-center rounded-full bg-indigo-600 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(79,70,229,0.7)] transition-all duration-300 ${
                    loading
                      ? "cursor-not-allowed opacity-50"
                      : "hover:bg-indigo-700 hover:shadow-[0_12px_28px_-8px_rgba(79,70,229,0.8)]"
                  } focus:outline-none focus:ring-4 focus:ring-indigo-500/20`}
                />
              </div>

              <p className="flex items-center justify-center gap-2 text-center text-xs font-light text-gray-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Your information is safe with us.
              </p>

            </form>

          </div>

        </div>

      </section>

    </main>
  );
};

export default ContactForm;