import "@/styles/globals.css";

export const metadata = {
  title: "Feedback Collector",
  description: "Submit and view feedback easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">
          Feedback Collector App
        </h1>
        {children}
      </body>
    </html>
  );
}
