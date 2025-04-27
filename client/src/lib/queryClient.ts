import { QueryClient, QueryFunction, QueryKey } from "@tanstack/react-query";

// Mock data for static display
const mockUserData = {
  id: 1,
  fullName: "Marry Doe",
  email: "Marry@Gmail.Com",
  phone: "123-456-7890",
  company: "PopX Agency",
  isAgency: true,
  bio: "Lorem ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam",
  profileImage: null
};

// Simplified mock version for static demo
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Mock successful response for static pages
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

// Create a static query client with mock data
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: ({ queryKey }) => {
        // For user queries - return mock user data
        if (String(queryKey[0]).includes('/api/users')) {
          return Promise.resolve(mockUserData);
        }
        return Promise.resolve(null);
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
