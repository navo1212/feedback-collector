"use client";

import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeedbackForm({ onFeedbackAdded }) {
  const [form, setForm] = useState({ name: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return alert("Please fill all fields.");
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/feedback", form);
      setForm({ name: "", message: "" });
      onFeedbackAdded();
    } catch (error) {
      console.error(error);
      alert("Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-md border border-gray-200">
      <CardHeader>
        <CardTitle>Submit Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Your Feedback Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
