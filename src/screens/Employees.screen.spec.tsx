import { RouterContext } from 'next/dist/shared/lib/router-context';
import EmployeesScreen from './Employees.screen';
import { createMockRouter } from '@mocks';
import { renderWithStore } from '@utils/test-utils';

describe('<EmployeesScreen/>', () => {
  it('should render the EmployeesScreen component', () => {
    const { baseElement } = renderWithStore(
      <RouterContext.Provider value={createMockRouter({})}>
        <EmployeesScreen />
      </RouterContext.Provider>,
    );
    expect(baseElement).toBeTruthy();
  });
});
