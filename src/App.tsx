import { Switch, Route, Router as WouterRouter } from "wouter";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { Toaster } from "@/components/ui/toaster";
  import { TooltipProvider } from "@/components/ui/tooltip";
  import NotFound from "@/pages/not-found";
  import LandingPage from "@/pages/LandingPage";
  import PrivacyPolicy from "@/pages/PrivacyPolicy";

  const queryClient = new QueryClient();

  function Router() {
    return (
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/privacidade" component={PrivacyPolicy} />
        <Route component={NotFound} />
      </Switch>
    );
  }

  function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base="">
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    );
  }

  export default App;
  