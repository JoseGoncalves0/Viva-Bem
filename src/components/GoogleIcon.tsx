export default function GoogleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.15 1.15-2.94 2.4-6.11 2.4-4.85 0-8.64-3.91-8.64-8.76s3.79-8.76 8.64-8.76c2.62 0 4.54 1.03 5.95 2.35l2.31-2.31C18.75 1.19 16.13 0 12.48 0 5.87 0 .31 5.39.31 12s5.56 12 12.17 12c3.57 0 6.26-1.17 8.37-3.36 2.16-2.16 2.84-5.21 2.84-7.67 0-.76-.05-1.46-.18-2.05H12.48z" />
    </svg>
  );
}
