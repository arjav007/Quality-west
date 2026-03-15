import svgPaths from "./svg-syywb32c42";
import imgRectangle161124777 from "figma:asset/d006c6a64198400f28f7f57d831274dc9fa439b3.png";

function Icon() {
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
      <Icon />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        Call Us
      </p>
    </div>
  );
}

function Link() {
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

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'opsz' 14" }}>
        WhatsApp
      </p>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[#0dc853] content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[10px] shrink-0 w-[154px]" data-name="Link">
      <Frame1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative size-full">
      <Link />
      <Link1 />
    </div>
  );
}