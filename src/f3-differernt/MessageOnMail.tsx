import React from 'react';
import axios from 'axios';
import {useFormik} from "formik";




export const MessageOnMail = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',

        },
        onSubmit: values => {
            axios.post('https://node-js-sooty-one.vercel.app/message', {
                email: values.email,
                name: values.name,
                message: values.message
            }).then(() => {
                alert('Спасибо, что проявили интерес к моей персоне! Я обязательно свяжусь с вами.')
                formik.resetForm()
            })
                .finally(() => {
                    formik.resetForm()
                })
        },

    })


    return (
        <div id='contact' >

            <div>

                <div >
                        <form onSubmit={formik.handleSubmit}>

                            <label>
                                <input
                                       type="text"
                                       placeholder={'Имя'}
                                       {...formik.getFieldProps('name')}/>
                            </label>

                            <label>
                                <input
                                       type="text"
                                       placeholder={'e-mail'}
                                       {...formik.getFieldProps('email')}/>
                            </label>

                            <label>
                                 <textarea
                                           placeholder={'Сообщение'}
                                           {...formik.getFieldProps('message')}/>
                            </label>
                            <button  type='submit'>ОТПРАВИТЬ</button>

                        </form>
                </div>
            </div>
        </div>
    )
}