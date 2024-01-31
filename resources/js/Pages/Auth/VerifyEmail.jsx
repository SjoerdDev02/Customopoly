import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import styles from './styles/Auth.module.css';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <Head title="Email Verification" />

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}

            <form className={`${styles.auth_form} shadow`} onSubmit={submit}>
                <h1>Verify Email</h1>
                <div className={styles.form_group}>
                    <PrimaryButton disabled={processing}>Resend Verification Email</PrimaryButton>

                    <Link href={route('logout')} method="post" as="button">
                        Log Out
                    </Link>
                </div>
            </form>
        </GuestLayout>
    );
}