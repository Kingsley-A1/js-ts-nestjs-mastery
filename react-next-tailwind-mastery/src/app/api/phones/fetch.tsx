"use client";

import { useState } from "react";

type Phone = {
  id: number;
  name: string;
  price: number;
};

// Client helper for the GET endpoint in ./route.ts.
export function usePhones() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadPhones() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/phones");
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}.`);
      }

      const data: Phone[] = await response.json();
      setPhones(data);
    } catch (caughtError) {
      setError(
        caughtError instanceof Error
          ? caughtError.message
          : "Could not load phones.",
      );
    } finally {
      setLoading(false);
    }
  }

  return { phones, loading, error, loadPhones };
}
