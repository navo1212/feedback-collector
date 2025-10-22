"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FeedbackList({ refresh }) {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/feedback")
      .then((res) => setFeedbacks(res.data))
      .catch((err) => console.error(err));
  }, [refresh]);

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold">All Feedback</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-500 text-center">No feedback yet.</p>
      ) : (
        feedbacks.map((f) => (
          <Card key={f._id} className="border border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">{f.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{f.message}</p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(f.createdAt).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))
      )}
    </div>
  );
}

