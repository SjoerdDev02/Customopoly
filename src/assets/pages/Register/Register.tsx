import styles from './Register.module.css';
import { NavLink } from 'react-router-dom';
import { FieldValues, useForm } from "react-hook-form";
import MainLayout from '../../layouts/MainLayout/MainLayout';

const Register = () => {
    const {
      register,
      formState: { errors, isSubmitting },
      handleSubmit,
      watch,
      reset
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset();
    }

    return (
        <MainLayout>
            <section className={styles.register_container}>
                <h1>Signup</h1>
                <form role="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.formGroup}>
                        {errors.email && <p>{String(errors.email.message)}</p>}
                        <label htmlFor='emailRegister'>Email adress</label>
                        <input 
                            type='email'
                            id='emailRegister'
                            placeholder='name@email.com'
                            {...register('email', {
                            required: "Email is required",
                            })}
                        />
                    </div>
                    {errors.firstName && <p>{String(errors.firstName.message)}</p>}
                    {errors.lastName && <p>{String(errors.lastName.message)}</p>}
                    <div className={styles.formBundle}>
                        <div className={styles.formGroup}>
                            <label htmlFor='firstNameRegister'>First Name</label>
                            <input 
                                type='text'
                                id='firstNameRegister'
                                placeholder='John'
                                {...register('firstName', {
                                required: "Firstname is required",
                                })}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor='lastNameRegister'>Last Name</label>
                            <input 
                                type='text'
                                id='lastNameRegister'
                                placeholder='Smith'
                                {...register('lastName', {
                                required: "Lastname is required",
                                })}
                            />
                        </div>
                    </div>
                    {errors.password && <p>{String(errors.password.message)}</p>}
                    {errors.passwordConfirm && <p>{String(errors.passwordConfirm.message)}</p>}
                    <div className={styles.formBundle}>
                        <div className={styles.formGroup}>
                            <label htmlFor='passwordRegister'>Password</label>
                            <input 
                                type='password'
                                id='passwordRegister'
                                placeholder='********'
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must have at least 6 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z]).{6,}$/,
                                        message: "Password must contain at least one uppercase letter"
                                    }
                                })}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor='passwordConfirmRegister'>Password Confirm</label>
                            <input 
                                type='password'
                                id='passwordConfirmRegister'
                                placeholder='********'
                                {...register('passwordConfirm', {
                                    required: "Password confirmation is required",
                                    validate: (value) =>
                                        value === watch('password') || "Passwords do not match",
                                })}
                            />
                        </div>
                    </div>
                    <button className='btn' disabled={isSubmitting}>Create Account</button>
                </form>
                <p>Already have an account? <NavLink to='/login'>Login</NavLink></p>
            </section>
        </MainLayout>
    );
}

export default Register