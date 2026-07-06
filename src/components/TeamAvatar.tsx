'use client';

import Image from 'next/image';
import { useState } from 'react';

type Props = {
  photo?: string;
  initials: string;
  name: string;
  size?: 'md' | 'lg';
};

export function TeamAvatar({ photo, initials, name, size = 'md' }: Props) {
  const [error, setError] = useState(false);

  const dim      = size === 'lg' ? 'w-24 h-24' : 'w-16 h-16';
  const textSize = size === 'lg' ? 'text-3xl'  : 'text-xl';
  const px       = size === 'lg' ? 96          : 64;

  if (photo && !error) {
    return (
      <div className={`${dim} rounded-full overflow-hidden flex-shrink-0 border-2 border-white/40 bg-white/20`}>
        <Image
          src={photo}
          alt={name}
          width={px}
          height={px}
          className="w-full h-full object-cover object-top"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div className={`${dim} rounded-full bg-white/25 border-2 border-white/40 flex items-center justify-center flex-shrink-0`}>
      <span className={`font-heading ${textSize} text-white`}>{initials}</span>
    </div>
  );
}
