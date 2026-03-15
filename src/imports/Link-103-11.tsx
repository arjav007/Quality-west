import svgPaths from "./svg-w702miu34f";

function Icon() {
  return (
    <div className="absolute left-[24px] size-[18px] top-[15px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_103_15)" id="Icon">
          <path d={svgPaths.p27558400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_103_15">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] border border-[rgba(255,255,255,0.4)] border-solid relative rounded-[10px] size-full" data-name="Link">
      <Icon />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[50px] not-italic text-[16px] text-white top-[11px] whitespace-nowrap">Call Us</p>
    </div>
  );
}