'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  honeypot: z.string().max(0).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const t = useTranslations('Contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;

    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-6 rounded-md border border-green-200">
        <h3 className="text-green-800 font-bold mb-2">{t('success')}</h3>
        <p className="text-green-700">{t('successText')}</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-green-800 underline font-medium">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="hidden">
        <input {...register('honeypot')} tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">{t('name')}</label>
        <input
          {...register('name')}
          className="w-full px-4 py-3 border border-border-custom rounded-md focus:ring-navy focus:border-navy"
        />
        {errors.name && <p className="mt-1 text-xs text-accent">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">{t('email')}</label>
        <input
          {...register('email')}
          className="w-full px-4 py-3 border border-border-custom rounded-md focus:ring-navy focus:border-navy"
        />
        {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2">{t('message')}</label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 border border-border-custom rounded-md focus:ring-navy focus:border-navy"
        />
        {errors.message && <p className="mt-1 text-xs text-accent">{errors.message.message}</p>}
      </div>

      {status === 'error' && <p className="text-sm text-accent">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-navy text-white font-bold py-4 rounded-md hover:bg-ink transition-colors disabled:opacity-50"
      >
        {status === 'loading' ? t('sending') : t('send')}
      </button>
    </form>
  );
}
