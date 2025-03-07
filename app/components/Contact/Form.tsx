"use client"
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { BsFillSendFill as SendIcon } from "react-icons/bs";
import styles from '../../styles/Contact.module.css'
import { zodResolver } from '@hookform/resolvers/zod'
import { SchemaContact } from '../../validations/SchemaContact'
import { MdErrorOutline as ErrorIcon } from "react-icons/md";
import { FaCheck as CorrectIcon } from "react-icons/fa";
interface ErrorsValue {
  name: string | undefined,
  email: string | undefined,
  subject: string | undefined,
  message: string | undefined
}

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<ErrorsValue | undefined>(undefined);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SchemaContact)
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
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.containerInputs}>
        <div className={styles.containerInput}>
          <input type="text" {...register('name')} required/>
          <label htmlFor="name">Name*</label>
        </div>
        <div className={styles.containerInput}>
          <input type='text' {...register('email')} required/>
          <label htmlFor="email">Email*</label>
        </div>
      </div>
      <div className={styles.containerInputs2}>
        <div className={styles.containerInput}>
          <input type="text" {...register('subject')} required/>
          <label htmlFor="subject">Subject*</label>
        </div>
        <div className={styles.containerInput}>
          <textarea {...register('message')} required></textarea>
          <label htmlFor="message">Message*</label>
        </div>
      </div>
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
      <button className={styles.form__button}>
        <p>Send</p>
        <SendIcon />
      </button>
    </form>
  )
}
