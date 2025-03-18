
import KycVerification from "../components/Kyc";
import KYCVerified from "../components/KycVerified";
import Spinner from "../components/Spinner";
import { useProfiles } from "../hooks/useProfiles";
import { toast } from "react-toastify";

const KnowYourCustomer = () => {
  const { profiles, loading,error } = useProfiles();

  if (loading) return <Spinner />;
    if (error) {
      toast.error(error);
      return <p className="text-danger">{error}</p>;
  }

  // Handle different KYC status states
  if (profiles.is_kyc === "completed") {
    return <KYCVerified/>
  }

return (<KycVerification/>)
};

export default KnowYourCustomer;
