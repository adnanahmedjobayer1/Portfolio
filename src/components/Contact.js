// src/components/Contact.js

import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaFacebook, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState({ status: 'idle', message: '' });

  // --- গুরুত্বপূর্ণ ---
  // আপনার আসল EmailJS তথ্য এখানে দিন
  const serviceID = 'YOUR_SERVICE_ID';
  const templateID = 'YOUR_TEMPLATE_ID';
  const publicKey = 'YOUR_PUBLIC_KEY';

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus({ status: 'sending', message: 'বার্তা পাঠানো হচ্ছে...' });

    // নিচের কোড আনকমেন্ট করে আপনার আসল credential ব্যবহার করুন
    /*
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        setFormStatus({ status: 'success', message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!' });
        form.current.reset();
        setTimeout(() => setFormStatus({ status: 'idle', message: '' }), 5000);
      }, (error) => {
        setFormStatus({ status: 'error', message: 'একটি সমস্যা হয়েছে, অনুগ্রহ করে আবার চেষ্টা করুন।' });
        setTimeout(() => setFormStatus({ status: 'idle', message: '' }), 5000);
      });
    */

    // সিমুলেশন কোড (বাস্তব ব্যবহারের সময় এটি মুছে ফেলুন)
     setTimeout(() => {
         setFormStatus({ status: 'success', message: 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে!' });
         form.current.reset();
         setTimeout(() => setFormStatus({ status: 'idle', message: '' }), 5000);
     }, 2000);
  };

  return (
    // পরিবর্তন ১: Accessibility-র জন্য aria-labelledby যোগ করা হলো
    <section id="contact" className="contact-section" aria-labelledby="contact-section-title">
      <Container>
        <h2 id="contact-section-title" className="section-title text-center mb-5" data-aos="fade-up">
          যোগাযোগ করুন
        </h2>
        <div className="contact-wrapper" data-aos="fade-up" data-aos-delay="200">
          <Row>
            <Col lg={5} className="contact-info-wrapper">
              <h3 className="contact-heading">যোগাযোগের তথ্য</h3>
              <p className="contact-subheading">
                যেকোনো প্রয়োজনে বা আলোচনার জন্য নিচে দেওয়া উপায়ে আমার সাথে যোগাযোগ করতে পারেন।
              </p>
              {/* পরিবর্তন ২: ইমেইল এবং ফোন নম্বর ক্লিকযোগ্য করা হলো */}
              <div className="contact-info-card" data-aos="fade-right" data-aos-delay="300">
                <div className="contact-icon"><FaEnvelope aria-hidden="true" /></div>
                <div className="contact-text">
                  <h5>ইমেইল</h5>
                  {/* নোট: আপনার ইমেইলের বানান চেক করুন (gmil -> gmail) */}
                  <a href="mailto:akborhosen002@gmail.com">akborhosen002@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-card" data-aos="fade-right" data-aos-delay="400">
                <div className="contact-icon"><FaPhoneAlt aria-hidden="true" /></div>
                <div className="contact-text">
                  <h5>ফোন</h5>
                  <a href="tel:+8801310025022">+880 13100-25022</a>
                </div>
              </div>
              <div className="contact-info-card" data-aos="fade-right" data-aos-delay="500">
                <div className="contact-icon"><FaMapMarkerAlt aria-hidden="true" /></div>
                <div className="contact-text">
                  <h5>ঠিকানা</h5>
                  <p>ঢাকা, বাংলাদেশ</p>
                </div>
              </div>
              <div className="social-links-contact mt-4" data-aos="fade-up" data-aos-delay="600">
                <a href="https://www.facebook.com/adnanahmedjobayer" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
                <a href="https://www.tiktok.com/@adnanahmedjobayer" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><FaTiktok /></a>
                <a href="https://wa.me/8801310025022" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              </div>
            </Col>
            
            <Col lg={7} className="contact-form-wrapper">
              <Form ref={form} onSubmit={sendEmail}>
                {/* ফর্মের অংশ অপরিবর্তিত, কারণ এটি ইতিমধ্যেই ভালোভাবে লেবেল করা আছে */}
                <Row>
                  <Col md={6} data-aos="fade-up" data-aos-delay="300">
                    <Form.Group className="mb-4 form-floating-group">
                      <Form.Control type="text" id="name" name="name" placeholder=" " required />
                      <Form.Label htmlFor="name">আপনার নাম</Form.Label>
                    </Form.Group>
                  </Col>
                  <Col md={6} data-aos="fade-up" data-aos-delay="400">
                    <Form.Group className="mb-4 form-floating-group">
                      <Form.Control type="email" id="email" name="email" placeholder=" " required />
                      <Form.Label htmlFor="email">আপনার ইমেইল</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>
                <div data-aos="fade-up" data-aos-delay="500">
                  <Form.Group className="mb-4 form-floating-group">
                    <Form.Control type="text" id="subject" name="subject" placeholder=" " required />
                    <Form.Label htmlFor="subject">বিষয়</Form.Label>
                  </Form.Group>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <Form.Group className="mb-4 form-floating-group">
                    <Form.Control as="textarea" id="message" name="message" rows={5} placeholder=" " required />
                    <Form.Label htmlFor="message">আপনার বার্তা</Form.Label>
                  </Form.Group>
                </div>
                <div data-aos="fade-up" data-aos-delay="700">
                  <Button type="submit" className="cyber-submit-btn" disabled={formStatus.status === 'sending'}>
                    {formStatus.status === 'sending' ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
                  </Button>
                </div>
                {formStatus.status !== 'idle' &&
                  // এই Alert কম্পোনেন্টটি screen reader এর জন্য ভালো (role="alert")
                  <Alert 
                    variant={formStatus.status === 'success' ? 'success' : 'danger'} 
                    className="mt-3 form-status-alert">
                    {formStatus.message}
                  </Alert>
                }
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Contact;