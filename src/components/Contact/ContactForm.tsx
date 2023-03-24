import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Input from '../Input';
import PrimaryButton from '../PrimaryButton';
import FormError from './FormError';
import emailjs from '@emailjs/browser';
import FormSuccess from './FormSuccess';

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
  const formRef = useRef(null);


  const onSubmit = (data: any) => {
    window.grecaptcha.ready(function () {
      window.grecaptcha.execute('6LdGjc8kAAAAACy3ewbRsVGj4xY8-eVan5Atw037', { action: 'submit' }).then(function (token: any) {
        if (!formRef.current) return;
        const service_id = process.env.NEXT_PUBLIC_SERVICE_ID
        const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID
        const user_id = process.env.NEXT_PUBLIC_USER_ID

        if (service_id && template_id && user_id) {
          emailjs.sendForm(service_id, template_id, formRef.current, user_id)
            .then((result) => {
              console.log(result.text);
              setformSubmitError('ok')
            }, (error) => {
              console.log(error.text);
              setformSubmitError('error')
            });
        }
      });
    });

  };

  const onFormChange = () => {
    setformSubmitError(null)
  }

  return (
    <div className='w-full h-full max-w-lg bg-[#141414] px-4 p-2 xs:p-8 rounded-2xl xs:mt-10 contact-from-wrapper'>
      <form onSubmit={handleSubmit(onSubmit)} onChange={onFormChange} className="flex flex-col gap-4 text-left mt-4 " ref={formRef}>
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
            <label className={`text-base text-text-muted mb-2`}>Your message</label>

            <textarea
              {...register("message")}
              rows={4}
              placeholder={"Your message"}
              className='bg-background2 rounded-lg text-text-muted text-base mb-2 p-2 border border-transparent focus-within:border-gray outline-none'
            />
            {errors.message?.message
              && (typeof errors.message?.message === 'string')
              && <p role="alert" className='text-red-500 text-sm'>{errors.message?.message}</p>
            }
          </div>

          <div className="flex">
            <PrimaryButton text="Send message" className={`grow`} submit />
          </div>

          <FormError show={formSubmitError === "error"} className="md:relative" />
          <FormSuccess show={formSubmitError === "ok"} className="md:relative" />
        </>
      </form>
    </div >
  );
}
