import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/home";
import About from "@/pages/about";
import Programs from "@/pages/programs";
import CorporateSolutions from "@/pages/corporate-solutions";
import Community from "@/pages/community";
import Events from "@/pages/events";
import SuccessStories from "@/pages/success-stories";
import Resources from "@/pages/resources";
import Contact from "@/pages/contact";
import DesignSystem from "@/pages/design-system";
import Apply from "@/pages/apply";
import Portal from "@/pages/portal";
import Blog from "@/pages/blog";
import Retreats from "@/pages/retreats";
import LeadersInLipstick from "@/pages/leaders-in-lipstick";
import ROI from "@/pages/roi";
import ProfessionalExcellence from "@/pages/professional-excellence";
import SalesExcellence from "@/pages/sales-excellence";
import ServicesExcellence from "@/pages/services-excellence";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/programs" component={Programs} />
      <Route path="/corporate-solutions" component={CorporateSolutions} />
      <Route path="/community" component={Community} />
      <Route path="/events" component={Events} />
      <Route path="/success-stories" component={SuccessStories} />
      <Route path="/resources" component={Resources} />
      <Route path="/contact" component={Contact} />
      <Route path="/design-system" component={DesignSystem} />
      <Route path="/apply" component={Apply} />
      <Route path="/portal" component={Portal} />
      <Route path="/blog" component={Blog} />
      <Route path="/retreats" component={Retreats} />
      <Route path="/leadersinlipstick" component={LeadersInLipstick} />
      <Route path="/roi" component={ROI} />
      <Route path="/training-programs" component={Programs} />
      <Route path="/professional-excellence-series" component={ProfessionalExcellence} />
      <Route path="/sales-excellence-series" component={SalesExcellence} />
      <Route path="/services-excellence-series" component={ServicesExcellence} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
