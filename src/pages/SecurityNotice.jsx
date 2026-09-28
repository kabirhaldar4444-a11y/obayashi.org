import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldAlert, 
  AlertTriangle, 
  ExternalLink, 
  PhoneCall, 
  Mail, 
  ArrowLeft, 
  UserX, 
  Search, 
  MailWarning, 
  MessageSquareWarning, 
  BadgeAlert,
  Building,
  FileCheck2,
  Lock,
  ChevronRight
} from 'lucide-react';

export default function SecurityNotice() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sn-page-wrapper fade-in">
      <div className="sn-container">
        {/* Top Navigation & Breadcrumbs */}
        <div className="sn-nav-bar">
          <Link to="/contact" className="sn-back-link">
            <ArrowLeft size={16} />
            <span>Back to Contact Us</span>
          </Link>

          <div className="sn-breadcrumb">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={12} />
            <Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
            <ChevronRight size={12} />
            <span style={{ color: '#0f172a', fontWeight: 600 }}>Security Notice</span>
          </div>
        </div>

        {/* Main Advisory Document */}
        <div className="sn-document-card">
          {/* Header Tag */}
          <div className="sn-header-badge">
            <ShieldAlert size={15} />
            <span>Official Fraud Advisory & Security Notice</span>
          </div>

          <h1 className="sn-document-title">
            Notice Regarding Fraudulent Job Offers
          </h1>

          <p className="sn-document-intro">
            We are aware that certain individuals or entities may occasionally send fraudulent employment offers using the name of <strong style={{ color: '#0f172a' }}>Obayashi</strong> or its affiliated companies. These unsolicited job offers are not authentic and are not associated with our company in any way.
          </p>

          {/* Highlighted Policy Callout (Prominent Hiring Process Statement) */}
          <div className="sn-policy-callout">
            <div className="sn-policy-icon-badge">
              <Lock size={20} strokeWidth={2.2} />
            </div>
            <div className="sn-policy-content">
              <span className="sn-policy-tag">Mandatory Obayashi Recruitment Policy</span>
              <p className="sn-policy-text">
                Obayashi does not make offers of employment before completing a thorough hiring process, which may include multiple rounds of interviews with our recruitment and leadership teams.
              </p>
            </div>
          </div>

          {/* Section: Signs That a Job Offer May Be Fraudulent */}
          <div className="sn-section-header">
            <div className="sn-section-icon">
              <AlertTriangle size={18} color="#d97706" />
            </div>
            <h2 className="sn-section-title">Signs That a Job Offer May Be Fraudulent</h2>
          </div>
          <p className="sn-section-subtitle">
            Be vigilant if you encounter any of the following warning indicators during recruitment interactions:
          </p>

          {/* 4 Regular Sign Cards in 2x2 Grid */}
          <div className="sn-signs-grid">
            <div className="sn-sign-card">
              <div className="sn-sign-icon-wrap">
                <UserX size={18} />
              </div>
              <div className="sn-sign-info">
                <h3 className="sn-sign-title">No Prior Application</h3>
                <p className="sn-sign-desc">
                  The individual or entity contacted you about a job that you never applied for.
                </p>
              </div>
            </div>

            <div className="sn-sign-card">
              <div className="sn-sign-icon-wrap">
                <Search size={18} />
              </div>
              <div className="sn-sign-info">
                <h3 className="sn-sign-title">Not Listed Online</h3>
                <p className="sn-sign-desc">
                  The job referenced is not posted on the official <strong style={{ color: '#0f172a' }}>Obayashi Careers</strong> website or verified recruitment channels.
                </p>
              </div>
            </div>

            <div className="sn-sign-card">
              <div className="sn-sign-icon-wrap">
                <MailWarning size={18} />
              </div>
              <div className="sn-sign-info">
                <h3 className="sn-sign-title">Suspicious Email Domains</h3>
                <p className="sn-sign-desc">
                  The individual or entity's email address does not end in an official Obayashi domain. Be cautious of free email services such as <strong style={{ color: '#0f172a' }}>@gmail.com</strong>, <strong style={{ color: '#0f172a' }}>@yahoo.com</strong>, or domains that contain slight misspellings or misleading variations of official Obayashi domains.
                </p>
              </div>
            </div>

            <div className="sn-sign-card">
              <div className="sn-sign-icon-wrap">
                <MessageSquareWarning size={18} />
              </div>
              <div className="sn-sign-info">
                <h3 className="sn-sign-title">Unofficial Communication Channels</h3>
                <p className="sn-sign-desc">
                  You are contacted through WhatsApp, Telegram, Signal, Google Hangouts, or other personal messaging applications instead of formal corporate email or verified professional profiles.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Sign 5: Demands for Money */}
          <div className="sn-sign-card-featured">
            <div className="sn-sign-featured-icon">
              <BadgeAlert size={20} />
            </div>
            <div className="sn-sign-info">
              <h3 className="sn-sign-featured-title">Demands for Money</h3>
              <p className="sn-sign-featured-desc">
                You are asked to make a payment or provide money as part of the recruitment process. <strong style={{ fontWeight: 800 }}>Obayashi will never ask candidates to pay registration fees, security deposits, recruitment charges, laptop or equipment charges, or other fees to secure employment.</strong>
              </p>
            </div>
          </div>

          {/* Section: How to Report Fraud in India */}
          <div className="sn-section-header">
            <div className="sn-section-icon">
              <Building size={18} color="#0284c7" />
            </div>
            <h2 className="sn-section-title">How to Report Fraud in India</h2>
          </div>
          <p className="sn-section-subtitle">
            If you have received a fraudulent job offer or believe you have been a victim of a cyber scam or identity theft, we strongly recommend reporting it immediately to the relevant authorities.
          </p>

          <div className="sn-report-grid">
            {/* National Cyber Crime Portal */}
            <div className="sn-report-card">
              <div>
                <span className="sn-report-badge sn-badge-blue">Central Government Portal</span>
                <h3 className="sn-report-title">National Cyber Crime Portal</h3>
                <p className="sn-report-desc">
                  You can file an online complaint through the National Cyber Crime Reporting Portal or contact the national cybercrime helpline.
                </p>
              </div>

              <div className="sn-report-actions">
                <a 
                  href="https://cybercrime.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="sn-portal-link"
                >
                  <span>cybercrime.gov.in</span>
                  <ExternalLink size={15} />
                </a>

                <a 
                  href="tel:1930" 
                  className="sn-helpline-btn"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <PhoneCall size={16} />
                    <span>Helpline: 1930</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: 500 }}>Toll-Free (24x7)</span>
                </a>
              </div>
            </div>

            {/* Local Authorities */}
            <div className="sn-report-card">
              <div>
                <span className="sn-report-badge sn-badge-slate">Law Enforcement</span>
                <h3 className="sn-report-title">Local Authorities</h3>
                <p className="sn-report-desc">
                  You may also visit your local Cyber Crime Police Station or nearest police station and report the incident.
                </p>
              </div>

              <div className="sn-report-actions">
                <div className="sn-fir-box">
                  <FileCheck2 size={22} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div className="sn-fir-text">
                    <h5>Lodge a First Information Report (FIR)</h5>
                    <p>
                      Lodge a First Information Report (FIR) where appropriate. Preserve all relevant evidence including email headers, payment transactions, phone numbers, and messaging logs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer / Please Note */}
          <div className="sn-disclaimer-box">
            <div className="sn-disclaimer-header">
              <ShieldAlert size={20} />
              <span>Please Note</span>
            </div>
            <p className="sn-disclaimer-primary">
              Obayashi and its affiliated companies are not responsible for fraudulent job offers, impersonation attempts, or any financial losses resulting from such scams.
            </p>
            <p className="sn-disclaimer-secondary">
              Always verify the authenticity of a job offer through <strong style={{ color: '#0f172a' }}>official Obayashi communication channels</strong> before providing personal information, identification documents, banking information, or making any payment.
            </p>
          </div>

          {/* Official Verification Desk */}
          <div className="sn-verify-desk">
            <div>
              <h4 className="sn-verify-title">Need to Verify an Obayashi Communication?</h4>
              <p className="sn-verify-desc">
                Contact our India corporate headquarters recruitment and compliance desk directly.
              </p>
            </div>
            <div className="sn-verify-buttons">
              <a href="mailto:hrd@obayashi.org" className="sn-verify-btn">
                <Mail size={15} color="var(--primary-red)" />
                <span>hrd@obayashi.org</span>
              </a>
              <a href="tel:02241504282" className="sn-verify-btn">
                <PhoneCall size={15} color="var(--primary-red)" />
                <span>022-41504282</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
