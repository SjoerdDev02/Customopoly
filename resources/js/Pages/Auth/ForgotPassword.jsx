import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm } from '@inertiajs/react';
import styles from './styles/Auth.module.css';
import InputLabel from '@/Components/InputLabel';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {status && <div>{status}</div>}

            <form className={`${styles.auth_form} shadow`} onSubmit={submit}>
                <h1>Password forgotten</h1>
                <div className={styles.form_group}>
                    <InputLabel htmlFor="email" value="Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one." />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} />
                </div>

                <div className={styles.auth_cta}>
                    <div></div>
                    <PrimaryButton disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
