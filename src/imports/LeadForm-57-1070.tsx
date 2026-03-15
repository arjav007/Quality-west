import svgPaths from "./svg-u2o1s3hs8j";

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] left-0 text-[#1f7a4a] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[20px]">{`Your Name `}</span>
        <span className="leading-[20px] text-[#ff383c]">*</span>
      </p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]" style={{ fontVariationSettings: "'opsz' 9" }}>
            John Smith
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] left-0 text-[#1f7a4a] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[20px]">{`Phone Number `}</span>
        <span className="leading-[20px] text-[#ff383c]">*</span>
      </p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Phone Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]" style={{ fontVariationSettings: "'opsz' 9" }}>
            +61 400 000 000
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[74px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label1 />
      <PhoneInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[0] left-0 text-[#1f7a4a] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="leading-[20px]">{`Email Address `}</span>
        <span className="leading-[20px] text-[#ff383c]">*</span>
      </p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]" style={{ fontVariationSettings: "'opsz' 9" }}>
            john@example.com
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[74px] items-start min-h-px min-w-px relative" data-name="Container">
      <Label2 />
      <EmailInput />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#1f7a4a] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Products you would like to enquire about
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, #D1D5DC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]" style={{ fontVariationSettings: "'opsz' 9" }}>
            Green Valley Farm
          </p>
          <div className="absolute flex items-center justify-center right-[13px] size-[24px] top-[13px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="flex-none rotate-90">
              <Icon />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <TextInput1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#1f7a4a] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Farm / Organisation Name
      </p>
    </div>
  );
}

function TextInput2() {
  return (
    <div className="h-[50px] relative rounded-[10px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]" style={{ fontVariationSettings: "'opsz' 9" }}>
            Green Valley Farm
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[74px] items-start relative shrink-0 w-full" data-name="Container">
      <Label4 />
      <TextInput2 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#1f7a4a] text-[14px] top-[-0.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Message
      </p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[122px] relative rounded-[10px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.5)]" style={{ fontVariationSettings: "'opsz' 9" }}>
            Tell us about your needs...
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px relative text-[#6a7282] text-[12px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Optional: Share any specific requirements or questions
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[172.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label5 />
      <TextArea />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[261.3px] size-[18px] top-[19px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_57_1077)" id="Icon">
          <path d={svgPaths.p3a8355f0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p280f2c80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_57_1077">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#1f7a4a] h-[56px] relative rounded-[10px] shrink-0 w-full" data-name="Button">
      <Icon1 />
      <p className="-translate-x-1/2 absolute font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] left-[345.3px] text-[16px] text-center text-white top-[16.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Submit Enquiry
      </p>
    </div>
  );
}

export default function LeadForm() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start pt-[32px] px-[32px] relative rounded-[14px] size-full" data-name="LeadForm">
      <Container />
      <Frame />
      <Container3 />
      <Container4 />
      <Container5 />
      <Button />
    </div>
  );
}