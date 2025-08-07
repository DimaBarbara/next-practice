'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

export interface LogoUploaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function LogoUploader({ label, placeholder, id, ...rest }: LogoUploaderProps) {
  return (
    <div className="flex gap-10 mb-3">
      {label && <p className="text-base text-gray-900">{label}</p>}

      <label
        htmlFor={id}
         className={clsx(
          'flex flex-col items-center justify-center w-40 h-40 bg-white border border-slate-900 border-dashed cursor-pointer rounded-full',
        )}
      >
        <Image
          className="mb-1"
          width={48}
          height={48}
          src="/icons/upload.svg"
          alt="upload"
        />
        {placeholder && (
          <p className="text-base text-gray-500 text-center">{placeholder}</p>
        )}

        <input
          {...rest}
          id={id}
          type="file"
          accept="image/*"
          className="hidden"
        />
      </label>
    </div>
  );
}

