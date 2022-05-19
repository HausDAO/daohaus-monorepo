import { field } from '../../../theme';
import styled from 'styled-components';

export const FieldWrapperBase = styled.div`
  width: 100%;
  max-width: ${field.size.md};
  .field-slot {
    margin-bottom: 1.2rem;
  }
  .long {
    max-width: ${field.size.lg};
  }
  .full {
    max-width: ${field.size.full};
  }
`;