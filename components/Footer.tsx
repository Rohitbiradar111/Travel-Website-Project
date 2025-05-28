import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-10">
      <div className="padding-container max-container flex w-full flex-col gap-10">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/">
            <Image
              src="/Logo.png"
              alt="Travado Logo"
              width={120}
              height={40}
              draggable={false}
              className="mb-10"
            />
          </Link>

          <div className="flex flex-wrap gap-5 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn key={columns.title} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn
                key={FOOTER_CONTACT_INFO.title}
                title={FOOTER_CONTACT_INFO.title}
              >
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex regular-14 gap-2 text-gray-30 md:flex-col lg:flex-row"
                  >
                    <p className="cursor-text">{link.label}:</p>
                    <p>{link.value}</p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn key={SOCIALS.title} title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4">
                  {SOCIALS.links.map((link) => (
                    <Link href="/" key={link}>
                      <Image
                        src={link}
                        alt="social icon"
                        width={24}
                        height={24}
                        draggable={false}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          2025 Travado &bull; Your Companion for Exploring India &bull; All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
};

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
