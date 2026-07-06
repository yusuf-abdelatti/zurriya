import { redirect } from 'next/navigation';

// Fallback: middleware handles locale redirect for /, but this catches any edge case.
export default function RootPage() {
  redirect('/en');
}
