import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] text-[#6e6e73] text-[11px] leading-relaxed pt-8 pb-12">
      <div className="max-w-[1024px] mx-auto px-4 space-y-6">
        
        {/* Footnotes */}
        <div className="space-y-2 text-[#86868b] border-b border-[#d2d2d7] pb-6">
          <p>
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made.
          </p>
          <p>
            2. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as an iOS 18 update. Additional features and languages will roll out over the course of the coming year.
          </p>
          <p>
            3. Apple Card Monthly Installments (ACMI) is a 0% APR payment option that is only available if you select it at checkout in the U.S. for eligible products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE.
          </p>
          <p>
            To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS.
          </p>
        </div>

        {/* 5-Column Directory Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-2">
          {/* Col 1 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Shop and Learn</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Store</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Mac</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">iPad</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">iPhone</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Watch</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Vision</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">AirPods</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">TV & Home</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">AirTag</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Apple Wallet</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Wallet</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Card</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Pay</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Cash</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Account</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Manage Your Apple ID</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Store Account</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">iCloud.com</a></li>
              </ul>
            </div>
          </div>

          {/* Col 3 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Entertainment</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple TV+</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Music</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Arcade</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Fitness+</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple News+</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Podcasts</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Books</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">App Store</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-3">
            <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Apple Store</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Find a Store</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Genius Bar</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Today at Apple</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Camp</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Store App</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Certified Refurbished</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Trade In</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Order Status</a></li>
              <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Shopping Help</a></li>
            </ul>
          </div>

          {/* Col 5 */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-[#1d1d1f] tracking-tight">Apple Values</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Education</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Environment</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Supply Chain</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-[#1d1d1f] tracking-tight">About Apple</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Newsroom</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Apple Leadership</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Career Opportunities</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Investors</a></li>
                <li><a href="#" className="hover:text-[#1d1d1f] transition-colors">Ethics & Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-6 border-t border-[#d2d2d7] flex flex-col md:flex-row md:items-center justify-between gap-4 text-[#86868b]">
          <div>
            <p>
              More ways to shop: <a href="#" className="text-[#0071e3] hover:underline">Find an Apple Store</a> or <a href="#" className="text-[#0071e3] hover:underline">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </p>
            <p className="mt-1">
              Copyright © 2024 Apple Inc. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a href="#" className="hover:text-[#1d1d1f] hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] hover:underline">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] hover:underline">Sales Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] hover:underline">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-[#1d1d1f] hover:underline">Site Map</a>
            <span>|</span>
            <span className="font-medium text-[#1d1d1f]">United States</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
