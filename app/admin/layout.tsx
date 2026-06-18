import './admin.css'

export default function RootAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--admin-bg)', color: 'var(--admin-text)' }}>
      {children}
    </div>
  )
}
