"use client"
import {useState, useEffect} from 'react'
import {useForm} from "react-hook-form"
import { BsFillSendFill as SendIcon } from "react-icons/bs";
import styles from '../../styles/Contact.module.css'
import {zodResolver} from '@hookform/resolvers/zod'
import {SchemaContact} from '../../validations/SchemaContact'
interface ErrorsValue{
    name:string | undefined,
    email:string | undefined,
    subject:string | undefined,
    message:string | undefined
}
export default function Form(){
    const [error,setError]=useState<ErrorsValue | undefined>(undefined)
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver:zodResolver(SchemaContact)
    })
    useEffect(() => {
        setError({
            name: errors.name?.message,
            email: errors.email?.message,
            subject: errors.subject?.message,
            message: errors.message?.message
        })
    }, [errors])
    return(
        <form action="" className={styles.form} onSubmit={handleSubmit(data=>{console.log(data)})}>
            <div className={styles.containerInputs}>
                <div className={styles.containerInput}>
                    <label htmlFor="name">Name*</label>
                    <input type="text" {...register('name')}/>
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="email">Email*</label>
                    <input type='email' {...register('email')}/>
                </div>
            </div>
            <div className={styles.containerInputs2}>
                <div className={styles.containerInput}>
                    <label htmlFor="subject">Subject*</label>
                    <input type="text" {...register('subject')}/>
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="message">Message*</label>
                    <textarea {...register('message')}></textarea>
                </div>
            </div>
            {
                error?.name || error?.email || error?.subject || error?.message ?
                <p className={styles.message_error}>{error?.name || error?.email || error?.subject || error?.message}</p>
                :
                <p className={styles.message_correct}>Todo correcto</p>
            }
            <button className={styles.form__button}>
                <p>Send</p>
                <SendIcon/>
            </button>
        </form>
    )
}