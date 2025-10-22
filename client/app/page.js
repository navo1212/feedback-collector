"use client";

import { useState } from "react";
import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";

export default function Page() {
  const [refresh, setRefresh] = useState(false);
  const reloadFeedbacks = () => setRefresh(!refresh);

  return (
    <main className="w-full max-w-md space-y-6">
      <FeedbackForm onFeedbackAdded={reloadFeedbacks} />
      <FeedbackList refresh={refresh} />
    </main>
  );
}
