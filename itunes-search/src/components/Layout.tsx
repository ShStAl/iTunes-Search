import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <main className="h-screen w-full flex flex-col items-center">
      <Outlet />
    </main>
  )
}
