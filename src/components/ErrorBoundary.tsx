import React, { ReactNode, ErrorInfo } from "react";

interface Props {
  children: ReactNode;
  fallback?: (error: Error, retry: () => void) => ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  retry = (): void => {
    this.setState({ hasError: false, error: null });
  };

  render(): ReactNode {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.retry);
      }

      return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <div className="max-w-md w-full p-8 bg-card rounded-lg shadow-lg border border-border">
            <h1 className="text-2xl font-bold text-destructive mb-4">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-4">
              Failed to load the page. Please try again.
            </p>
            <details className="mb-6 text-sm text-muted-foreground">
              <summary className="cursor-pointer font-semibold mb-2">
                Error details
              </summary>
              <pre className="bg-muted p-2 rounded mt-2 overflow-auto max-h-32 text-xs">
                {this.state.error.toString()}
              </pre>
            </details>
            <button
              onClick={this.retry}
              className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
