'use client';

import React, { useEffect, useState } from 'react';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

type CurrencyProps = {
  value: string | number;
};

export default function Currency({ value }: CurrencyProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div className='font-semibold'>{formatter.format(Number(value))}</div>;
}
