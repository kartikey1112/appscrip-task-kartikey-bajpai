'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const paymentMethods = [
    { name: 'Google Pay', image: '/gpay.png' },
    { name: 'Mastercard', image: '/ampay.png' },
    { name: 'PayPal', image: '/paypal.png' },
    { name: 'American Express', image: '/amex.png' },
    { name: 'Apple Pay', image: '/apple_pay.png' },
    { name: 'Shop Pay', image: '/pay.png' }
]

export default function Footer() {
    const [email, setEmail] = useState('')
    const [expandedSection, setExpandedSection] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Subscribe:', email)
    }

    const toggleSection = (section) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    return (
        <footer className="footer">
            <div className="footer-desktop">
                <div className="footer-section">
                    <h2>BE THE FIRST TO KNOW</h2>
                    <p>Sign up for updates from mettā muse.</p>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your e-mail...."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>

                <div className="footer-section">
                    <h2>CONTACT US</h2>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                </div>

                <div className="footer-section">
                    <h2>CURRENCY</h2>
                    <div className="currency-selector">
                        <Image src="/Language.png" alt="USD" width={72} height={24} />
                    </div>
                    <p className="currency-note">Transactions will be completed in Euros and a currency reference is available on hover.</p>
                </div>

                <div className="footer-links">
                    <div className="footer-column">
                        <h3>mettā muse</h3>
                        <nav>
                            <Link href="/">About Us</Link>
                            <Link href="/">Stories</Link>
                            <Link href="/">Artisans</Link>
                            <Link href="/">Boutiques</Link>
                            <Link href="/">Contact Us</Link>
                            <Link href="/">EU Compliances Docs</Link>
                        </nav>
                    </div>

                    <div className="footer-column">
                        <h3>QUICK LINKS</h3>
                        <nav>
                            <Link href="/">Orders & Shipping</Link>
                            <Link href="/">Join/Login as a Seller</Link>
                            <Link href="/">Payment & Pricing</Link>
                            <Link href="/">Return & Refunds</Link>
                            <Link href="/">FAQs</Link>
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Terms & Conditions</Link>
                        </nav>
                    </div>

                    <div className="footer-column">
                        <h3>FOLLOW US</h3>
                        <div className="social-links">
                            <Link href="https://instagram.com">
                                <Image src="/insta.png" alt="Instagram" width={24} height={24} />
                            </Link>
                            <Link href="https://linkedin.com">
                                <Image src="/linkedIn.png" alt="LinkedIn" width={24} height={24} />
                            </Link>
                        </div>

                        <div className="footer-bottom">
                    <h3>mettā muse ACCEPTS</h3>
                    <div className="payment-methods">
                        {paymentMethods.map((method) => (
                            <Image 
                                key={method.name}
                                src={method.image}
                                alt={method.name}
                                width={40}
                                height={24}
                            />
                        ))}
                    </div>
                </div>
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className="footer-mobile">
                <div className="mobile-section">
                    <h2>BE THE FIRST TO KNOW</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your e-mail..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>

                <div className="mobile-section">
                    <h2>CALL US</h2>
                    <p>+44 221 133 5360 • customercare@mettamuse.com</p>
                </div>

                <div className="mobile-section">
                    <h2>CURRENCY</h2>
                    <div className="currency-selector">
                     <Image src="/Language.png" alt="USD" width={72} height={24} />
                    </div>
                </div>

                <div className="mobile-accordion">
                    <button 
                        className="accordion-header"
                        onClick={() => toggleSection('metta')}
                    >
                        <span>mettā muse</span>
                        <ChevronDown className={expandedSection === 'metta' ? 'rotate-180' : ''} />
                    </button>
                    {expandedSection === 'metta' && (
                        <nav className="accordion-content">
                            <Link href="/">About Us</Link>
                            <Link href="/">Stories</Link>
                            <Link href="/">Artisans</Link>
                            <Link href="/">Boutiques</Link>
                            <Link href="/">Contact Us</Link>
                            <Link href="/">EU Compliances Docs</Link>
                        </nav>
                    )}

                    <button 
                        className="accordion-header"
                        onClick={() => toggleSection('quick')}
                    >
                        <span>QUICK LINKS</span>
                        <ChevronDown className={expandedSection === 'quick' ? 'rotate-180' : ''} />
                    </button>
                    {expandedSection === 'quick' && (
                        <nav className="accordion-content">
                            <Link href="/">Orders & Shipping</Link>
                            <Link href="/">Join/Login as a Seller</Link>
                            <Link href="/">Payment & Pricing</Link>
                            <Link href="/">Return & Refunds</Link>
                            <Link href="/">FAQs</Link>
                            <Link href="/">Privacy Policy</Link>
                            <Link href="/">Terms & Conditions</Link>
                        </nav>
                    )}

                    <button 
                        className="accordion-header"
                        onClick={() => toggleSection('follow')}
                    >
                        <span>FOLLOW US</span>
                        <ChevronDown className={expandedSection === 'follow' ? 'rotate-180' : ''} />
                    </button>
                    {expandedSection === 'follow' && (
                        <div className="accordion-content social-links">
                            <Link href="https://instagram.com">
                                <Image src="/insta.png" alt="Instagram" width={24} height={24} />
                            </Link>
                            <Link href="https://linkedin.com">
                                <Image src="/linkedIn.png" alt="LinkedIn" width={24} height={24} />
                            </Link>
                        </div>
                    )}
                </div>

                <div className="mobile-section ">
                    <h3>mettā muse ACCEPTS</h3>
                    <div className="payment-methods">
                        {paymentMethods.map((method) => (
                            <Image 
                                key={method.name}
                                src={method.image}
                                alt={method.name}
                                width={40}
                                height={24}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="copyright">
                Copyright © 2023 mettamuse. All rights reserved.
            </div>
        </footer>
    )
} 