import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { ParSm, WrappedTextArea } from '@daohaus/ui';

import { FormSegment, TextAreaSection } from '../layouts/FormLayouts';
import { transformMemberData, validateMemberData } from '../utils/common';

const MEMBERS = 'members';

export const MembersSegment = () => {
  const {
    watch,
    formState: { errors, touchedFields },
  } = useFormContext();
  const { members } = watch();

  const [amtMembers, setAmtMembers] = useState(0);
  const [helperText, setHelperText] = useState('');

  useEffect(() => {
    if (members == null) return;
    setAmtMembers(members?.memberAddresses?.length || 0);
    if (members === '') {
      setHelperText('');
      return;
    }
    if (!errors?.[MEMBERS] && touchedFields[MEMBERS]) {
      setHelperText('Seems like a valid response');
    }
  }, [members, errors, touchedFields]);

  return (
    <FormSegment
      title="Starting Members"
      description="You must have at least one member to start. Add other starting members as desired. You can always add more members later through a proposal or a shaman."
      formArea={
        <TextAreaSection>
          <ParSm className="number-display">{amtMembers} Members</ParSm>
          <WrappedTextArea
            label="Addresses & Stake Amounts"
            placeholder="0x00000000000000000000000000 30 10"
            id={MEMBERS}
            full
            number
            required
            helperText={helperText}
            registerOptions={{
              setValueAs: transformMemberData,
              validate: validateMemberData,
              required: 'Members is a required field',
            }}
          />
        </TextAreaSection>
      }
    />
  );
};
