class ErrorBoundary extends React.Component {
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render an error message or fallback UI here
      return <div>Error: {this.state.error.message}</div>;
    }

    return this.props.children;
  }
}
