"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          required
          className="w-full p-3 border rounded"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          required
          className="w-full p-3 border rounded"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <textarea
          placeholder="Message"
          value={form.message}
          required
          rows={5}
          className="w-full p-3 border rounded"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded w-full"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>
    </section>
  );
}