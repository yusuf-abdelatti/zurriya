import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zurriya Child Development Center — Registration Form',
  robots: 'noindex,nofollow',
};

export default function IntakeLandingPage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f5f0eb',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: 'Arial, Tahoma, sans-serif',
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '24px',
          boxShadow: '0 4px 40px rgba(0,0,0,0.10)',
          maxWidth: '500px',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: '#1B5E6E',
            color: '#fff',
            padding: '32px 32px 28px',
            textAlign: 'center',
          }}
        >
          {/* Logo */}
          <div style={{ marginBottom: '16px' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo.png"
              alt="Zurriya Child Development Center"
              style={{
                height: '80px',
                width: 'auto',
                margin: '0 auto',
                display: 'block',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.12)',
                padding: '6px',
              }}
            />
          </div>

          {/* English title */}
          <div style={{ fontSize: '18px', lineHeight: 1.3, letterSpacing: '0.2px' }}>
            <span style={{ fontWeight: 900, fontSize: '22px' }}>Zurriya</span>
            {' '}Child Development Center
          </div>

          {/* Arabic title */}
          <div
            style={{
              fontFamily: 'Tahoma, Arial, sans-serif',
              fontSize: '17px',
              fontWeight: 700,
              opacity: 0.88,
              marginTop: '6px',
              direction: 'rtl',
            }}
          >
            مركز <span style={{ fontSize: '19px' }}>ذرية</span> لتنمية الأطفال
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '32px 32px 28px' }}>
          {/* Prompt — EN */}
          <p
            style={{
              fontSize: '14px',
              color: '#444',
              marginBottom: '6px',
              textAlign: 'left',
              direction: 'ltr',
              lineHeight: 1.55,
            }}
          >
            Please choose your preferred language to begin the registration form.
          </p>

          {/* Prompt — AR */}
          <p
            style={{
              fontSize: '14px',
              color: '#444',
              marginBottom: '28px',
              textAlign: 'right',
              direction: 'rtl',
              lineHeight: 1.55,
            }}
          >
            يرجى اختيار اللغة المفضلة لبدء استمارة التسجيل.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Arabic */}
            <Link
              href="/ar/intake"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderRadius: '14px',
                border: '2px solid #1B5E6E',
                background: '#1B5E6E',
                color: '#fff',
                textDecoration: 'none',
                direction: 'rtl',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '18px', fontWeight: 800, fontFamily: 'Tahoma, Arial, sans-serif' }}>العربية</span>
              <span style={{ fontSize: '13px', opacity: 0.78 }}>استمارة التسجيل</span>
            </Link>

            {/* English */}
            <Link
              href="/en/intake"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '18px 24px',
                borderRadius: '14px',
                border: '2px solid #dceaec',
                background: '#f4fafb',
                color: '#1B5E6E',
                textDecoration: 'none',
                direction: 'ltr',
                gap: '12px',
              }}
            >
              <span style={{ fontSize: '18px', fontWeight: 800 }}>English</span>
              <span style={{ fontSize: '13px', color: '#6b8f96' }}>Registration form</span>
            </Link>
          </div>

          <p
            style={{
              marginTop: '24px',
              fontSize: '11px',
              color: '#aaa',
              textAlign: 'center',
              letterSpacing: '0.4px',
            }}
          >
            سري وخاص &nbsp;·&nbsp; Strictly Confidential
          </p>
        </div>
      </div>
    </div>
  );
}
