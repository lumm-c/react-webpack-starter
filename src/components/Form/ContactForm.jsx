import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as styles from '@/components/Form/ContactForm.module.scss';
import emailjs from '@emailjs/browser';
import CryptoJS from 'crypto-js';

// 從環境變數中讀取加密密鑰
const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

const ContactForm = () => {

    const [isSending, setIsSending] = useState(false); // 用於追蹤是否正在發送郵件

    // 定義表單初始狀態
    const initialFormData = {
        name: '',
        email: '',
        serviceItem: '',
        projectDetails: ''
    };

    const [formData, setFormData] = useState(initialFormData);

    // 使用 useForm hook 來管理表單
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: formData  // 使用初始狀態來填充表單
    });

    // Step 1: 從 sessionStorage 加載加密數據
    useEffect(() => {
        const savedData = sessionStorage.getItem('contactForm');
        if (savedData) {
            const bytes = CryptoJS.AES.decrypt(savedData, SECRET_KEY);
            const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setFormData(decryptedData);
            reset(decryptedData);  // 重設表單數據
        }
    }, [reset]);

    // Step 2: 當表單數據變更時，更新 formData 並加密存儲到 sessionStorage
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const updatedFormData = {
            ...formData,
            [name]: value,
        };
        setFormData(updatedFormData);  // 更新狀態

        // 加密後保存到 sessionStorage
        const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(updatedFormData), SECRET_KEY).toString();
        sessionStorage.setItem('contactForm', encryptedData);
    };

    // 表單提交處理
    const onSubmit = (data) => {
        setIsSending(true); // 開始發送，設置 loading 狀態

        // EmailJS 發送邏輯
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            service: data.serviceItem,
            message: data.projectDetails,
        };

        emailjs
            .send(
                process.env.EMAILJS_SERVICE_ID,  // 使用環境變數中的 Service ID
                process.env.EMAILJS_TEMPLATE_ID,  // 使用環境變數中的 Template ID
                templateParams,
                process.env.EMAILJS_PUBLIC_KEY  // 使用環境變數中的 Public Key
            )
            .then(
                (response) => {
                    console.log('Email sent successfully!', response.status, response.text);
                    alert('Your message was sent successfully!');

                    // 清除表單和 sessionStorage
                    sessionStorage.removeItem('contactForm');
                    setFormData(initialFormData);  // 重置 formData 狀態
                    reset(initialFormData);  // 重置 React Hook Form 狀態

                    setIsSending(false); // 發送完成，重置 loading 狀態
                },
                (error) => {
                    console.log('Failed to send email...', error);
                    alert('There was an error sending your message.');
                    setIsSending(false); // 發送失敗，重置 loading 狀態
                }
            );
    };

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Your Name"
                    value={formData.name}  // 綁定到狀態
                    onChange={handleInputChange}  // 監聽變更
                />
                {errors.name && <p className={styles.errorText}>{errors.name.message}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: 'Enter a valid email',
                        },
                    })}
                    placeholder="Your Email"
                    value={formData.email}  // 綁定到狀態
                    onChange={handleInputChange}  // 監聽變更
                />
                {errors.email && <p className={styles.errorText}>{errors.email.message}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="serviceItem">Service Items</label>
                <select
                    {...register('serviceItem', { required: 'Please select a service item' })}
                    value={formData.serviceItem}  // 綁定到狀態
                    onChange={handleInputChange}  // 監聽變更
                >
                    <option value="">Select a service</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="consultation">Consultation</option>
                </select>
                {errors.serviceItem && <p className={styles.errorText}>{errors.serviceItem.message}</p>}
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="projectDetails">Project Details</label>
                <textarea
                    {...register('projectDetails', { required: 'Project details are required' })}
                    placeholder="Describe your project"
                    value={formData.projectDetails}  // 綁定到狀態
                    onChange={handleInputChange}  // 監聽變更
                ></textarea>
                {errors.projectDetails && <p className={styles.errorText}>{errors.projectDetails.message}</p>}
            </div>
            <button type="submit" className={styles.submitButton}>
                {isSending ? 'Sending...' : 'Submit'}
                <img src={require(`@/assets/icons/Submit.svg`)} alt="Submit" className={styles.submitIcon} />
            </button>
        </form>
    );
};

export default ContactForm;