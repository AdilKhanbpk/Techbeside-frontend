import React from 'react';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.termsConditions;

const TermsAndConditionsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50">

      {/* Background Image Section */}
      <div className="w-full h-72 md:h-96 flex flex-col items-center bg-gradient-to-r from-black to-indigo-600 justify-center overflow-hidden text-center">
        <h1 className="text-white md:text-6xl text-4xl font-extrabold leading-tight tracking-tight">Terms and Conditions</h1>
      </div>

      {/* Last Updated Section */}
      <div className="w-full text-center py-6 bg-gray-100">
        <h2 className="text-lg md:text-xl font-medium text-gray-700">Last Updated: January 1, 2025</h2>
      </div>

      {/* Terms and Conditions Content Section */}
      <div className="max-w-[1450px] md:px-5 px-4 py-4 my-4 text-lg">
        <p className="md:text-lg text-base text-gray-700 mb-6">
          <strong className="text-2xl font-semibold text-indigo-600 mb-3"> Website Usage Terms</strong><br />
          These Terms and Conditions govern your access to and use of our websites, including those available through <strong>www.TechBeside.co,</strong> along with any associated services, features, or resources provided on or linked through our sites. This includes, but is not limited to, accessing information, registering in our database, subscribing to newsletters, receiving promotional emails, or engaging with related links (collectively referred to as "our Sites"). By visiting or using any part of our Sites, you confirm that you understand and agree to abide by these Terms and Conditions, as well as all relevant laws and regulations that apply to the use of our services.
        </p>

        <p className="md:text-lg text-base text-gray-700 mb-6">
        We reserve the right to change these Terms and Conditions at any time, effective immediately upon posting on our Sites. If you violate these Terms and Conditions, we may terminate your use of the Sites, bar you from future use of the Sites, and/or take appropriate legal action against you.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4"> COPYRIGHT AND TRADEMARK NOTICE</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6">
        The contents of all material available on our Sites are copyrighted by TechBeside unless otherwise indicated. All rights are reserved and content may not be reproduced, downloaded, disseminated, or transferred, in any form or by any means, except with the prior written agreement of TechBeside or as indicated below.
        </p>

        <p className="md:text-lg text-base text-gray-700 mb-6">
        <strong>Permitted Use:</strong> You are allowed to download pages or other content from our Sites solely for your personal use on a single device. However, no part of this content may be copied, reproduced, redistributed, or shared in any form or by any means without obtaining prior written consent from TechBeside and providing proper credit to us. By accessing our Sites, you agree that your rights are limited to viewing, visiting, and keeping a personal copy of the content for non-commercial use. Any duplication, downloading, publishing, modification, or sharing of the materials for purposes other than personal use is strictly prohibited unless explicitly authorized by TechBeside.
        </p>

        <p className="md:text-lg text-base text-gray-700 mb-6">
        You also agree not to deep-link to the site for any purpose, unless specifically authorized by us to do so. 
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">GENERAL LEGAL NOTICE AND LIABILITY DISCLAIMER</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6">
        We make available our Sites and the information and services contained herein “as is.” While TechBeside makes every effort to present accurate and reliable information on our Sites, TechBeside does not endorse, approve, or certify such information, nor does it guarantee the accuracy, completeness, efficacy, or timeliness of such information. Use of such information is voluntary, and reliance on it should only be undertaken after an independent review by qualified experts. 
        </p>

        <p className="md:text-lg text-base text-gray-700 mb-6">
        Reference herein to any specific commercial product, process, or service does not constitute or imply endorsement, recommendation, or favoring by TechBeside.
        </p>

        <p className="md:text-lg text-base text-gray-700 mb-6">
        At certain places on this site, live “links” to other websites can be accessed. Such external sites contain information created, published, maintained, or otherwise posted by institutions or organizations independent of TechBeside. TechBeside does not endorse, approve, certify, or control these external sites and does not guarantee the accuracy, completeness, efficacy, or timeliness of information located at such sites. Use of any information obtained from such sites is voluntary, and reliance on it should only be undertaken after an independent review by qualified experts.

        </p>

        <p className="md:text-lg text-base text-gray-700 mb-6">
        TechBeside assumes no responsibility for consequences resulting from the use of the information contained herein, or from the use of the information obtained at linked sites, or in any respect for the content of such information. TechBeside is not responsible for, and expressly disclaims all liability for, damages of any kind arising out of use, reference to, reliance on, or performance of such information.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4"> SEVERABILITY</h3>
        <p className="md:text-lg text-gray-700 text-base mb-6">
        The invalidity or unenforceability of any particular provision of this Policy shall not affect the remaining provisions hereof, and this Policy shall be construed in all respects as if such invalid or unenforceable provision had been omitted.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4"> Contact Us</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6">
        If you have any questions regarding these terms and conditions, please send contact via: 
        </p>
        <div className="md:text-lg text-base text-gray-700 mb-6">
          <strong>Email:</strong> <a href="mailto:contact@techbeside.dev" className="text-blue-600">contact@techbeside.dev</a><br />
          <strong>Phone:</strong>  <a href="tel:+13213646803" className="hover:underline">
                      +1(321)364-6803
                    </a><br />
          <strong>Address:</strong> TechBeside Software Company, 123 Tech Lane, Orlando, FL, USA
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
