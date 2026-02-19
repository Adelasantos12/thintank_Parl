'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useTranslations } from 'next-intl';

export default function ContactForm() {
  const t = useTranslations('Contact');

  const contactSchema = z.object({
    name: z.string().min(2, t('nameRequired')),
    email: z.string().email(t('invalidEmail')),
    message: z.string().min(10, t('messageMin')),
    honeypot: z.string().max(0).optional(),
  });

  type ContactFormData = z.infer<typeof contactSchema>;

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
        throw new Error(errorData.message || t('genericError'));
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-6 rounded-none border border-green-200 font-sans">
        <h3 className="text-green-800 font-bold mb-2">{t('success')}</h3>
        <p className="text-green-700">{t('successText')}</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-green-800 underline font-medium font-sans">
          {t('sendAnother')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 font-sans">
      <div className="hidden">
        <input {...register('honeypot')} tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2 font-sans">{t('name')}</label>
        <input
          {...register('name')}
          className="w-full px-4 py-3 border border-border-custom rounded-none focus:ring-navy focus:border-navy font-sans"
        />
        {errors.name && <p className="mt-1 text-xs text-accent font-sans">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2 font-sans">{t('email')}</label>
        <input
          {...register('email')}
          className="w-full px-4 py-3 border border-border-custom rounded-none focus:ring-navy focus:border-navy font-sans"
        />
        {errors.email && <p className="mt-1 text-xs text-accent font-sans">{errors.email.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-bold text-navy uppercase tracking-widest mb-2 font-sans">{t('message')}</label>
        <textarea
          {...register('message')}
          rows={5}
          className="w-full px-4 py-3 border border-border-custom rounded-none focus:ring-navy focus:border-navy font-sans"
        />
        {errors.message && <p className="mt-1 text-xs text-accent font-sans">{errors.message.message}</p>}
      </div>

      {status === 'error' && <p className="text-sm text-accent font-sans">{errorMessage}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-navy text-white font-bold py-4 rounded-none hover:bg-ink transition-colors disabled:opacity-50 font-sans"
      >
        {status === 'loading' ? t('sending') : t('send')}
      </button>
    </form>
  );
}
