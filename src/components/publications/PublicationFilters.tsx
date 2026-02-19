'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface FilterProps {
  types: any[];
  topics: any[];
  regions: any[];
  years: number[];
}

export default function PublicationFilters({ types, topics, regions, years }: FilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tCommon = useTranslations('Common');
  const t = useTranslations('Publication');

  const updateFilter = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(name, value);
    } else {
      params.delete(name);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="bg-white p-6 border border-border-custom rounded-lg sticky top-24 font-sans">
      <h2 className="text-lg font-bold text-navy mb-6 font-sans">{tCommon('filters')}</h2>

      <div className="space-y-6">
        {/* Search */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate tracking-wider mb-2 font-sans">{t('search')}</label>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            className="w-full px-3 py-2 border border-border-custom rounded-md focus:ring-navy focus:border-navy font-sans"
            onChange={(e) => updateFilter('q', e.target.value)}
            defaultValue={searchParams.get('q') || ''}
          />
        </div>

        {/* Type */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate tracking-wider mb-2 font-sans">{t('type')}</label>
          <select
            className="w-full px-3 py-2 border border-border-custom rounded-md focus:ring-navy focus:border-navy font-sans"
            onChange={(e) => updateFilter('type', e.target.value)}
            value={searchParams.get('type') || ''}
          >
            <option value="">{t('allTypes')}</option>
            {types.map(type => (
              <option key={type.id} value={type.id}>{type.name}</option>
            ))}
          </select>
        </div>

        {/* Topic */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate tracking-wider mb-2 font-sans">{t('topic')}</label>
          <select
            className="w-full px-3 py-2 border border-border-custom rounded-md focus:ring-navy focus:border-navy font-sans"
            onChange={(e) => updateFilter('topic', e.target.value)}
            value={searchParams.get('topic') || ''}
          >
            <option value="">{t('allTopics')}</option>
            {topics.map(topic => (
              <option key={topic.id} value={topic.id}>{topic.name}</option>
            ))}
          </select>
        </div>

        {/* Region */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate tracking-wider mb-2 font-sans">{t('region')}</label>
          <select
            className="w-full px-3 py-2 border border-border-custom rounded-md focus:ring-navy focus:border-navy font-sans"
            onChange={(e) => updateFilter('region', e.target.value)}
            value={searchParams.get('region') || ''}
          >
            <option value="">{t('allRegions')}</option>
            {regions.map(region => (
              <option key={region.id} value={region.id}>{region.name}</option>
            ))}
          </select>
        </div>

        {/* Year */}
        <div>
          <label className="block text-xs font-bold uppercase text-slate tracking-wider mb-2 font-sans">{t('year')}</label>
          <select
            className="w-full px-3 py-2 border border-border-custom rounded-md focus:ring-navy focus:border-navy font-sans"
            onChange={(e) => updateFilter('year', e.target.value)}
            value={searchParams.get('year') || ''}
          >
            <option value="">{t('allYears')}</option>
            {years.map(year => (
              <option key={year} value={year.toString()}>{year}</option>
            ))}
          </select>
        </div>

        <button
          onClick={() => router.push(pathname)}
          className="text-sm text-accent hover:underline font-medium font-sans"
        >
          {t('clearFilters')}
        </button>
      </div>
    </div>
  );
}
