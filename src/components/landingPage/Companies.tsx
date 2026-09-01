import CompaniesClient from "./CompaniesClient"; 

// import company1 from "../../../public/assets/homepage/image 149.webp";
import company2 from "../../../public/assets/homepage/image 150.webp";
import company3 from "../../../public/assets/homepage/bnblogo.webp";
import company4 from "../../../public/assets/homepage/image 152.webp";
import company5 from "../../../public/assets/homepage/PatronPal logo.webp";
import company6 from "../../../public/assets/homepage/image 181.webp";
import company7 from "../../../public/assets/homepage/image 182.webp";

const getCompanies = async () => {
  return [
    // company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
  ];
};

const Companies = async () => {
  const companies = await getCompanies(); 

  return <CompaniesClient companies={companies} />;
};

export default Companies;
