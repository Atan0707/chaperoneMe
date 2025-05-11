'use client';
import { useState } from 'react';
import StampCard from '../components/StampCard';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { WalletProvider } from '../components/wallet-provider';

export default function StampPage() {
  const [showConnected, setShowConnected] = useState(false);
  
  return (
    <WalletProvider>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4 bg-[#1A2A3A]">
          <div className="flex items-center space-x-4">
            <a href="/" className="nav-link">HOME</a>
            <a href="/#about-us" className="nav-link">ABOUT US</a>
          </div>
          <div className="wallet-adapter-dropdown">
            <WalletMultiButton className="wallet-adapter-button" />
          </div>
        </nav>
        
        <div className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-mono font-bold text-center text-gray-800 mb-8">
              Tour Guide License
            </h1>
            <StampCard 
              guideName="Michael B. Jordan"
              guideImage="/download.jpeg"
            />
            <p className="text-center text-gray-600 mt-4">
              Click the card to flip and view the verification QR code
            </p>
          </div>
        </div>
      </div>
    </WalletProvider>
  );
} 