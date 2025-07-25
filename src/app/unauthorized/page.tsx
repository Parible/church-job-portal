export default function UnauthorizedPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 text-center">
      <h1 className="text-2xl font-semibold text-red-500">Unauthorized</h1>
      <p className="text-muted-foreground mt-4">
        You do not have access to this page.
      </p>
    </div>
  );
}
