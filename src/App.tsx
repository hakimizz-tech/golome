import { Switch, Route } from "wouter";
import { queryClient } from "@/lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ParallaxProvider } from 'react-scroll-parallax'; // Import the provider
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Newsletter from "@/pages/Newsletter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Bags from "./pages/Bags";
import AllProducts from "./pages/AllProducts";
import ProductDetail from "./pages/ProductDetail";
import Story from "./pages/Story";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/our-story" component={Story} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/bags" component={Bags} />
      <Route path="/products" component={AllProducts}/>
      <Route path="/product/:id" component={ProductDetail} />

      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ParallaxProvider> {/* Wrap your app with ParallaxProvider */}
          <Toaster />
          <Router />
        </ParallaxProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
