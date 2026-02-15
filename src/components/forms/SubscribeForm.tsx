'use client'

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const subscribeSchema = z.object({
  email: z.string().email('Invalid email address'),
  honeypot: z.string().max(0).optional(),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export default function SubscribeForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const { register, handleSubmit, reset, formState: { errors } } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    if (data.honeypot) return;
    setStatus('loading');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        throw new Error('Error');
      }
    } catch (_err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className="text-sm text-green-600 font-medium">Thank you for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
      <div className="hidden">
        <input {...register('honeypot')} tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          {...register('email')}
          type="email"
          placeholder="your@email.com"
          className="flex-grow px-4 py-2 border border-border-custom rounded-none focus:ring-navy focus:border-navy text-sm"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-navy text-white px-6 py-2 rounded-none hover:bg-ink text-sm font-bold transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </div>
      {errors.email && <p className="mt-1 text-xs text-accent">{errors.email.message}</p>}
      {status === 'error' && <p className="mt-1 text-xs text-accent">Something went wrong. Please try again.</p>}
    </form>
  );
}
