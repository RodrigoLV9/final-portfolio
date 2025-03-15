"use client"
import { useState, useEffect, useRef } from 'react'
import { useForm } from "react-hook-form"
import { BsFillSendFill as SendIcon } from "react-icons/bs";
import styles from '../../styles/Contact.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaContact } from '../../validations/SchemaContact'
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { FaCheck as CorrectIcon } from "react-icons/fa";
import { useLanguage } from '@/app/Contexts/LanguageContext';
interface ErrorsValue {
  name: string | undefined,
  email: string | undefined,
  subject: string | undefined,
  message: string | undefined
}

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null); 
  const {language}=useLanguage()
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<ErrorsValue | undefined>(undefined);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SchemaContact(language))
  });

  useEffect(() => {
    setError({
      name: errors.name?.message,
      email: errors.email?.message,
      subject: errors.subject?.message,
      message: errors.message?.message
    });

    if (errors.name || errors.email || errors.subject || errors.message) {
      setIsSubmitted(false);
    }
  }, [errors]);

  const onSubmit = () => {
    setIsSubmitted(true);
    formRef.current?.submit();
  };

  return (
    <form action="https://formsubmit.co/rodrigolv.975@gmail.com" method="post"  className={styles.form} ref={formRef} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.containerInputs}>
        <div className={styles.containerInput}>
          <input type="text" {...register('name')} required/>
          <label htmlFor="name">{language ? 'Nombre*' : '*Name'}</label>
        </div>
        <div className={styles.containerInput}>
          <input type='text' {...register('email')} required/>
          <label htmlFor="email">Email*</label>
        </div>
      </div>
      <div className={styles.containerInputs2}>
        <div className={styles.containerInput}>
          <input type="text" {...register('subject')} required/>
          <label htmlFor="subject">{language ? 'Asunto*' : 'Subject*'}</label>
        </div>
        <div className={styles.containerInput}>
          <textarea {...register('message')} required></textarea>
          <label htmlFor="message">{language ? 'Mensaje*':'Message*'}</label>
        </div>
      </div>
      {/* <input type="hidden" name="_next" value="https://rodrigolv9.github.io/Portafolio/"/> */}
      <input type="hidden" name="_captcha" value="false"></input>
      {
        error?.name || error?.email || error?.subject || error?.message ? (
          <div className={styles.message_error}>
            <ErrorIcon/>
            <p>{error?.name || error?.email || error?.subject || error?.message}</p>
          </div>
        ) : isSubmitted ? (
            
          <div className={styles.message_correct}>
            <CorrectIcon/>
            <p>Correct</p>
          </div>
        ) : null
      }
      <button className={styles.form__button} type='submit' id='button'>
        <p>{language ? 'Enviar':'Send'}</p>
        <SendIcon />
      </button>
    </form>
  )
}
