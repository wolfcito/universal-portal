export function LoadingSpinner({ message = 'Cargando...' }: { message?: string }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
      <span className="text-sm text-muted-foreground">{message}</span>
    </div>
  );
} 