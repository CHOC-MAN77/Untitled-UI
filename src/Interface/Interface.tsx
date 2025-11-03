import { IoIosArrowDown, IoLogoTwitter } from 'react-icons/io'
import './style.css'
import { LuPhoneCall, LuSend, LuVideo } from 'react-icons/lu'
import { RiWechatLine } from 'react-icons/ri';
import { GrLocation } from 'react-icons/gr';
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from 'react';

const teamMembers =
[
    {name: "Zahra Christensen", role:"Security Agent", image:"/img/Zahra Christensen.webp"},
    {name: "Youssef Roberson", role:"Customer Success Agent", image:"public/img/Youssef Roberson.webp"},
    {name: "Anita Cruz", role:"Specialized Support", image:"/img/Anita Cruz.webp"},
    {name: "Sienna Hewitt", role:"VP of Customer Success", image:"./img/Sienna Hewitt.webp"},
    {name: "Marco Kelly", role:"Customer Success Lead", image:"./img/Marco Kelly.webp"},
    {name: "Jackson Reed", role:"Customer Success Lead", image:"./img/Jackson Reed.webp"},
    {name: "Ava Bentley", role:"Payments Support", image:"/img/Ava Bentley.webp"}
];

export default function Interface()
    {
          const [phone, setPhone] = useState("");
        
 


        return (
            <>
                <nav className='flex  items-center place-content-center mb-4'>

                    <h1 className='mr-90 text-black font-bold text-xl'>Untitled UI</h1>

                    <ul className='flex space-x-2 text-black font-bold text-[10px]'>
                        <li className='flex'>Home </li>
                        <li className='flex'>Products <IoIosArrowDown className='mt-[1.4px] mx-2'/></li>
                        <li className='flex'>Solutions <IoIosArrowDown className='mt-[1.4px] mx-2'/></li>
                        <li>Pricing</li>
                        <li className='flex'>Ressources <IoIosArrowDown className='mt-[1.4px] mx-2'/></li>
                        <li className='flex'>Company <IoIosArrowDown className='mt-[1.4px] mx-2'/></li>
                        <li className='flex'>Careers <IoIosArrowDown className='mt-[1.4px] mx-2'/></li>

                        <div className='flex text-white font-bold bg-black rounded-full w-25 '>Get in touch</div>
                        
                    </ul>
                    <button className='text-[9px] rounded-full text-white bg-black px-4 py-1 mt-[0px]'>Get Started</button>
                </nav>
                
                <header className='text-center'>
                    <div className='text-4xl font-bold mt-20'>
                        We've got an <span className='around-' >entire</span> team dedicated<br />to supporting you 
                        and your business
                    </div>

                    <div className='mt-2 text-gray-400'>
                        Get help 24/7, with our award-winning support network
                        of payments experts. 
                    </div>
                    
                    <div className='flex text-center place-content-center text-[10px] space-x-2 mt-6'>

                        <div className='flex text-black font-bold bg-white rounded-full w-25 px-4 py-2 border border-gray-200'><LuVideo className='flex mr-1 mt-0.5'/>Book a call</div>
                        <div className='text-white font-bold bg-black rounded-full w-25 px-4 py-2'>Get in touch</div>
                    </div>
                    
                </header>

                <main className=' py-16'>
                <div className="relative w-full overflow-hidden py-10 bg-gray-100">
                    <motion.div
        className="flex space-x-8"
        animate={{ x: ["-50%", "0%"] }} // défilement de moitié de la largeur totale pour boucle continue
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20, // ajuste la vitesse ici
            ease: "linear",
          },
        }}
      >
        {/* On double la liste pour un défilement fluide sans saut */}
        {[...teamMembers, ...teamMembers].map((member, index) => (
          <div
            key={index}
            className="w-60 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
          </div>
        ))}
      </motion.div>
                </div>

                    
                    <section className='py-16 px-6 mx-auto max-w-4xl flex flex-col  md:flex-row gap-8'>
                        <div className='md:w-1/2'>
                            <h1 className='font-bold'>Call us</h1>
                                <p>Call Our team Mon-Fri 8am to 5pm</p>

                                <div className='font-bold'><LuPhoneCall className='space-x-2 mt-1.5'  />+1(555)000-0000</div>

                            <h1 className='font-bold'>Chat with us</h1>

                                <div className='font-bold'><RiWechatLine className='space-x-2 mt-1.5' />Start a live chat</div>
                                <div className='font-bold'><LuSend className='space-x-2 mt-1.5' />Shoot us an email</div>
                                <div className='font-bold'><IoLogoTwitter className='space-x-2 mt-1.5' />Message us on Twetter</div>

                            <h1 className='font-bold'>Visit us</h1>

                                <p>Chat to us in person at our Melbourne HQ</p>
                                <div className='font-bold'><GrLocation className='space-x-2 mt-1.5'/>100 Smith Street, Collingwood VIC 3066</div>
                        </div>
                        <form className='max-w-100  mx-auto bg-white'>

                            <div className='flex space-x-5 text-left font-semibold'>
                                <div>
                                    <label>First name</label>
                                    <input type="text" className='w-full p-2 border border-gray-200 rounded-md mb-4'/>
                                </div>
                                <div>
                                    <label>Last name</label>
                                    <input type="text" className='w-full p-2 border border-gray-200 rounded-md mb-4'/>
                                </div>
                            </div>
                            <div className='text-left font-semibold'>
                                <label>Email</label>
                                <input type="email" className='w-full p-2 border border-gray-200 rounded-md mb-4'/>
                            </div>
                            <div className='text-left font-semibold'>
                                <label>Phone number</label>
                                <PhoneInput
                                    country={"us"}
                                    value={phone}
                                    onChange={setPhone}
                                    inputClass="!w-full !h-10 !border !border-gray-300 !rounded-lg !px-3 !text-black"
                                    containerClass="!w-full"
                                    buttonClass="!border-r-gray-300 !text-[8px]"
                                />
                            </div>
                            <div className='text-left font-semibold'>
                                <label>Message</label>
                                <textarea placeholder='Leave us a Message...' className='w-full p-8 border border-gray-200 rounded-md mb-4'></textarea>
                            </div>
                        
                        <button type="submit" className='bg-black text-white w-full p-2 rounded-full'>Send message</button>
                    </form>
                </section>
                    
                </main>

      {/* Footer */}
      <footer className="bg-black text-white p-12">
        <div className="grid grid-cols-6 gap-4">
          <div className='' >
            <ul className=''>
                <li>Product</li>
                <li>Overview</li>
                <li>Features</li>
                <li className='flex'>Solutions <span className="border border-white bg-black text-xs text-center px-3 my-4 rounded-full">New</span>
                </li>
                <li>Tutorials</li>
                <li>Pricing</li>
                <li>Releases</li>
            </ul>
          </div>
          <div>
            <ul>
                <li>Company</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>News</li>
                <li>Mediat Kit</li>
                <li>Contact</li>
            </ul>
          </div>
          <div>
            <ul>
                <li>Ressources</li>
                <li>Blog</li>
                <li>News Center</li>
                <li>Events</li>
                <li>Helpe Centre</li>
                <li>Tutorials</li>
                <li>Supports</li>
            </ul>
          </div>
          <div>
            <ul>
                <li>Social</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Facebook</li>
                <li>GitHub</li>
                <li>AngelList</li>
                <li>Dribble</li>
            </ul>
          </div>
          <div>
            <ul>
                <li>Legal</li>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Licences</li>
                <li>Settings</li>
                <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4>Get the app</h4>
          </div>
        </div>
        <p className="text-right mt-24">© 2027 Untitled UI. All rights reserved.</p>
      </footer>
            </>
        )
    }
