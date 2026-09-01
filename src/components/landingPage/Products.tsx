"use client";
import React, { useState } from "react";
import Link from "next/link";

const Products = () => {
  const [loading, setLoading] = useState(null)

  const products = [
    {
      name: "Business Management System",
      description:
        "Our Business Management System is a robust and easily scalable system that streamlines business operations, increases efficiency, and ultimately drives growth and profitability for your business. With features such as employee management, finance control, and many more modules to effectively manage all aspects of a business. All data is stored in the cloud and is easily accessible from all devices and any location.",
      href: "/contact",
    },
    {
      name: "School Management Portal",
      description:
        "Our all-encompassing School Management Portal is the only solution needed for any institution. The School Management Portal (SMP) is a tool that can help educational institutions manage their administrative tasks, automate processes, and streamline communication between teachers, students, parents, and administrators. The software can be used to manage all aspects of school operations, including student enrollment, attendance, grades, schedules, and more.",
      href: "/contact",
    },
    {
      name: "Payroll Management System",
      description:
        "The Payroll Management System automates the process of employee payments for businesses and organizations of different sizes. It helps to ensure that your employees get paid accurately and on time, while also reducing the time and effort required to manage payroll manually. With this system in place, you enjoy benefits such as increased accuracy in employee payments. It can also integrate into an existing management system through well-structured APIs.",
      href: "/contact",
    },
    {
      name: "Event Management System",
      description:
        "Our event management system helps to manage different types of events, whether weddings, burials, or any kind of event. With an easily customizable menu, you get to define your user experience and make your event fully customizable and memorable. With use cases already recorded for quite a number of events, we can assure you of a stress-less event management platform.",
      href: "/contact",
    },
  ];

  const handleClick = (index:any) => {
    setLoading(index);
  };

  return (
    <section className="md:mt-16 mt-9">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-purple-600 text-center mb-6 md:mb-9">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 flex flex-col h-full"
          >
            <h3 className="text-2xl font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-600 mt-4 text-base flex-grow">{product.description}</p>
            <Link href={product.href} onClick={() => handleClick(index)} className="mt-auto flex justify-center">
              {loading === index ? (
                <p className="text-white font-bold py-3 px-8 rounded-full bg-purple-600 mt-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-[0_4px_16px_-4px_#3b71ca]">
                  Please wait...
                </p>
              ) : (
                <button
                  className="text-white font-bold py-3 px-8 rounded-full bg-purple-600 mt-4 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-[0_4px_16px_-4px_#3b71ca]"
                >
                  Schedule Demo &nbsp;→
                </button>
              )}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;