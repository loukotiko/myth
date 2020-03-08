import { useParams, Redirect } from "react-router-dom";
import React, { Suspense } from "react";

export default function CharacterSwitch() {
  const { role, character } = useParams();

  const CharacterPage = React.lazy(() => import("./" + character));

  return (
    <Suspense
      fallback={
        <div id="preloder">
          <div class="loader"></div>
        </div>
      }
    >
      <ErrorBoundary>
        <CharacterPage />
      </ErrorBoundary>
    </Suspense>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(error);
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return <Redirect to="/" />;
    }

    return this.props.children;
  }
}
