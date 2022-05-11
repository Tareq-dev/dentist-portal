import React from "react";
import footer from "../../assets/images/footer.png";

const Footer = () => {
  return (
    <div style={{ background: `url(${footer})`, backgroundSize: "cover" }}>
      <footer class="footer p-10 py-14 text-base-content">
        <div>
          <span class="footer-title">Services</span>
          <a href="//" class="link link-hover">
            Branding
          </a>
          <a href="//" class="link link-hover">
            Design
          </a>
          <a href="//" class="link link-hover">
            Marketing
          </a>
          <a href="//" class="link link-hover">
            Advertisement
          </a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a href="//" class="link link-hover">
            About us
          </a>
          <a href="//" class="link link-hover">
            Contact
          </a>
          <a href="//" class="link link-hover">
            Jobs
          </a>
          <a href="//" class="link link-hover">
            Press kit
          </a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a href="//" class="link link-hover">
            Terms of use
          </a>
          <a href="//" class="link link-hover">
            Privacy policy
          </a>
          <a href="//" class="link link-hover">
            Cookie policy
          </a>
        </div>
      </footer>
      <p className="text-center py-5">Copyright 2022 All Rights Reserved</p>
    </div>
  );
};

export default Footer;
