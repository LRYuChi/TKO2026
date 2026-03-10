import React, { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      const isZh = document.documentElement.getAttribute('lang')?.startsWith('zh');
      const message = isZh ? '發生錯誤，請重新載入頁面。' : 'Something went wrong. Please try reloading the page.';
      const buttonText = isZh ? '重新載入' : 'Reload';

      return (
        <div className="min-h-screen bg-tko-black flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <h1 className="text-6xl font-heading font-bold text-tko-yellow mb-4">OOPS</h1>
            <p className="text-gray-300 text-lg mb-8">{message}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-tko-yellow text-black font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
              {buttonText}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
