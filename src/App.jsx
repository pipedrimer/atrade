import AboutUs from "./pages/AboutUs";
import { Suspense } from "react";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PricingPage from "./pages/PricingPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import ContactUsPage from "./pages/ContactUsPage";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./components/Dashboard";
import Signup from "./pages/Signup";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Spinner from "./components/Spinner";
import Deposit from "./components/Deposit";
import Withdrawal from "./components/Withdrawal";
import Kycform from "./components/Kycform";
import InvestmentPlans from "./components/Investments";
import TransactionHistory from "./components/Transactionhistory";
import PaymentSummary from "./components/PaymentSummary";
import { DepositProvider } from "./contexts/useDeposit";
import WithdrawalRequest from "./components/WithdrawalRequest";
import { ToastContainer } from "react-toastify";
import KnowYourCustomer from "./pages/KYC";
import MyInvestments from "./components/MyInvestments";
import ProfileSettings from "./components/ProfileSettings";
import OurService from "./pages/ServicePage";
import PasswordReset from "./pages/PasswordReset";
import NewPassword from "./components/NewPassword";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DepositProvider>
    <QueryClientProvider client={queryClient}>
    <ToastContainer position="top-center" autoClose={3000} />
      <BrowserRouter>
        <Suspense fallback={<Spinner/>}>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="About" element={<AboutUs />} />
            <Route path="Services" element={<OurService/>} />
            <Route path="Pricing" element={<PricingPage />} />
            <Route path="Testimonial" element={<TestimonialPage />} />
            <Route path="Faq" element={<FaqPage />} />
            <Route path="Contact" element={<ContactUsPage />} />
            <Route path="Signup" element={<Signup/>} />
            <Route path="Login" element={<Login />} />
            <Route path="Reset" element={<NewPassword/>}/>
            <Route path="password-reset" element={<PasswordReset/>}/>
            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="dashboard" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="deposit" element={<Deposit/>}/>
              <Route path="payment" element={<PaymentSummary/>}/>
              <Route path="withdraw" element={<Withdrawal/>}/>
              <Route path="kyc"  element={<KnowYourCustomer/>}/>
              <Route path="investments"  element={<InvestmentPlans/>}/>
              <Route path="kycform"  element={<Kycform/>}/>
              <Route path="history"  element={<TransactionHistory/>}/>
              <Route path="withdraw-funds"  element={<WithdrawalRequest/>}/>
              <Route path="my-investments"  element={<MyInvestments/>}/>
              <Route path="profile" element={<ProfileSettings/>}/>
              
              


            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
     </QueryClientProvider>
     </DepositProvider>
  );
}

export default App;
