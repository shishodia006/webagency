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
      <header className="w-full bg-dark shadow-md fixed top-0 z-50 mb-6">
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
                  className={`w-4 h-4 transition-transform ${
                    toolsOpen ? "rotate-180" : ""
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
                    className={`px-3 py-2 border rounded ${
                      waLink ? "" : "opacity-50 pointer-events-none"
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
