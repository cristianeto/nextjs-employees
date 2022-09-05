import { Tr, Td } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import SimpleTable from './SimpleTable';
import { headersTable } from '@mocks';

describe('<SimpleTable />', () => {
  it('should render the component properly', () => {
    const { baseElement } = render(
      <SimpleTable headers={headersTable}>
        <Tr>
          <Td>Hi</Td>
        </Tr>
      </SimpleTable>,
    );
    expect(baseElement).toBeTruthy();
  });
});
