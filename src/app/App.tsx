import { Toaster } from 'sonner';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HomePage />
      <Footer />
      <Toaster 
        position="top-right"
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(13, 15, 20, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#fff',
            backdropFilter: 'blur(10px)',
          },
        }}
      />
    </div>
  );
}
