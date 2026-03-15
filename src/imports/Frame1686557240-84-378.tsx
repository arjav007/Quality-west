import svgPaths from "./svg-1gnr18wby5";

function Text() {
  return (
    <div className="h-[28px] relative shrink-0 w-[35.531px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-[-0.5px] whitespace-nowrap">QW</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#1f7a4a] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Text />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[22.5px] left-0 not-italic text-[#1f7a4a] text-[18px] top-[0.5px] whitespace-nowrap">Quality West</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6b6b6b] text-[12px] top-[0.5px] whitespace-nowrap">Organic Solutions</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[38.5px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[40px] items-center left-[112px] top-[18px] w-[167.039px]" data-name="Link">
      <Container />
      <Container1 />
    </div>
  );
}

function Link1() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-1px] whitespace-nowrap">Why Choose Us</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[68.492px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-1px] whitespace-nowrap">Products</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[62.984px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-1px] whitespace-nowrap">Benefits</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[95.945px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-1px] whitespace-nowrap">Testimonials</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.977px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#6b6b6b] text-[16px] top-[-1px] whitespace-nowrap">About</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex gap-[32px] h-[24px] items-center left-[571.28px] top-[26px] w-[523.734px]" data-name="Navigation">
      <Link1 />
      <Link2 />
      <Link3 />
      <Link4 />
      <Link5 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_84_382)" id="Icon">
          <path d={svgPaths.p27558400} id="Vector" stroke="var(--stroke-0, #1F7A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_84_382">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Icon />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#1f7a4a] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Call Us
      </p>
    </div>
  );
}

function Link6() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[125px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#1f7a4a] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[24px] py-[12px] relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="bg-[#1f7a4a] h-[48px] relative rounded-[10px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[24px] py-[9px] relative">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Enquire Now</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[1330px] top-[14px]" data-name="Container">
      <Link6 />
      <Link7 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Link />
      <Navigation />
      <Container2 />
    </div>
  );
}