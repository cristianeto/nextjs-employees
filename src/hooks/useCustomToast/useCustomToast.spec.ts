import { renderHook } from '@testing-library/react';
import { useToast } from '@hooks';

describe('useForm Hook ', () => {
  it('should define the default values', () => {
    const { result } = renderHook(() => useToast());
    expect(result.current).toBeDefined();
  });
});
