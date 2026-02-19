"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showWAmodal, setShowWAmodal] = useState(false);

  // QR state
  const [qrText, setQrText] = useState("https://example.com");
  const [qrSize, setQrSize] = useState(240);

  // WhatsApp widget state
  const [waNumber, setWaNumber] = useState(""); // e.g. 9198xxxxxxx
  const [waMessage, setWaMessage] = useState("Hello!");

  // 👇 type-safe ref
  const toolsRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (
        toolsRef.current &&
        e.target instanceof Node &&
        !toolsRef.current.contains(e.target)
      ) {
        setToolsOpen(false);
      }
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

  // Build QR image src using Google Chart API
  const qrSrc =
    qrText.trim() === ""
      ? ""
      : `https://chart.googleapis.com/chart?chs=${qrSize}x${qrSize}&cht=qr&chl=${encodeURIComponent(
        qrText
      )}&chld=L|1`;

  // Build WhatsApp link
  const waLink =
    waNumber.trim() === ""
      ? ""
      : `https://wa.me/${waNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
        waMessage
      )}`;

  // Copy text helper
  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard ✅");
    } catch {
      alert("Copy failed — please copy manually.");
    }
  }

  return (
    <>
      <header className="w-full bg-dark shadow-md fixed top-0 h-20 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-blue-600 flex items-center gap-3"
          >
            <Image
              src="/images/Web Agency logo.png"
              alt="WebAgency Logo"
              width={80}
              height={40}
              priority
            />
            <span className="sr-only">Home</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
            <Link href="/services" className="hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="/integration" className="hover:text-blue-600 transition">
              Integration
            </Link>
            <Link href="/portfolio" className="hover:text-blue-600 transition">
              Portfolio
            </Link>

            {/* Free Tools dropdown */}
            <div className="relative" ref={toolsRef}>
              <button
                onClick={() => setToolsOpen((s) => !s)}
                className="hover:text-blue-600 transition flex items-center gap-1"
                aria-expanded={toolsOpen}
                aria-haspopup="true"
              >
                Free Tools
                <svg
                  className={`w-4 h-4 transition-transform ${toolsOpen ? "rotate-180" : ""
                    }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {toolsOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded shadow-lg ring-1 ring-black ring-opacity-5">
                  <button
                    onClick={() => {
                      setShowQRModal(true);
                      setToolsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Generate QR Code
                  </button>
                  <button
                    onClick={() => {
                      setShowWAmodal(true);
                      setToolsOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Generate WhatsApp Widget
                  </button>
                </div>
              )}
            </div>

            <Link href="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
            <Link href="/about" className="hover:text-blue-600 transition">
              About
            </Link>
            <a
              href="https://wa.me/919520477988"
              target="_blank"
              rel="noopener noreferrer"
              className="
    relative hidden md:flex
    items-center gap-2
    bg-[#25D366]
    text-white
    px-6 py-2.5
    rounded-full
    font-semibold
    overflow-hidden
    transition-all duration-300
    hover:scale-105
  "
            >
              <span className="relative z-10">Chat on WhatsApp</span>  <svg width="20" height="20" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.1829 28.5121L12.3002 29.1636C14.1668 30.252 16.2882 30.8333 18.5018 30.8333C25.3134 30.8333 30.8352 25.3115 30.8352 18.4999C30.8352 11.6884 25.3134 6.16659 18.5018 6.16659C11.6903 6.16659 6.16848 11.6884 6.16848 18.4999C6.16848 20.7142 6.75004 22.8363 7.83915 24.7033L8.49032 25.8194L7.48286 29.5219L11.1829 28.5121ZM3.09159 33.9166L5.17586 26.2568C3.84667 23.9784 3.08514 21.3281 3.08514 18.4999C3.08514 9.98553 9.98742 3.08325 18.5018 3.08325C27.0162 3.08325 33.9185 9.98553 33.9185 18.4999C33.9185 27.0142 27.0162 33.9166 18.5018 33.9166C15.6746 33.9166 13.0251 33.1556 10.747 31.8272L3.09159 33.9166ZM12.9385 11.2669C13.1449 11.2524 13.352 11.2502 13.5586 11.2603C13.6421 11.2658 13.7252 11.2754 13.8084 11.285C14.0539 11.3134 14.3239 11.4629 14.4147 11.6687C14.8746 12.7115 15.3208 13.7603 15.7534 14.8148C15.8488 15.0475 15.7913 15.3493 15.6097 15.6412C15.5175 15.7909 15.3727 16.0009 15.205 16.2156C15.0306 16.4387 14.6554 16.8489 14.6554 16.8489C14.6554 16.8489 14.5033 17.0312 14.5606 17.258C14.583 17.3437 14.6542 17.4685 14.7187 17.5735C14.7545 17.6317 14.7877 17.6836 14.8092 17.7195C15.2037 18.3783 15.7341 19.0461 16.3819 19.6741C16.5675 19.854 16.7476 20.0376 16.9412 20.2081C17.6632 20.8446 18.4799 21.3648 19.3621 21.7501L19.37 21.7536C19.5002 21.8097 19.5671 21.8404 19.7578 21.9213C19.854 21.962 19.9524 21.9972 20.0534 22.0239C20.0899 22.0334 20.1274 22.0388 20.165 22.0414C20.4143 22.0564 20.5584 21.8965 20.6199 21.823C21.7353 20.4717 21.8374 20.3835 21.8451 20.3841V20.3866C21.9917 20.2321 22.2222 20.1785 22.4278 20.1911C22.5217 20.1968 22.6152 20.2149 22.7006 20.2539C23.5204 20.6279 24.8609 21.2112 24.8609 21.2112L25.7574 21.6142C25.9075 21.6867 26.0446 21.8574 26.0512 22.0232C26.0552 22.1264 26.0663 22.2929 26.0295 22.5975C25.9812 22.9963 25.8599 23.4766 25.7393 23.7282C25.6546 23.9047 25.5448 24.0613 25.4171 24.1939C25.244 24.3737 25.1154 24.4828 24.9073 24.6379C24.7806 24.7323 24.7149 24.7767 24.7149 24.7767C24.5008 24.9117 24.3801 24.9792 24.1249 25.1151C23.7281 25.3264 23.2896 25.4479 22.8406 25.471C22.5543 25.4857 22.2687 25.5063 21.9828 25.4909C21.9701 25.4901 21.1068 25.3576 21.1068 25.3576C18.9147 24.781 16.8874 23.7009 15.1862 22.203C14.8384 21.8968 14.5159 21.5655 14.1866 21.2378C12.816 19.8732 11.7784 18.4019 11.1492 17.0101C10.8389 16.3237 10.6424 15.5886 10.6393 14.8323C10.6336 13.8966 10.94 12.9857 11.5099 12.2436C11.6223 12.0973 11.7289 11.9456 11.9129 11.7719C12.1077 11.5879 12.2318 11.4891 12.3653 11.4208C12.5434 11.3297 12.739 11.2809 12.9385 11.2669Z" fill="white"></path>
              </svg>

              <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition"></span>
            </a>


          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Tools button */}
            <button
              className="md:hidden px-2 py-1 border rounded text-sm"
              onClick={() => setToolsOpen((s) => !s)}
              aria-label="Free Tools"
            >
              Tools
            </button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-3 bg-dark">
            <Link
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Portfolio
            </Link>
            <Link
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block"
            >
              Contact
            </Link>
            <div className="pt-2 border-t border-gray-700">
              <button
                onClick={() => {
                  setShowQRModal(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left"
              >
                Generate QR Code
              </button>
              <button
                onClick={() => {
                  setShowWAmodal(true);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left"
              >
                Generate WhatsApp Widget
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ---------- QR Modal ---------- */}
      {showQRModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">Generate QR Code</h3>
              <button
                onClick={() => setShowQRModal(false)}
                className="text-gray-600"
              >
                Close
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-sm">Text or URL</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={qrText}
                onChange={(e) => setQrText(e.target.value)}
                placeholder="https://example.com or any text"
              />

              <label className="block text-sm">Size (px)</label>
              <input
                type="number"
                min={120}
                max={800}
                className="w-32 border rounded px-3 py-2"
                value={qrSize}
                onChange={(e) => setQrSize(Number(e.target.value || 240))}
              />

              <div className="pt-3">
                {qrSrc ? (
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={qrSrc}
                      alt="qr"
                      width={qrSize}
                      height={qrSize}
                      className="border"
                    />
                    <div className="flex gap-2">
                      <a
                        href={qrSrc}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 border rounded"
                      >
                        Open image
                      </a>
                      <button
                        onClick={() => copyToClipboard(qrSrc)}
                        className="px-3 py-1 border rounded"
                      >
                        Copy Image URL
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500">
                    Enter text/URL to generate QR.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- WhatsApp Widget Modal ---------- */}
      {showWAmodal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold">
                Generate WhatsApp Widget / Link
              </h3>
              <button
                onClick={() => setShowWAmodal(false)}
                className="text-gray-600"
              >
                Close
              </button>
            </div>

            <div className="space-y-3">
              <label className="block text-sm">
                Phone number (with country code, e.g. 919812345678)
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                value={waNumber}
                onChange={(e) => setWaNumber(e.target.value)}
                placeholder="e.g. 919812345678"
              />

              <label className="block text-sm">Default message</label>
              <input
                className="w-full border rounded px-3 py-2"
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
                placeholder="Hi, I want to..."
              />

              <div className="pt-2">
                <div className="flex gap-2 items-center flex-wrap">
                  <a
                    href={waLink || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2 border rounded ${waLink ? "" : "opacity-50 pointer-events-none"
                      }`}
                  >
                    Open WhatsApp
                  </a>

                  <button
                    onClick={() => waLink && copyToClipboard(waLink)}
                    className="px-3 py-2 border rounded"
                  >
                    Copy Link
                  </button>

                  <button
                    onClick={() => {
                      const snippet = `<a href="${waLink}" target="_blank" rel="noopener noreferrer" class="wa-widget">Chat on WhatsApp</a>`;
                      copyToClipboard(snippet);
                    }}
                    className="px-3 py-2 border rounded"
                  >
                    Copy Embed Snippet
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Tip: To create a floating button, copy the embed snippet and
                  style with CSS.
                </p>

                <details className="mt-3 p-3 border rounded bg-gray-50">
                  <summary className="cursor-pointer">
                    Example CSS for floating button
                  </summary>
                  <pre className="text-xs mt-2 overflow-auto">
                    {`/* paste into your site's CSS */
.wa-widget {
  position: fixed;
  right: 20px;
  bottom: 20px;
  background: #25D366;
  color: white;
  padding: 12px 16px;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 6px 18px rgba(0,0,0,0.15);
}`}
                  </pre>
                </details>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
