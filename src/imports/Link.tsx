import imgRectangle161124777 from "figma:asset/d006c6a64198400f28f7f57d831274dc9fa439b3.png";

function MaskGroup() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Mask group">
      <div className="bg-white col-1 h-[19.617px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[2.918px_1.617px] mask-size-[18px_18px] ml-[-2.92px] mt-[-1.62px] row-1 w-[22.184px]" style={{ maskImage: `url('${imgRectangle161124777}')` }} />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MaskGroup />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        WhatsApp
      </p>
    </div>
  );
}

export default function Link() {
  return (
    <div className="bg-[#0dc853] content-stretch flex flex-col items-start px-[24px] py-[12px] relative rounded-[10px] size-full" data-name="Link">
      <Frame />
    </div>
  );
}