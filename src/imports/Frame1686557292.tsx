import svgPaths from "./svg-jcquk1tgey";
import imgRectangle161124777 from "figma:asset/d006c6a64198400f28f7f57d831274dc9fa439b3.png";

function Heading() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="-translate-x-1/2 absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[40px] left-[752.41px] text-[36px] text-center text-white top-0" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`Ready to Improve Your Farm's Productivity?`}</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Heading />
      <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[20px] text-[rgba(255,255,255,0.9)] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Get in touch with us today to learn more about our organic fertilizer solutions
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #1F7A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1f7a4a] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Submit Enquiry
      </p>
      <Icon />
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[10px] shrink-0 w-[192px]" data-name="Link">
      <Frame1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_55_358)" id="Icon">
          <path d={svgPaths.p27558400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_55_358">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon1 />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Call Us
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[10px] shrink-0 w-[125px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Frame2 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-white col-1 h-[19.617px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.918px_1.617px] mask-size-[18px_18px] ml-[-2.92px] mt-[-1.62px] row-1 w-[22.184px]" style={{ maskImage: `url('${imgRectangle161124777}')` }} />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        WhatsApp
      </p>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-[#0dc853] content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[10px] shrink-0 w-[154px]" data-name="Link">
      <Frame3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[48px] items-center justify-center pr-[0.008px] relative shrink-0" data-name="Container">
      <Frame />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full">
      <Frame4 />
      <Container1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[16px] top-0 w-[1504px]">
      <Frame6 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[180px] relative shrink-0 w-full" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Section() {
  return (
    <div className="bg-gradient-to-b from-[#1f7a4a] relative shrink-0 to-[#165a36] w-full" data-name="Section">
      <div className="content-stretch flex flex-col items-start px-[96px] py-[40px] relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[20px] left-[752.2px] text-[14px] text-[rgba(255,255,255,0.7)] text-center top-[-0.5px] w-[380px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        © 2026 Quality West Company Pty. Ltd. All rights reserved.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#1f7a4a] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col items-start px-[112px] py-[16px] relative w-full">
        <Paragraph />
      </div>
    </div>
  );
}

export default function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Section />
      <Footer />
    </div>
  );
}