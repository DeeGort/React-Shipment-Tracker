import './themes/dark.css';
import { Banner } from './components/sections/banner/banner.tsx';
import { Tracker } from './components/sections/tracker/tracker.tsx';
import { SearchProvider } from './providers/search-provider.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <SearchProvider>
              <Banner />
              <Tracker />
          </SearchProvider>
      </QueryClientProvider>
  );
}

export default App;
