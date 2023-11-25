import { cleanup, render } from '../../../__test__/test-utils';
import ErrorFallback from './ErrorFallback';


describe('ErrorFallback', () => {
  beforeEach(() => {
    // render(<Cita />);
  });

  afterEach(() => {
    cleanup();
  });

  // Renders an ErrorContainer component
  it('should render ErrorContainer component', () => {
    render(<ErrorFallback />);
    // expect(screen.getByTestId('error-container')).toBeInTheDocument();
  });
  // Renders an ErrorTitle component
  it('should render ErrorTitle component', () => {
    render(<ErrorFallback />);
    // expect(screen.getByTestId('ErrorTitle')).toBeInTheDocument();
  });

  // Sets the body overflowY style to 'hidden' on mount
  it('should set body overflowY style to hidden on mount', () => {
    render(<ErrorFallback />);
    expect(document.body.style.overflowY).toBe('hidden');
  });
});
export {};

