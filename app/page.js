
import Image from 'next/image'
import Navbar from './components/navbar'
import SliderPerview from './components/carousel/carousel'
import backgroundImage from "../public/images/background1.png";
import FAQs from './components/FAQ/faq';
import Link from 'next/link';
import ExitModal from './components/Modal/exit-modal';
import ContactButton from './components/Contact/contact-button';
import ContactButton2 from './components/Contact/contact-button2';
export default function Home() {
  const taxDome = "https://mertzinternationallimited.taxdome.com/app/settings/organizer_templates/90212/edit?return_url=https%3A%2F%2Fmertzinternationallimited.taxdome.com%2Fapp%2Fsettings%2Forganizer_templates"
  const facebook = "https://www.facebook.com/mertzinternational"
  const linkin = "https://www.linkedin.com/company/mertz-international-limited/"
  return (
    <main>
      <Navbar/>
      <section id='section1' style={{
        background: `linear-gradient(0deg, rgba(0, 33, 71, 0.85) 0%, rgba(0, 33, 71, 0.85) 100%), url("${backgroundImage.src}"), lightgray 50% / cover no-repeat`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        }}  className='flex flex-col items-start w-full h-full lg:p-20 py-20 px-4' >
        <div className=' lg:py-40' >
          <p id='heading' className=' lg:w-8/12 lg:text-6xl text-3xl'>
            Streamline your <br/>Cross-border Taxes, <br/>Maximize Savings, and Embrace your Expat Life
          </p>
          <p id='text1' className='lg:mt-10 lg:w-4/12 lg:text-2xl text-sm mt-5'>
            2 Countries in 1 Tax Preparation for US Expats: Simplify, Save, and Stay Compliant.
          </p>

          <p id='text2' className='lg:mt-10 lg:w-5/12 lg:text-3xl sm:text-lg mt-5'>
            Start Your Simplified Expat Tax Journey!
          </p>

          <div className='flex flex-row lg:justify-start sm:justify-between'>
            <Link href={taxDome} id='button1'type="button"  className="px-5 py-3 mt-10 mr-5 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" style={{backgroundColor:"#BB133E"}}>
              Get Started
            </Link>
            <Link href={"#section2"} id='button2' type="button" className="px-5 py-3 mt-10 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
              Learn More
            </Link>
          </div>
        </div>
        
      </section>
      <section className='flex flex-col items-center w-full h-full bg-white lg:p-20 py-20 px-4' id='section2'>
          <p className=' lg:w-5/12 lg:text-6xl text-3xl' >
            What is the 2-in-1 Tax Preparation Services?
          </p>
          <p className='lg:mt-10 lg:w-8/12 lg:text-2xl  font-normal sm:text-lg mt-5'>
          Say goodbye to the complexities of coordinating with separate tax professionals in different countries.<br/><br/> With us, you'll have a dedicated expert handling your tax obligations for both the US and your country of residence, all consolidated into a single, streamlined process. Experience the convenience of a unified checklist, a sole point of contact, and a straightforward payment structure, ensuring a stress-free and efficient tax journey.
          </p>
      </section>
      <section className='flex flex-col items-center w-full h-full bg-white lg:p-20 py-20 px-4 ' id='section3'>
          <p className=' lg:w-5/12 lg:text-6xl text-3xl text-center' >
          What Should You Expect
          </p>
          <div className='flex flex-col lg:flex-row  w-full justify-between mt-20'>
            <div className='flex flex-col justify-center items-center  lg:w-96 sm:w-full mb-10'>
              <Image
                alt='icon'
                src={"images/icons/message-icon.svg"}
                width={45}
                height={45}
              />
              <div className=' sm:text-sm  lg:text-4xl section3-title m-7 text-center'>
                Sole Interaction
              </div>
              <div className='section3-text text-center' id=''>
              Experience seamless tax preparation: Only deal with MIL for both US and your country of residence.
              </div>
            </div>
            <div className='flex flex-col justify-center items-center  lg:w-96 sm:w-full mb-10'>
              <Image
                alt='icon'
                src={"images/icons/paper-icon.svg"}
                width={45}
                height={45}
              />
              <div className='sm:text-sm  lg:text-4xl section3-title m-7 text-center'>
              Single Checklist
              </div>
              <div className='section3-text text-center' id=''>
              Simplify your process with one comprehensive checklist, ensuring all your tax needs are met effortlessly.
              </div>
            </div>
            <div className='flex flex-col justify-center items-center  lg:w-96 sm:w-full mb-10'>
              <Image
                alt='icon'
                src={"images/icons/percent-gear-icon.svg"}
                width={45}
                height={45}
              />
              <div className='sm:text-sm  lg:text-4xl section3-title m-7 text-center'>
                Single Payment
              </div>
              <div className='section3-text text-center' id=''>
                Make a single payment for services, eliminating hassle and confusion.
              </div>
            </div>
          </div>
          <Link href={taxDome} id='button2' type="button" className="px-5 py-4 mt-24 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
            Work With Us
          </Link>
      </section>
      <section className='flex flex-col lg:flex-row justify-between items-center lg:items-start  w-full h-full bg-white lg:p-20 pt-20 px-4' id='section4'>
        <Image quality={50} alt='mertz' width={700} height={400} className="hidden lg:block"
              style={{height:'70vh',width:'30vw',objectFit:'cover'}}
              src={"/images/mertz.png"}
          />
        <Image quality={50} alt='mertz' width={700} height={400} className="lg:hidden"
            style={{height:'30vh',width:'150%',objectFit:'cover'}}
            src={"/images/mertz.png"}
        />
        <div className='flex flex-col w-full lg:w-8/12 lg:m-10 m-20'>
            <div className='title lg:text-6xl text-4xl' >
              Meet our Founder
            </div>
            <p className='text lg:mt-10  lg:text-1xl  font-normal sm:text-lg mt-5 '>
              Guided by Michael A. Mertz, a seasoned CPA with a solid corporate background in leading accounting firms like Ernst & Young and PwC, boasting 15 years specializing in expat tax, and having lived abroad for over 25 years across 15 countries, we at MIL are committed to optimizing the finances of US expats worldwide.<br/><br/>

              Our expertise in navigating diverse tax and business regulations globally enables us to offer unparalleled insights into expat-tax-related matters.<br/><br/>

              With a keen focus on our 2-in-1 Tax Preparation Service, we channel this extensive experience to streamline your cross-border taxes. Our founder's proficiency in navigating international tax nuances ensures a highly personalized and fulfilling experience for each client, all geared toward maximizing your savings through strategic tax planning.<br/><br/>

              At MIL, we're dedicated to simplifying expat life by optimizing your finances with our comprehensive 2-in-1 Tax Preparation Service.<br/><br/>
            </p>
        </div>
      
      </section>
      <section className='flex flex-col items-center w-full h-full bg-white lg:p-20 py-20 px-4' id='section5'>
          <p className=' lg:w-5/12 lg:text-6xl text-3xl text-center' >
            $1,000,000+ Tax Savings
          </p>
          <p className='text lg:w-5/12 lg:text-sm text-sm text-center mt-10' >
            Our team managed to save $1,000,000+ in taxes for our US Expat clients for the Year 2023 alone.
          </p>
          <div className='flex flex-row  justify-between w-full lg:w-4/12 lg:justify-evenly'>
            <Link href={taxDome} id='button1' type="button" className="px-5 py-4 mt-24 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
              Save Taxes with Us
            </Link>
            <Link href={"#section6"} id='button2' type="button" className="px-5 py-4 mt-24 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
              Our Process
            </Link>
          </div>
          
      </section>
      <section className='flex lg:flex-row flex-col items-start w-full h-full bg-white lg:p-20 py-20 px-4' id='section6'>
          <div className='flex flex-col lg:w-6/12'>
            <p className='title lg:text-6xl text-3xl font-extrabold' >
              How Can I Avail the 2-in-1<br className='hidden lg:block'/>Tax Preparation Services?
            </p>
            <div className='hidden lg:flex lg:flex-row flex-col justify-center w-full lg:justify-start'>
              <Link href={taxDome} id='button1' type="button" className="px-10 py-4 lg:mt-24 mt-10 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                  Get Started
              </Link>
              <ExitModal/>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-row w-full lg:text-2xl font-normal sm:text-lg mt-5'>
              <div className='flex flex-col justify-center items-center lg:mr-10 mr-5'>
                <Image alt='circle' width={50} height={50} src='images/icons/elements/circle-1.svg' className=' lg:w-8 w-20'/>
                <div className='flex-1 mt-2 pb-20' style={{width:'2px', height:'100px',background: "#002147"}}>
                
                </div>
              </div>
              <div>
                <div id='bullet-title' className='lg:text-2xl text-xl'>Complete Your Intake Form</div>
                <div id='bullet-text' className='lg:text-lg'>
                Begin by sharing your unique expat situation and tax details through our user-friendly client intake form.
                </div>
              </div>
            </div>

            <div className='flex flex-row w-full lg:text-2xl font-normal sm:text-lg mt-5'>
              <div className='flex flex-col justify-center items-center lg:mr-10 mr-5'>
                <Image alt='circle' width={50} height={50} src='images/icons/elements/circle-2.svg' className=' lg:w-8 w-20'/>
                <div className='flex-1 mt-2 pb-20' style={{width:'2px', height:'100px',background: "#002147"}}>
                
                </div>
              </div>
              <div>
                <div id='bullet-title' className='lg:text-2xl text-xl'>Invest in Your Consultation</div>
                <div id='bullet-text' className='lg:text-lg'>
                Invest $300 for your consultation fee, credited against the $1500 2-in-1 Tax Preparation service.
                </div>
              </div>
            </div>

            <div className='flex flex-row w-full lg:text-2xl font-normal sm:text-lg mt-5'>
              <div className='flex flex-col justify-center items-center lg:mr-10 mr-5'>
                <Image alt='circle' width={50} height={50} src='images/icons/elements/circle-3.svg' className=' lg:w-8 w-20'/>
                <div className='flex-1 mt-2 pb-20' style={{width:'2px', height:'100px',background: "#002147"}}>
                
                </div>
              </div>
              <div>
                <div id='bullet-title' className='lg:text-2xl text-xl'>Invest in Your Consultation</div>
                <div id='bullet-text' className='lg:text-lg'>
                Upon verification and approval, secure your consultation slot through a personalized booking link.
                </div>
              </div>
            </div>

            <div className='flex flex-row w-full lg:text-2xl font-normal sm:text-lg mt-5'>
              <div className='flex flex-col justify-center items-center lg:mr-10 mr-5'>
                <Image alt='circle' width={50} height={50} src='images/icons/elements/circle-4.svg' className=' lg:w-8 w-20'/>
                <div className='flex-1 mt-2 pb-20' style={{width:'2px', height:'100px',background: "#002147"}}>
                
                </div>
              </div>
              <div>
                <div id='bullet-title' className='lg:text-2xl text-xl'>Welcome Aboard!</div>
                <div id='bullet-text' className='lg:text-lg'>
                Join our client family and let us expertly handle your cross-border taxes with precision and compliance.
                </div>
              </div>
            </div>
            
          </div>
          <div className='lg:hidden flex lg:flex-row flex-col justify-center w-full lg:justify-start'>
              <Link href={taxDome} id='button1' type="button" className="px-10 py-4 lg:mt-24 mt-10 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 text" >
                  Get Started
              </Link>
              <ExitModal/>
            </div>
      </section>
      <section className='flex flex-col lg:flex-row justify-between items-center lg:items-start  w-full h-full bg-white lg:p-20 pt-20 px-4' id='section7'>

        <div className='flex flex-col w-full lg:m-20'>
            <div className='title-blue lg:text-6xl text-3xl' >
                Your Current Situation vs <br/>
                When You Work with Us
            </div>
            <div className='flex flex-col items-start justify-start lg:mt-24 mt-16'>
              <div className='flex flex-row justify-between items-start w-full lg:text-lg' style={{color:"#00214"}}>
                <div className='flex flex-row justify-start items-start lg:text-lg lg:w-10/12'></div>
                <div className='flex flex-row justify-start items-start text-sm lg:text-lg w-7/12 lg:w-10/12'>
                  What You Do Now
                </div>
                <div className='flex flex-row justify-start items-start text-sm lg:text-lg w-7/12 lg:w-10/12 lg:pl-10'>
                  With MIL's 2-in-1 Tax Preparation
                </div>
              </div>
              <div className='mt-10' style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
              <div className='lg:hidden  lg:flex-row flex flex-col w-full justify-center mt-9 items-center lg:text-lg lg:w-10/12'>
                  Client Scenario
              </div>
              <div className='flex flex-row justify-between items-center w-full lg:my-20 my-10'>
                <div className='hidden lg:flex  lg:flex-row justify-start lg:text-lg lg:w-10/12'>
                  Client Scenario
                </div>
                <div className='font-normal text-left lg:w-10/12'>
                  Engaging independently with two tax professionals handling taxes for different countries or jurisdictions
                </div>
                <div className='font-normal text-left lg:w-10/12 pl-10'>
                  Both MIL and a tax professional from your country of residence work together, ensuring seamless coordination for your cross-border taxes
                </div>
              </div>
              <div style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
              <div className='lg:hidden  lg:flex-row flex flex-col w-full justify-center mt-9 items-center lg:text-lg lg:w-10/12'>
                Interaction
              </div>
              <div className='flex flex-row justify-between items-center w-full my-20'>
                <div className='hidden lg:flex  lg:flex-row justify-start lg:text-lg lg:w-10/12'>
                Interaction
                </div>
                <div className='font-normal text-left lg:w-10/12'>
                Deal with two separate professionals, navigating differing communication styles and requirements.
                </div>
                <div className='font-normal text-left lg:w-10/12 pl-10'>
                One dedicated expert for both US and your country of residence, ensuring streamlined communication.
                </div>
              </div>
              <div style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
              <div className='lg:hidden  lg:flex-row flex flex-col w-full justify-center mt-9 items-center lg:text-lg lg:w-10/12'>
                Coordination Complexity
              </div>
              <div className='flex flex-row justify-between items-center w-full my-20'>
                <div className='hidden lg:flex  lg:flex-row justify-start lg:text-lg lg:w-10/12'>
                Coordination Complexity
                </div>
                <div className='font-normal text-left lg:w-10/12'>
                Juggle communication and coordination between two professionals across different time zones and platforms.
                </div>
                <div className='font-normal text-left lg:w-10/12 pl-10'>
                Enjoy seamless communication and coordination without multiple intermediaries.
                </div>
              </div>
              <div style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
              <div className='lg:hidden  lg:flex-row flex flex-col w-full justify-center mt-9 items-center lg:text-lg lg:w-10/12'>
                Checklist Management
              </div>
              <div className='flex flex-row justify-between items-center w-full my-20'>
                <div className='hidden lg:flex  lg:flex-row justify-start lg:text-lg lg:w-10/12'>
                Checklist Management
                </div>
                <div className='font-normal text-left lg:w-10/12'>
                Manage two distinct tax checklists, potentially leading to duplicated efforts and missed requirements.
                </div>
                <div className='font-normal text-left lg:w-10/12 pl-10'>
                Utilize a single comprehensive checklist for both countries' requirements, reducing redundancy.
                </div>
              </div>
              <div style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
              <div className='lg:hidden  lg:flex-row flex flex-col w-full justify-center mt-9 items-center lg:text-lg lg:w-10/12'>
                Payment Handling
              </div>
              <div className='flex flex-row justify-between items-center w-full my-20'>
                <div className='hidden lg:flex  lg:flex-row justify-start lg:text-lg lg:w-10/12'>
                Payment Handling
                </div>
                <div className='font-normal text-left lg:w-10/12'>
                Handle separate payments to two professionals, increasing administrative work and potential confusion.
                </div>
                <div className='font-normal text-left lg:w-10/12 pl-10'>
                Make a single payment to MIL for ease and transparency in financial transactions.
                </div>
              </div>
              <div style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
              <div className='lg:hidden  lg:flex-row flex flex-col w-full justify-center mt-9 items-center lg:text-lg lg:w-10/12'>
                Expertise
              </div>
              <div className='flex flex-row justify-between items-center w-full my-20'>
                <div className='hidden lg:flex  lg:flex-row justify-start lg:text-lg lg:w-10/12'>
                Expertise
                </div>
                <div className='font-normal text-left lg:w-10/12'>
                Lack comprehensive understanding and firsthand expat experience, potentially impacting personalized service quality.
                </div>
                <div className='font-normal text-left lg:w-10/12 pl-10'>
                Benefit from the wisdom of an expat founder with 26 years of firsthand experience, ensuring personalized service.
                </div>
              </div>
            </div>
        </div>
      
      </section>
      <section className='flex lg:flex-row flex-col  justify-between items-start w-full h-full bg-white lg:p-20 py-20 px-4' id='section8'>
          <div className=' title-white lg:w-6/12 lg:text-6xl text-3xl' >
            Expertise & Savings, brought to you by Mertz International Limited
          </div>
          <div className='flex-1'>
            <div className='flex flex-col justify-between items-start w-full'>
              <div className='flex flex-row p-3'>
                <Image alt='circle' width={50} height={50} className='w-5' src='images/icons/circle-star.svg'/>
                <div className='text1 ml-5 lg:text-xl w-full'>
                  Led by an expat founder with 26 years of personal experience, we understand your needs firsthand.
                </div>
              </div>
              <div className='flex flex-row p-3'>
                <Image alt='circle' width={50} height={50} className='w-5' src='images/icons/circle-star.svg'/>
                <div className='text1 ml-5 lg:text-xl w-full'>
                Benefit from our expertise in tax avoidance, ensuring maximum savings for US expats.
                </div>
              </div>
              <div className='flex flex-row p-3'>
                <Image alt='circle' width={50} height={50} className='w-5' src='images/icons/circle-star.svg'/>
                <div className='text1 ml-5 lg:text-xl w-full'>
                Trust our established system, refined over 16 years and serving 6000+ clients globally.
                </div>
              </div>
              <div className='flex flex-row  justify-between items-start w-full lg:w-8/12 lg:justify-evenly'>
                <Link href={taxDome} id='button1' type="button" className="px-5 py-4 mt-24 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
                  Work with Us
                </Link>
                <ContactButton2/>
                {/* <button id='button3' type="button" className="flex flex-row justify-center items-center  px-5 py-4 mt-24" style={{color:"#FFFFFF"}}>
                  Contact Us <Image alt='arrow-right' width={50} height={50} src='images/icons/elements/arrow-right-white.svg' style={{height:'30px',marginLeft:'15px', color:'white'}}/>
                </button> */}
              </div>
            </div>
          </div>
         
         
      </section>
      <section className='flex flex-col items-center w-full h-full bg-white lg:p-20 py-20 px-4' id='section6'>
          <div className='flex flex-col w-full'>
            <p className='title lg:text-5xl text-3xl text-center' >
              What our Clients Say
            </p>
            <SliderPerview/>
            
          </div>
          
      </section>
      <section className='flex flex-col lg:flex-row justify-between items-center lg:items-center  w-full h-full bg-white lg:p-20 pt-20 lg:px-50' id='section7'>
          <div className='flex flex-col justify-center items-center w-full lg:m-15'>
              <div className='title-blue lg:text-6xl text-3xl' style={{color:'#002147'}}>
                  FAQs
              </div>
              <FAQs/>
              <div style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
              <div className='title-blue lg:text-4xl text-3xl lg:mt-20 mt-10' >
                  Still have a question?
              </div>
              <div className='text-sm mt-3 font-light mx-12' >
                Our team is one email away if you have more questions about our services.
              </div>
              <ContactButton/>
              {/* <Link  id='button4' type="button" className="flex flex-row justify-center items-center py-4 mt-14 w-6/12 mb-32 lg:w-2/12" style={{color:"#002147"}}>
                  Contact Us <Image width={50} height={50} alt='arrow-right' src='images/icons/elements/arrow-right.svg' style={{height:'30px',marginLeft:'10px', color:'#002147'}}/>
              </Link> */}
          </div>
        
      </section>
      <section className='flex flex-col  justify-between items-center w-full h-full bg-white lg:p-20 py-20 px-4' id='section8'>
          <div className=' title-white text-center lg:w-6/12 lg:text-6xl text-3xl' >
            Start Your Simplified Expat Tax Journey with Us
          </div>
          <div className=' lg:text-lg font-light text-center mt-10'>
            Complete our intake form to enjoy our streamlined services especially tailored to US Expats around the world.
          </div>
          <div className='flex flex-row  justify-between w-full lg:w-4/12 lg:justify-evenly'>
            <Link href={taxDome} id='button1' type="button" className="px-8 py-4 mt-24 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
              Get Started
            </Link>
            <ExitModal  style={{color:"white"}} showArrow = {false}/>
            {/* <button id='button2' type="button" className="px-5 py-4 mt-24 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" >
              Skip on Tax Savings
            </button> */}
          </div>
      </section>
      <footer className='bg-white flex flex-col justify-center items-center p-10'>
          <div className=' lg:text-lg font-light text-center mt-10'>
            Complete our intake form to enjoy our streamlined services especially tailored to US Expats around the world.
          </div>
          <div className='flex flex-row justify-between lg:w-72 w-7/12 lg:mt-11 mt-5'>
            <Link href={facebook}>
              <Image
                width={150}
                height={50}
                alt='facebook'
                style={{cursor:'pointer'}}
                className='lg:w-16 w-10'
                src='images/icons/facebook.svg' 
              />
            </Link>
            <Link href={linkin} >
              <Image
                width={150}
                height={50}
                alt='linkin'
                style={{cursor:'pointer'}}
                className='lg:w-16 w-10'
                src='images/icons/linkin.svg' 
              />
            </Link>
            <Link href={"https://wa.me/17865380760"}>
              <Image
                width={150}
                height={50}
                alt='whatsapp'
                style={{cursor:'pointer'}}
                className='lg:w-16 w-10'
                src='images/icons/whatsapp.svg' 
              />
            </Link>
            
          </div>
          <div className='lg:mt-20 mt-10' style={{ height:'1px',width:'100%',backgroundColor:'#808285'}}></div>
          <div className='flex lg:flex-row flex-col items-center justify-between w-full mb-10 lg:pt-10 p-10'>
            <Image
              width={150}
              height={50}
              alt='logo'
              src='/images/logo.svg'
            />
             <div className=' font-normal text-xs text-center lg:mt-0 mt-10'>
            © 2023 Mertz International Limited. All rights reserved.
            </div>
          </div>
         
      </footer>
    </main>
  )
}
