/* eslint-disable @shopify/jsx-no-hardcoded-content */
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

import Input from '@/components/Input';
import FormField from '@/components/FormField';

interface Inputs {
  email: string;
}

export default function UpdatesSignOn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = () => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input id="email" error={errors.email}>
        <input
          autoComplete="off"
          type="email"
          placeholder="Email"
          {...register('email', { required: 'Email Address is required' })}
        />
      </Input>
      <FormField name="submit" type="submit" title="sign up for updates" />
    </form>
  );
}
