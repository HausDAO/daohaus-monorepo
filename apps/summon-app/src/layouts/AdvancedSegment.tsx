import { FormSegment, SplitColumn, WrappedInput } from '@daohaus/ui';

import { INFO_COPY } from '../utils/content';
import { FORM_KEYS } from '../utils/formKeys';

export const AdvancedSegment = ({
  formDisabled,
}: {
  formDisabled: boolean;
}) => {
  return (
    <FormSegment
      title="Advanced Governance"
      description="Modify some advanced governance features."
      formArea={
        <SplitColumn
          rows={[
            {
              rowID: 'advanced1',
              left: (
                <WrappedInput
                  id={FORM_KEYS.QUORUM}
                  label="Quorum %"
                  required
                  full
                  info={INFO_COPY.QUORUM}
                  defaultValue="0"
                  disabled={formDisabled}
                  registerOptions={{ required: 'This value is required' }}
                />
              ),
              right: (
                <WrappedInput
                  id={FORM_KEYS.MIN_RETENTION}
                  label="Min Retention %"
                  defaultValue="66"
                  info={INFO_COPY.MIN_RETENTION}
                  required
                  full
                  disabled={formDisabled}
                  registerOptions={{ required: 'This value is required' }}
                />
              ),
            },
            {
              rowID: 'advanced2',
              left: (
                <WrappedInput
                  id={FORM_KEYS.SPONSOR_THRESHOLD}
                  label="Sponsor Threshold"
                  defaultValue="0"
                  required
                  full
                  info={INFO_COPY.SPONSOR_THRESHOLD}
                  disabled={formDisabled}
                  registerOptions={{ required: 'This value is required' }}
                />
              ),
              right: (
                <WrappedInput
                  id={FORM_KEYS.OFFERING}
                  label="New Offering (ETH)"
                  defaultValue="0"
                  required
                  full
                  info={INFO_COPY.NEW_OFFERING}
                  disabled={formDisabled}
                  registerOptions={{ required: 'This value is required' }}
                />
              ),
            },
            {
              rowID: 'advanced3',
              left: (
                <WrappedInput
                  id={FORM_KEYS.VOTING_SECONDS}
                  label="Voting Period (Seconds)"
                  defaultValue="0"
                  required
                  full
                  info={INFO_COPY.VOTING_PERIOD}
                  disabled={formDisabled}
                  registerOptions={{ required: 'This value is required' }}
                />
              ),
              right: (
                <WrappedInput
                  id={FORM_KEYS.GRACE_SECONDS}
                  label="Grace Period (Seconds)"
                  defaultValue="0"
                  required
                  full
                  info={INFO_COPY.GRACE_PERIOD}
                  disabled={formDisabled}
                  registerOptions={{ required: 'This value is required' }}
                />
              ),
            },
          ]}
        />
      }
    />
  );
};
