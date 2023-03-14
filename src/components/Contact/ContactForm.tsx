import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from '../Input';
import PrimaryButton from '../PrimaryButton';
import FormError from './FormError';

declare global {
  interface Window { grecaptcha: any; }
}

const schema = yup.object({
  name: yup.string()
    .test(
      'fullname',
      'Please enter your name',
      (value) => value !== undefined
    ),
  email: yup.string()
    .email('Please enter a valid email address')
    .required('Please enter a valid email address'),

  message: yup.string()
    .required()

}).required();

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [formSubmitError, setformSubmitError] = useState<string | null>(null);


  const onSubmit = (data: any) => {

    window.grecaptcha.ready(function () {
      window.grecaptcha.execute('6LdGjc8kAAAAACy3ewbRsVGj4xY8-eVan5Atw037', { action: 'submit' }).then(function (token: any) {
        var bodyFormData = new FormData();
        Object.keys(data).forEach(key => {
          bodyFormData.append(key, data[key]);
        })
        // bodyFormData.append('g-recaptcha-response', token);

        axios({
          method: "post",
          // url: "https://onebarrister.co.uk/email.php",
          url: "https://formsubmit.co/bhujelsampada@gmail.com",
          data: data,
          headers: { "Content-Type": "application/json" },
        })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (response) {
            console.log(response);
            setformSubmitError("error")
          });
      });
    });

  };

  const onFormChange = () => {
    setformSubmitError(null)
  }

  return (
    <div className='w-full max-w-lg bg-[#f7f9f9] p-8 rounded-2xl'>
      <form onSubmit={handleSubmit(onSubmit)} onChange={onFormChange} className="flex flex-col gap-4 text-left mt-4 ">
        <>
          <Input
            label="Name"
            name="name"
            placeholder="Your name"
            register={register}
            error={errors.name?.message} />

          <Input
            type="email"
            label="Email address"
            name="email"
            placeholder="Your email address"
            register={register}
            error={errors.email?.message} />
            <input type="text" name="_honey" className='hidden'></input>
          <div className="flex flex-col">
            <label className={`text-base text-neutral-700 mb-2`}>Your message</label>

            <textarea
              {...register("message")}
              rows={4}
              placeholder={"Your message"}
              className='text-neutral-700 text-base mb-2 p-2 border border-gray outline-primary-light'
            />
            {errors.message?.message
              && (typeof errors.message?.message === 'string')
              && <p role="alert">{errors.message?.message}</p>
            }
          </div>

          <div className="flex">
            <PrimaryButton text="Send message" className={`grow`} submit />
          </div>

          <FormError show={formSubmitError === "error"} className="fixed md:relative" />
        </>
      </form>
    </div >
  );
}
