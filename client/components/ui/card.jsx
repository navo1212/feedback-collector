export function Card({ className = "", children }) {
  return <div className={`bg-white rounded-xl shadow ${className}`}>{children}</div>;
}

export function CardHeader({ children, className = "" }) {
  return <div className={`border-b px-4 py-2 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }) {
  return <h2 className={`text-lg font-semibold ${className}`}>{children}</h2>;
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}
