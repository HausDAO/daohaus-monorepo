import { createContext, ReactNode, useState } from 'react';
import { FormLego, RequiredFields } from '../types';
import { FormProvider as RHFProvider, useForm } from 'react-hook-form';
import { FormLayout } from '@daohaus/ui';

type HausFormContext = {
  requiredFields: RequiredFields;
  disableForm: boolean;
};

export const HausFormContext = createContext<HausFormContext>({
  requiredFields: {},
  disableForm: false,
});

export const HausFormProvider = ({
  children,
}: {
  children: ReactNode;
  form: FormLego;
}) => {
  const methods = useForm({ mode: 'onChange' });
  const {
    formState: { isValid },
    control,
  } = methods;

  const {
    title,
    subtitle,
    description,
    fields,
    log,
    devtool,
    submitButtonText,
    requiredFields,
  } = form;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitDisabled = !isValid || isSubmitting || !isValidNetwork(chainId);
  return (
    <HausFormContext.Provider value={{}}>
      <RHFProvider {...methods}>
        <FormLayout title={title} subtitle={subtitle} description={description}>
          <form
            onSubmit={methods.handleSubmit(handleTopLevelSubmit)}
            className="builder-inner-form"
            noValidate
          >
            {fields?.map((field) => (
              <FormBuilderFactory key={field.id} field={field} />
            ))}
            {log && <Logger />}
            {devtool && <DevTool control={control} />}
            <FormFooter
              submitDisabled={submitDisabled}
              submitButtonText={submitButtonText}
            />
          </form>
        </FormLayout>
      </RHFProvider>
    </HausFormContext.Provider>
  );
};
