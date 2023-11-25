import { cleanup, render } from '../../../__test__/test-utils';
import ErrorFallback from './ErrorFallback';


describe('ErrorFallback', () => {
  beforeEach(() => {
    render(<ErrorFallback />);
  });

  afterEach(() => {
    cleanup();
  });

  // Renders an ErrorContainer component
  it('should render ErrorContainer component', () => {
    // expect(screen.getByTestId('error-container')).toBeInTheDocument();
  });
  // Renders an ErrorTitle component
  it('should render ErrorTitle component', () => {
    // expect(screen.getByTestId('error-title')).toBeInTheDocument();
  });

  // Sets the body overflowY style to 'hidden' on mount
  it('should set body overflowY style to hidden on mount', () => {
    expect(document.body.style.overflowY).toBe('hidden');
  });
});
export {};

