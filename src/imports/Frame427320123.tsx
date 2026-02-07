import svgPaths from "./svg-gpkcetsu42";

function MembersHeader() {
  return (
    <div className="bg-white content-stretch flex h-[46px] items-center justify-center px-[24px] py-[16px] relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0" data-name=". Members header">
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[20px] text-center">Back</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="capitalize flex-[1_0_0] font-['Hind:SemiBold',sans-serif] leading-[47px] min-h-px min-w-px not-italic relative text-[#0d0d0e] text-[40px] whitespace-pre-wrap">Oregon</p>
      <MembersHeader />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Phone#:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">503-373-0000</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[20px] items-center leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Email:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">N/A</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[20px] items-center leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Fax#</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">503-378-2873</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[20px] items-center leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Hours:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">8:00am-5:00pm Mon-Fr</p>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="link">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="link">
          <mask height="16" id="mask0_1_2822" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_2822)">
            <path d={svgPaths.p2cf99a40} fill="var(--fill-0, #1C1B1F)" id="link_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative">
      <Link />
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px]">Permit Page</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#0d0d0e] text-[18px] w-[100px] whitespace-pre-wrap">Link:</p>
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 w-full">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative w-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] not-italic relative shrink-0 text-[#0d0d0e] text-[28px] w-full whitespace-pre-wrap">Oregon DOT</p>
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center not-italic relative shrink-0 text-[#0d0d0e] w-full whitespace-pre-wrap">
      <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] relative shrink-0 text-[28px] w-full">Operating Time</p>
      <p className="font-['Hind:Regular',sans-serif] leading-[normal] relative shrink-0 text-[18px] w-full">One-half hour before sunrise to one-half hour after sunset seven days a week from Labor Day to Memorial Day. Memorial Day to Labor Day, Saturday travel only until noon and none on Sunday, except not exceeding 14 feet wide can travel weekend, daytime hours only on Interstate highways west of the summit of the Cascade Mountains, and on any authorized highway east of the summit of the Cascade Mountains. Up to 10 feet wide on “green” routes and up to 12 feet wide on Interstates are allowed night travel.</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Length:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">{`53' trailer`}</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Width:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">{`8'6`}</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Height:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">{`14'`}</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] relative shrink-0 w-[100px]">Overhang:</p>
      <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative">front: 4 (from the bumper) | rear: varies depending on the route</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="relative shrink-0 w-[80px] whitespace-pre-wrap">Gross:</p>
      <p className="relative shrink-0">80.000</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="relative shrink-0 w-[80px] whitespace-pre-wrap">Single:</p>
      <p className="relative shrink-0">20.000</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="relative shrink-0 w-[80px] whitespace-pre-wrap">Tandem:</p>
      <p className="relative shrink-0">20.000</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <p className="relative shrink-0 w-[80px] whitespace-pre-wrap">Tridem:</p>
      <p className="relative shrink-0">20.000</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Hind:Regular',sans-serif] gap-[16px] items-start min-h-px min-w-px relative">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Weight:</p>
      <Frame18 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 text-[18px] w-full">
      <Frame12 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-white relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center not-italic p-[32px] relative text-[#0d0d0e] w-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] relative shrink-0 text-[28px] w-full whitespace-pre-wrap">Legal dimensions</p>
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Gross:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">5 axles: 98,000 | 6 axles: 120,500</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Single:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">21.500</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px] whitespace-pre-wrap">Tandem:</p>
      <p className="font-['Hind:Regular',sans-serif] relative shrink-0">43.000</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] relative shrink-0 w-[100px]">Tridem:</p>
      <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative">57.000 - 58.000 | depends on spacing</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full whitespace-pre-wrap">
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] relative shrink-0 w-[100px]">Notes:</p>
      <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative">Gross weight depends on spacings</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 text-[18px] w-full">
      <Frame25 />
      <Frame26 />
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="bg-white relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center not-italic p-[32px] relative text-[#0d0d0e] w-full">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] relative shrink-0 text-[28px] w-full whitespace-pre-wrap">Weight Limits</p>
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px]">Length:</p>
      <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] min-h-px min-w-px relative">{`Over 120' - one escort`}</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] not-italic relative shrink-0 w-[100px]">Single:</p>
      <p className="flex-[1_0_0] font-['Hind:Regular','Noto_Sans:Regular',sans-serif] min-h-px min-w-px relative" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Over 14′ – 1 escort | over 12 - one escort on 2 lane HW
      </p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[20px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] relative shrink-0 w-[100px]">Height:</p>
      <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] min-h-px min-w-px relative">{`Over 14'6 - one escort`}</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex gap-[20px] items-start not-italic relative shrink-0 w-full">
      <p className="font-['Hind:SemiBold',sans-serif] leading-[normal] relative shrink-0 w-[100px]">Notes:</p>
      <p className="flex-[1_0_0] font-['Hind:Regular',sans-serif] leading-[20px] min-h-px min-w-px relative">{`Might require escorts for 'Red Routes' roads (see attachments)`}</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start justify-center relative shrink-0 text-[18px] w-full">
      <Frame32 />
      <Frame33 />
      <Frame34 />
      <Frame35 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-white relative rounded-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center p-[32px] relative text-[#0d0d0e] w-full whitespace-pre-wrap">
          <p className="capitalize font-['Hind:SemiBold',sans-serif] leading-[47px] not-italic relative shrink-0 text-[28px] w-full">Escort Conditions</p>
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[40px] py-[60px] relative rounded-bl-[32px] rounded-tl-[32px] shadow-[2px_2px_12px_0px_rgba(0,0,0,0.15)] size-full">
      <Frame13 />
      <Frame1 />
      <Frame2 />
      <Frame10 />
      <Frame23 />
      <Frame30 />
    </div>
  );
}