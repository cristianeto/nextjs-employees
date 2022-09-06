import { RouterContext } from 'next/dist/shared/lib/router-context';
import EmployeesScreen from './Employees.screen';
import { createMockRouter } from '@mocks';
import { renderWithStore, waitFor } from '@utils/test-utils';

describe('<EmployeesScreen/>', () => {
  it('should render the EmployeesScreen component', () => {
    const { baseElement, getByRole, findByTestId } = renderWithStore(
      <RouterContext.Provider value={createMockRouter({})}>
        <EmployeesScreen />
      </RouterContext.Provider>,
    );
    waitFor(async () => {
      const buttonAdd = getByRole('button', { name: /new employee/i });
      expect(buttonAdd).toBeInTheDocument();
      const list = await findByTestId('list-employee');
      const form = await findByTestId('employee-form');
      expect(list).toBeInTheDocument();
      expect(form).toBeInTheDocument();
    });
    expect(baseElement).toMatchSnapshot();
    expect(baseElement).toBeTruthy();
  });
});
