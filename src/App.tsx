import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ThemeProvider } from '@/components/ui/theme-provider';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';

const App = () => (
  <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
    <TooltipProvider>
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
