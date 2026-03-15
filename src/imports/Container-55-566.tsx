import svgPaths from "./svg-r2v8etardg";

function Icon() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p27a4c080} id="Vector" stroke="var(--stroke-0, #1F7A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p29656c80} id="Vector_2" stroke="var(--stroke-0, #1F7A4A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-[#f8f9f6] content-stretch flex items-center justify-center left-[139px] rounded-[16777200px] size-[80px] top-0" data-name="Container">
      <Icon />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <p className="-translate-x-1/2 absolute font-['Fraunces:SemiBold',sans-serif] font-semibold leading-[28px] left-[179.77px] text-[#1f7a4a] text-[20px] text-center top-[90px]" style={{ fontVariationSettings: "'SOFT' 0, 'WONK' 1" }}>{`Better Yield & Quality`}</p>
      <p className="-translate-x-1/2 absolute font-['DM_Sans:9pt_Regular',sans-serif] font-normal leading-[24px] left-[179.27px] text-[#6b6b6b] text-[16px] text-center top-[132px] w-[322px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 9" }}>
        Increases crop yields while improving taste, color, shelf life, and overall market value
      </p>
    </div>
  );
}