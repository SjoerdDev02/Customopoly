import styles from './Login.module.css';
import { NavLink } from 'react-router-dom';
import { useForm, type FieldValues } from "react-hook-form";
import MainLayout from '../../layouts/MainLayout/MainLayout';

const Login = () => {
    const {
      register,
      formState: { errors, isSubmitting },
      handleSubmit,
      reset
    } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset();
    }

    return (
        <MainLayout>
            <section className={styles.login_container}>
                <h1>Login</h1>
                <form role="form" onSubmit={handleSubmit(onSubmit)}>
                    {errors.email && <p>{String(errors.email.message)}</p>}
                    <label htmlFor="emailLogin">Email adress</label>
                    <input
                        type="email"
                        id="emailLogin"
                        placeholder="name@email.com"
                        {...register("email", {
                          required: "Email is required",
                        })}
                    />
                    {errors.password && <p>{String(errors.password.message)}</p>}
                    <label htmlFor="passwordLogin">Password</label>
                    <input
                        type="password"
                        id="passwordLogin"
                        placeholder="********"
                        {...register("password", {
                          required: "Password is required",
                        })}
                    />
                    <button className='btn' disabled={isSubmitting}>Register</button>
                </form>
                <p>Don't have an account? <NavLink to="/register">Signup</NavLink></p>
            </section>
        </MainLayout>
    );
}

export default Login