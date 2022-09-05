import EmployeesList from './EmployeesList';
import { employees, headersTable } from '@mocks';
import { SimpleTable } from '@molecules';
import { render } from '@utils/test-utils';

describe('<EmployeeList />', () => {
  it('should render the component properly', () => {
    const { baseElement } = render(
      <SimpleTable headers={headersTable}>
        <EmployeesList
          data={employees}
          onDelete={jest.fn()}
          onUpdate={jest.fn()}
        />
      </SimpleTable>,
    );
    expect(baseElement).toBeTruthy();
  });
});
