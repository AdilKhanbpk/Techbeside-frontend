import React from 'react';
import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.privacyPolicy;

const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <div className="w-full h-72 md:h-96 flex flex-col items-center bg-gradient-to-r from-black to-indigo-600 justify-center overflow-hidden text-center">
        <h1 className="text-white md:text-6xl text-4xl font-extrabold leading-tight tracking-tight">Privacy Policy</h1>
      </div>

      {/* Last Updated Section */}
      <div className="w-full text-center py-4 bg-gray-200">
        <h2 className="text-lg md:text-xl font-medium text-gray-700">Last Updated: January 1, 2025</h2>
      </div>

      {/* Privacy Policy Content Section */}
      <div className="max-w-[1450px] md:px-5 sm:px-3 px-1 py-4 my-4  mx-4 md:mx-auto">
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed">
        The website ("Site") for TechBeside LLC (“TechBeside”, “We”, “Our”, “Us” or “Company”) was created to provide software development services (the "Services"). <br/><br/>
        The privacy of our Site visitors ("you," "your," or "user") is important to us, and in order to protect your personal information, we have implemented the following Privacy Policy with provisions that apply to the collection of data by TechBeside, its subsidiaries, and its affiliates. <br/><br/>
        Our Privacy Policy discloses the type and nature of information we collect and how we use it, as well as the choices you can make about the way your information is collected and used. We also explain how any requests for personal or personally identifiable information will be used. By exploring and using TechBeside’ Site and/or Services, and by submitting information to TechBeside, you signify acceptance to the terms of our Privacy Policy.<br/><br/>

        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">‍Updates and Changes to the Privacy Policy</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed">
        In the event of a change in this policy, a revised Privacy Policy will be posted to our Website, and the “Updated” date will be changed. If the revised Privacy Policy contains a material change to how we collect or use personal information, notice of the change will be emailed to you or posted on the Website’s home page.<br/><br/>
        Please revisit this page to familiarize yourself with changes to the Privacy Policy. You agree to accept posting of a revised Privacy Policy as described herein as actual notice to you of such revised Privacy Policy. Your continued use of the Services after such posting constitutes the collection and use of your information as described in the then-current Privacy Policy. 
        </p>
        

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">‍Information We Collect</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed">
        We are required by law, regulation or securities reasons to ask for certain personal information in order to provide our Services to you. TechBeside makes commercially reasonable best efforts to maintain the confidentiality, integrity and security of our clients’ personal information. <br/><br/>
        You may choose to provide additional information during subsequent visits to the Site, but keep in mind that some of this information will be required if you wish to partake in the Services.<br/><br/>
        When visiting our website, we also store every instance of access in a log file and therefore, the following Data are stored in this process:
        </p>
        <ul className="list-inside list-disc text-lg text-gray-700 ml-6">
          <li>Computer or mobile device information</li>
          <li>Website from which our domain is accessed and website usage information</li>
          <li>Operating system of your computer</li>
          <li>Country from which our website is accessed</li>

          <li>Name of your internet provider</li>
          <li>Name and URL of the Data accessed</li>
          <li>Date and time of access</li>
          <li>IP address of the accessing computer</li>
        </ul>

  
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed mt-5">
        Keeping client information secure, and using it only as our Users want us to, are matters of principle for all of us at TechBeside. With this in mind, here is our commitment to each and every User: 
        </p>

        {/* <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Third-party Service Providers</h3>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We may share your data with trusted and reputable third-party service providers for the development and maintenance of the platform. These include:
        </p> */}
        <ul className="list-inside list-disc text-lg text-gray-700 ml-6">
          <li>Except as you may otherwise expressly approve, we will limit the collection and use of client and user information to what we believe would be useful to service your accounts, administer our business, or to tell you about our Services.</li>
          <li>We will restrict employee access to client and user information to those who need to know in order to provide Services to you.</li>
          <li>We will educate our employees according to our internal policies to reinforce the importance of confidentiality and client and user privacy.</li>
          <li>We will maintain commercially reasonable and customary security standards and procedures to protect information about you.</li>
          <li>We will respond quickly to your request to correct inaccurate information.</li>
        </ul>
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed mt-5">
        TechBeside will also gather the names and email addresses of users who contact us through the Site with questions about our company or lending platform. We collect this information for the sole purpose of responding to such inquiries and do not store the contact information unless requested to do so, as in the case of job applicants who submit resumes.<br/><br/>
        Any data including, but not limited to, your name, address, telephone number, e-mail address and biometric information submitted to TechBeside during identity verification process is handled securely by our third-party, specialist identity verification provider. TechBeside retains an ID and status of the process for our information and does NOT store, or use, any of the personally identifiable information (PII) submitted as part of that process.
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">How and Why We Gather Information</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed">
        When you register for an account for the Services or at any later time, we collect certain personal information from you to open an account, transact business, communicate with you, verify your identity and fulfill legal and regulatory requirements. We call this your “Profile.” From time to time, we may request additional information (e.g., through surveys) to help us further assess your needs and preferences. <br/><br/>
        If you choose to provide such information, during registration or otherwise, you are giving TechBeside the permission to use and store it consistent with this Privacy Policy. We may also obtain your personal information from your transactions with us or other Users through the Services, or from third parties such as credit reporting agencies. If we combine or associate information from other sources with personal information that you provide directly to us through or in connection with the Services, we will treat the combined information as personal information in accordance with this Privacy Policy. 
        </p>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Cookies</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed">
        When you visit the Website, whether or not you register for an account, we may send one or more cookies. 
        <ul className="list-inside list-disc text-lg text-gray-700 ml-6">
          <li>“Cookies” are small text files containing a string of alphanumeric characters that may be placed on your web browser. Cookies make it easier for you to navigate our Website by, among other things, “remembering” your identity so that you do not have to input your password multiple times as you navigate between web pages on the Website and/or as you access the Services. This use of cookies for authentication (i.e., verifying that you are who you say you are) is an essential component of site security. You can set your web browser to inform you when cookies are set or to prevent cookies from being set.</li>
          <li>A “web beacon” is typically a transparent graphic image (usually 1 pixel x 1 pixel) that is placed on a site or in an email which allows the website to record the simple actions of the user opening the page that contains the beacon. </li>
          <li>“Server logs” can be either a single log file or several log files automatically created and maintained by a server of activity performed by the server, which can include information about any transaction you conduct with the server. 
          </li>
        </ul><br/><br/>
        Please note that if you decline to use cookies, you may experience reduced functionality or slower site response times. Declining to use our authentication-related cookies may prevent you from using the Website altogether. <br/><br/>
        We or our service providers may also collect web surfing data related to your use of the Services (e.g., information regarding which of our web pages you access, the frequency of such access, and your product and service preferences). This may be accomplished by using cookies, web beacons, page tags or similar tools. Such web surfing data may include your Internet Protocol (IP) address, browser type, internet service provider (ISP), referring or exit pages, click stream data, operating system and the dates and times that you visit the Website. Web surfing data and similar information may be used for administrative purposes; to assess the usage, value and performance of our online products and services; and to improve your experience with the Services.
        </p>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>Social Media Services</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>You can log in to the Website using social media services such as Google. These services will authenticate your identity and provide you the option to share certain personal information with us such as your name and email address to pre-populate our sign up form. <br/><br/>
          Our Website may also include social sharing features for common social networks. These features are interactive mini-programs and may collect your IP address and the page you are visiting on our site. They may set a cookie to enable the feature to function properly. Social media features and widgets are either hosted by a third party or hosted directly on our website. Your interactions with these features are governed by the privacy policy of the company providing them.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>Notifications and Communications</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>TechBeside will send you email notifications from time to time. Some notifications are required elements of your transactions on our platform, such as confirmations of particular actions you have taken. These mandatory notices are sent typically to notify you of a change in status. For example, you will receive a notice when your account is confirmed. <br/><br/>
          We also send out notices that are required for legal or security purposes. For example, certain notifications are sent for your own protection to ensure that another person cannot make a change to your account without your knowledge. In other cases, these notifications involve changes to various legal agreements or Site policies. Generally, you may not opt out of such service-related emails.<br/><br/>
          When you register an account, you will receive emails that confirm specific actions you requested. These will include emails to which you must respond to complete your registration and notifications confirming your registration. When you register an account and opt-in to TechBeside’s SMS Communications program, you are consenting to receive text messages sent by an automatic telephone dialing system and acknowledge that data usage charges may apply by your cell phone company. You may receive text messages regarding system notifications, updates, and special offers and promotions, and can manage your opt-in status in your user profile.<br/><br/>
          We may also send you responses to emails you send us, if appropriate. From time to time, we will also send user surveys, requests for user feedback regarding user experience and Site operations, or marketing offers from us or from us on behalf of our marketing partners. Completing these surveys, answering requests for feedback, or accepting any offer is strictly voluntary.<br/><br/>
          TechBeside will never send you an email asking you for your login information. In general, you can protect yourself against phishing by never providing personal or login information via a link contained in an email; instead, go the website directly. You might also make it a habit to check the URL of a website to be sure that it begins with the correct domain.<br/><br/>
          We will never share your personal information with third parties or affiliates under any circumstances. By opting in, you agree to receive communications from us via SMS and direct call, but your information will remain secure and confidential
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>Opt-out Policy</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>We may at times send you email communications with marketing or promotional materials. If you prefer not to receive such marketing or promotional emails from us, you may unsubscribe at any time. Please note that opt-out requests may take up to twenty-four (24) hours to process. 
           <br/><br/>
          Please also note that at times we may need to send you email communications that are transactional in nature, such as service or termination announcements or payment confirmations. You will not be able to opt-out of these communications. 
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>Information Security</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>We use commercially reasonable security technologies and procedures to help protect your personal information from unauthorized access, use or disclosure. However, we cannot guarantee the complete safety of your information. It is your responsibility to keep your information confidential.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>‍Security Notifications</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>If we learn of a security systems breach, then we may attempt to notify you electronically so that you can take appropriate protective steps. We may also post a notice on or through the Site in the event of a security breach. Depending on where you live, you may have a legal right to receive notice of a security breach in writing.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>Where You Can View and Correct Your Information</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>We urge you to review your information regularly to ensure that it is correct and complete. If you believe that any of your information is incorrect, or if you have any questions regarding this Privacy Policy, please contact us at contact@techbeside.dev.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>Links to Other Sites</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>If you follow any links that direct you away from the Site, this privacy policy will not apply to your activity on the other websites you visit. We do not control the privacy policies or the privacy practices of any third parties.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>International Visitors</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>The Services may be accessed and/or used by Users located outside Australia in accordance with our Terms of Use and other policies and procedures posted on the Website. If you choose to use the Services from the European Union (EU), the United States, or other regions of the world with laws governing data collection and use that may differ from Australian law, then please note that you are transferring your personal information outside of those regions to Australia. By providing your personal information on or through the Services, you consent to that transfer.
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-semibold text-indigo-600 mb-4'>Children’s Privacy Policy</h2>
          <p className='md:text-lg text-base text-gray-700 mb-6 leading-relaxed'>The TechBeside website is not intended for use by children, especially those under eighteen (18) years of age. No one under eighteen (18) years of age is allowed to use the website, provide any personal information or receive our email distributions. We do not knowingly solicit or collect Personally Identifiable Information from children under eighteen years of age. If you believe that a minor has disclosed Personally Identifiable Information to TechBeside, please report this to us at: contact@techbeside.dev
          </p>
        </div>

        <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Contact Us</h3>
        <p className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed">
          If you have any questions about this Privacy Policy or need assistance with your personal data, please contact us at:
        </p>
        <div className="md:text-lg text-base text-gray-700 mb-6 leading-relaxed">
          <strong>Email:</strong> <a href="mailto:contact@techbeside.dev" className="text-blue-600 hover:underline">contact@techbeside.dev</a><br />
          <strong>Phone:</strong> <a href="tel:+13213646803" className="hover:underline">
                      +923178261618
                    </a><br />
          <strong>Address:</strong> TechBeside Software Company, 123 Tech Lane, Orlando, FL, USA
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
